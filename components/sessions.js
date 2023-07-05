import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import SessionSummary from './sessionSummary';

const url = baseURL + 'sessions_list'
const c_url = baseURL + 'user_clocks'

export default function Sessions() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(async () => {
    setLoading(true);
    let clocks = await fetch(c_url, {
      headers: {
        "Bearer": sessionStorage.getItem('jwt_bearer')
      }
    }).then((res) => res.json());
    // console.log(clocks);
    await fetch(url + '/' + clocks[0], {
      headers: {
        "Bearer": sessionStorage.getItem('jwt_bearer')
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        else
          return null
      })
      .then((data) => {
        console.log(data)
        if (data)
          data = data.map(el => {
            el.start = new Date(el.start).toLocaleString('it')
            el.end = new Date(el.end).toLocaleString('it')
            el.totalDistance = el.totalDistance.toFixed(2)
            el.avgBpm = el.avgBpm.toFixed(2)
            return el
          })
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return (<>
    <p>Loading...</p>
  </>);;
  if (!data) return (<>
    <p>No data</p>
  </>);

  let table = (
    <div className='mx-80'>
      <tr>
        <th scope="col" className="px-6 py-3">Inizio</th>
        <th scope="col" className="px-6 py-3">Fine</th>
        <th scope="col" className="px-6 py-3">Distanza</th>
        <th scope="col" className="px-6 py-3">Vasche</th>
        <th scope="col" className="px-6 py-3">Bpm</th>
      </tr>
      {
        data.map((el, rowIndex) => <SessionSummary props={el} />
          //  <><tr key={rowIndex} className="cursor-pointer divide-x divide-gray-700 bg-gray-900" 
          // onClick={() => ViewSessionDetails(el.id)}>
          //   <td key="{el.start}" className="px-6 py-3">{el.start}</td>
          //   <td key="{el.end}" className="px-6 py-3">{el.end}</td>
          //   <td key="{el.totalDistance}" className="px-6 py-3">{el.totalDistance}</td>
          //   <td key="{el.totalPools}" className="px-6 py-3">{el.totalPools}</td>
          //   <td key="{el.avgBpm}" className="px-6 py-3">{el.avgBpm}</td>
          // </tr>
          // </>
        )
      }
    </div>
  )

  return table
}
