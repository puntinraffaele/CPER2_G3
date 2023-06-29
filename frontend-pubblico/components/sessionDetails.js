import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import Graph from '../components/graph.js'

const url = baseURL + 'get_session_data/'

export default function SessionDetails({ sessionId, detailsAreShown }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url + '3d8cf0e2-ef19-4471-bceb-651057311f3d' + '/' + sessionId)
      .then((res) => res.json())
      .then((data) => {
        data = data.map(el => {
          return el
        })
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  if (!detailsAreShown) return <></>



  let details = (
    <>
      <Graph data={data} />
      <div>
        <canvas id="chart"></canvas>
      </div>
      <tr>
        <th scope="col" className="px-6 py-3">Vasche</th>
        <th scope="col" className="px-6 py-3">Distanza</th>
        <th scope="col" className="px-6 py-3">Bpm</th>
        <th scope="col" className="px-6 py-3">Latitudine</th>
        <th scope="col" className="px-6 py-3">Longitudine</th>
      </tr>
      {
        data.map((el) =>
          <tr className='text-center'>
            <td>
              {el.pools}
            </td>
            <td>
              {el.distance.toFixed(2)} metri
            </td>
            <td>
              {el.bpm}
            </td>
            <td>
              {el.gps.latitude.toFixed(4)}
            </td>
            <td>
              {el.gps.longitude.toFixed(4)}
            </td>
          </tr>
        )
      }
    </>
  )

  return details
}
