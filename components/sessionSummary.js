import SessionDetails from "./sessionDetails";
import { useState } from 'react';

export default function SessionSummary({props}) {

  const [detailsAreShown, setDetailsAreShown] = useState(false);

  return (
      <>
        <tr onClick={() => setDetailsAreShown(!detailsAreShown)} className='cursor-pointer w-40'>
          <td key="{props.start}"  scope="col" className="px-6 py-3 border-y-2  w-50	text-center">{props.start}</td>
          <td key="{props.end}"  scope="col" className="px-6 py-3 border-y-2 w-50	text-center">{props.end}</td>
          <td key="{props.totalDistance}"  scope="col" className="px-6 py-3 border-y-2 w-40	text-center">{props.totalDistance}</td>
          <td key="{props.totalPools}"  scope="col" className="px-6 py-3 border-y-2 w-40 text-center	">{props.totalPools}</td>
          <td key="{props.avgBpm}"  scope="col" className="px-6 py-3 border-y-2 w-40	text-center">{props.avgBpm}</td>
        </tr>
        <SessionDetails sessionId={props.id} detailsAreShown={detailsAreShown} />
      </>
  );
}
