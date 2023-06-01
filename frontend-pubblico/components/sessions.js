import { useState, useEffect } from 'react';
const baseURL = 'https://cper2g3earth4sportazurefunction.azurewebsites.net/api/get_sessions_list/'

export default function Sessions({uuid}) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(baseURL + uuid)
      .then((res) => res.json())
      .then((data) => {
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

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  let table = (
    <table>
      <tr>
        <th>Inizio</th>
        <th>Fine</th>
        <th>Distanza</th>
        <th>Vasche</th>
        <th>Bpm</th>
      </tr>
      {
        data.map(el => <tr>
          <td>{el.start}</td>
          <td>{el.end}</td>
          <td>{el.totalDistance}</td>
          <td>{el.totalPools}</td>
          <td>{el.avgBpm}</td>
        </tr>)
      }
    </table>
  )

  return table
}
