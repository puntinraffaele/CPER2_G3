import { useState, useEffect } from 'react';
 
export default function FetchTest() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetch('https://cper2g3earth4sportazurefunction.azurewebsites.net/api/get_device_data?uuid=69d66243-e51c-474d-a41b-fd4ed1a91a42')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
 
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
 
  return (
    <div>
      <h1>{data.uuid}</h1>
      <p>{data.n_batch}</p>
      <p>{data.data_batch}</p>
    </div>
  );
}
