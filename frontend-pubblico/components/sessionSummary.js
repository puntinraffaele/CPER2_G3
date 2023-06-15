import SessionDetails from "./sessionDetails";
import { useState } from 'react';

export default function SessionSummary({props}) {

  const [detailsAreShown, setDetailsAreShown] = useState(false);

  return (
    <div>
      <div onClick={() => setDetailsAreShown(!detailsAreShown)} className='cursor-pointer'>
        <td key="{props.start}" className="px-6 py-3">{props.start}</td>
        <td key="{props.end}" className="px-6 py-3">{props.end}</td>
        <td key="{props.totalDistance}" className="px-6 py-3">{props.totalDistance}</td>
        <td key="{props.totalPools}" className="px-6 py-3">{props.totalPools}</td>
        <td key="{props.avgBpm}" className="px-6 py-3">{props.avgBpm}</td>
      </div>
      <SessionDetails sessionId={props.id} detailsAreShown={detailsAreShown} />
    </div>
  );
}
