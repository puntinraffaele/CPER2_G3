import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import Graph from '../components/graph.js'

const url = baseURL + 'session_data/'

export default function SessionDetails({ sessionId, detailsAreShown }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url + '3d8cf0e2-ef19-4471-bceb-651057311f3d' + '/' + sessionId, {
      headers: {
        "Bearer": sessionStorage.getItem('jwt_bearer')
      }
    })
      .then((res) => res.json())
      .then((data) => {
        data = data.map(el => {
          return el
        })
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return (<>
    <p>Loading...</p>
  </>);
  if (!data) return (<>
    <p>No data</p>
  </>);

  if (!detailsAreShown) return <></>



  let details = (
    <div style={{ textAlign: "center", background: "#e2e2e2", width: "850px", borderRadius: "0 0 15px 15px" }}>
      <Graph data={data} />
      <div className='flex justify-center'>
        <div>
          <tr>
            <th scope="col" className="px-6 py-3">Vasche</th>
            <th scope="col" className="px-6 py-3">Distanza (m)</th>
            <th scope="col" className="px-6 py-3">Bpm</th>
            <th scope="col" className="px-6 py-3">Latitudine</th>
            <th scope="col" className="px-6 py-3">Longitudine</th>
          </tr>
          {
            data.map((el) =>
              <tr>
                <td>
                  {el.pools}
                </td>
                <td>
                  {el.distance.toFixed(2)}
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
        </div>
      </div>
    </div>
  )

  return details
}
