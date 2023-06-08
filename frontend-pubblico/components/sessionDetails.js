import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import { viewSessionDetails } from './sessionSummary';

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
      {
        data.map((el) => 
          <p>
            { el.distance }
            {/* TODO */}
          </p>
        )
      }
    </>
  )

  return prova
}
