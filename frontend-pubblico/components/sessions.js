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
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="w-full text-left text-gray-500 dark:text-gray-400">
              <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">Inizio</th>
                  <th scope="col" class="px-6 py-3">Fine</th>
                  <th scope="col" class="px-6 py-3">Distanza</th>
                  <th scope="col" class="px-6 py-3">Vasche</th>
                  <th scope="col" class="px-6 py-3">Bpm</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                {
                  data.map(el => <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td>{el.start}</td>
                    <td>{el.end}</td>
                    <td>{el.totalDistance}</td>
                    <td>{el.totalPools}</td>
                    <td>{el.avgBpm}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

  return table
}
