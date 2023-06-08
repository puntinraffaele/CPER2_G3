import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';
import SingleSession from './singleSession';

const url = baseURL + 'get_sessions_list/'

export default function Sessions({uuid}) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const ViewSessionDetails = (sessionId) => {
    setSelectedSession(sessionId)
  }

  useEffect(() => {
    setLoading(true);
    fetch(url + uuid)
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
    <div className="flex flex-col mt-16 mx-48">
      <div className="overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="w-full text-left text-gray-400">
              <thead className="uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 ">Inizio</th>
                  <th scope="col" className="px-6 py-3">Fine</th>
                  <th scope="col" className="px-6 py-3">Distanza</th>
                  <th scope="col" className="px-6 py-3">Vasche</th>
                  <th scope="col" className="px-6 py-3">Bpm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {
                  data.map((el, rowIndex) => <><tr key={rowIndex} className="cursor-pointer divide-x divide-gray-700 bg-gray-900" 
                  onClick={() => ViewSessionDetails(el.id)}>
                    <td key="{el.start}" className="px-6 py-3">{el.start}</td>
                    <td key="{el.end}" className="px-6 py-3">{el.end}</td>
                    <td key="{el.totalDistance}" className="px-6 py-3">{el.totalDistance}</td>
                    <td key="{el.totalPools}" className="px-6 py-3">{el.totalPools}</td>
                    <td key="{el.avgBpm}" className="px-6 py-3">{el.avgBpm}</td>
                  </tr>
                  </>
                  )
                }
              </tbody>
            </table>
            <SingleSession selectedSession={selectedSession} />
          </div>
        </div>
      </div>
    </div>
  )

  return table
}

