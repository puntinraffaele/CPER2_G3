import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';

const url = baseURL + 'get_session_data/'

export default function SessionDetails({sessionId, detailsAreShown}) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url + '3d8cf0e2-ef19-4471-bceb-651057311f3d' + '/' + sessionId)
      .then((res) => res.json())
      .then((data) => {
        data = data.map(el => {
          console.log('bibihi',el.distance)
          return el
        })
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  console.log('ihuhi', data)
  if(!detailsAreShown) return <></>

  let prova = (
    <>
      <div>
        <th scope="col" className="px-6 py-3">Vasche</th>
        <th scope="col" className="px-6 py-3">Distanza</th>
        <th scope="col" className="px-6 py-3">Bpm</th>
        <th scope="col" className="px-6 py-3">Latitudine</th>
        <th scope="col" className="px-6 py-3">Longitudine</th>
      </div>
      {
        data.map((el) => 
          <div>
            { el.pools }
            { el.distance }
            { el.bpm }
            { el.gps.latitude }
            { el.gps.longitude }
          </div>
        )
      }
    </>
  )

  return prova
}
