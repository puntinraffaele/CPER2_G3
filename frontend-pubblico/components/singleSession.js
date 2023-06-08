import { useState, useEffect } from 'react';
import { baseURL } from '../utils/urls';

const url = baseURL + 'get_device_data?uuid=69d66243-e51c-474d-a41b-fd4ed1a91a42'

export default function SingleSession() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.data_batch = new Date(data.data_batch).toLocaleString('it')
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
