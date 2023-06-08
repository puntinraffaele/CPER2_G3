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
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="w-full text-left text-gray-500 dark:text-gray-400">
              <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Inizio</th>
                  <th scope="col" className="px-6 py-3">Fine</th>
                  <th scope="col" className="px-6 py-3">Distanza</th>
                  <th scope="col" className="px-6 py-3">Vasche</th>
                  <th scope="col" className="px-6 py-3">Bpm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {
                  data.map((el, rowIndex) => <><tr key={rowIndex} className="cursor-pointer bg-white border-b dark:bg-gray-900 dark:border-gray-700" 
                  onClick={() => ViewSessionDetails(el.id)}>
                    <td key="{el.start}">{el.start}</td>
                    <td key="{el.end}">{el.end}</td>
                    <td key="{el.totalDistance}">{el.totalDistance}</td>
                    <td key="{el.totalPools}">{el.totalPools}</td>
                    <td key="{el.avgBpm}">{el.avgBpm}</td>
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

