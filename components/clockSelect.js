import gotoSession from '../utils/functions';
import { baseURL } from '../utils/urls';
import { useEffect, useState } from 'react'

const url = baseURL + 'user_clocks/'

export default function ClockSelect() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(url, {
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
        setPage(<><h3>Seleziona un orologio:</h3>{data.map((d, key )=> <p key={key} onClick={() => setPage(gotoSession(d))}>{d}</p>)}</>)
        setLoading(false);
      });
  }, []);

  if (isLoading) return (<>
    <p>Loading...</p>
  </>);
  if (!data) return (<>
    <p>No data</p>
  </>);
  return <>
    {page}
  </>
}