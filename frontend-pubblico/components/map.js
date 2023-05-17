export default function MapComponent() {
  let lat = 45.92997
  let lon = 12.63661
  let zoom = 15  
  let src = "https://maps.google.com/maps?q=" + lat + " ," +  lon  +"&z=" + zoom + "&output=embed"
  return (
    <div className="flex justify-center">
      <iframe src={src} className="w-screen h-screen"></iframe>
    </div>
  )
}
