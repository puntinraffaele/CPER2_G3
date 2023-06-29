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
                    data: data.map(el => el.distance),
                    label: "Distanza",
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
            <h1 className="  mx-auto mt-10 text-xl font-semibold capitalize ">Distance</h1>
            <div className="  flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-2/4 h-fit my-auto  shadow-xl'>
                    <canvas id='distanceChart'></canvas>
                </div>
            </div>
            <h1 className="  mx-auto mt-10 text-xl font-semibold capitalize ">BPM</h1>
            <div className=" flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-2/4 h-fit my-auto  shadow-xl'>
                    <canvas id='bpmChart'></canvas>
                </div>
            </div>
        </>
    )
}