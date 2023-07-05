import { Chart } from 'chart.js/auto'
import { useEffect } from "react"

export default function Graph({ data }) {
    useEffect(() => {
        var distance_ctx = document.getElementById('distanceChart').getContext('2d');
        var distanceChart = new Chart(distance_ctx, {
            type: 'line',
            data: {
                labels: data.map(el => new Date(el.timeStamp).toLocaleTimeString()),
                datasets: [{
                    data: data.map((el, key)=> (el.distance - data[key-1 < 0 ? key : key-1].distance)/3.6),
                    label: "Velocita",
                    borderColor: "#00f",
                    backgroundColor: "#00f",
                    fill: false,
                }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    }
                }
            }
        });
        var bpm_ctx = document.getElementById('bpmChart').getContext('2d');
        var bpmChart = new Chart(bpm_ctx, {
            type: 'line',
            data: {
                labels: data.map(el => new Date(el.timeStamp).toLocaleTimeString()),
                datasets: [{
                    data: data.map(el => el.bpm),
                    label: "",
                    borderColor: "#f00",
                    backgroundColor: "#f00",
                    fill: false,
                }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    }
                }
            }
        });
    }, [])
    return (
        <>  
            <div className='flex flex-row'>
                <span className="  ml-8 text-xl font-semibold capitalize ">Velocità</span>
                <span className="  ml-[40%] text-xl font-semibold capitalize ">BPM</span> 
            </div>

            <div className='flex flex-row justify-evenly'>
                    
                <div className='border border-gray-400 pt-0 rounded-xl  w-[45%] h-fit my-auto  shadow-l'>
                    <canvas id='distanceChart'></canvas>
                </div>
                
                <div className='border border-gray-400 pt-0 rounded-xl  w-[45%] h-fit my-auto  shadow-l'>
                    <canvas id='bpmChart'></canvas>
                </div>
            </div>
        </>
    )
}