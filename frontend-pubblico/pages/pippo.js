export default function Pippo(props) {
  let src = "https://maps.google.com/maps?q=" + props.lat + " ," +  props.lon  +"&z=" + props.zoom + "&output=embed"
  return (
    <iframe src={src} className="w-96 h-96"></iframe>
  )
}
  