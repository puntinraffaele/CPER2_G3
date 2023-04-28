// Prima bozza molto brutta di un simulatore di smartwatch
const sessionUUID = require('uuid').v4()
let pools = 0
let bpm = 0
let position = {
    latitude: (Math.random() * 180) - 90,
    longitude: (Math.random() * 360) -180}

const sim = () => {
    let random = Math.random()
    if(random < 0.15){
        position.latitude += Math.random()
        position.longitude += Math.random()
    }
    if(random >= 0.15 && random < 0.3){
        position.latitude += Math.random()
        position.longitude -= Math.random()
    }
    if(random >= 0.3 && random < 0.45){
        position.latitude -= Math.random()
        position.longitude += Math.random()
    }
    if(random >= 0.45 && random < 0.6){
        position.latitude -= Math.random()
    }
    if(random >= 0.6 && random < 0.75){
        position.latitude += Math.random()
    }
    if(random >= 0.75 && random < 0.9){
        position.longitude -= Math.random()
    }
    if(random >= 0.9){
        position.longitude += Math.random()
    }
    if(position.latitude > 90){
        
    }
    if(position.latitude < -90){

    }
    if(position.longitude > 180){
        let delta = position.longitude - 180
        position.longitude = -180 + delta
    }
    if(position.longitude <= -180){
        let delta = position.longitude + 180
        position.longitude = 180 - delta
    }
    let res = {
        sessionUUID,
        pools,
        bpm,
        position,
        timestamp: new Date()
    }
    console.log(res)
}
sim()
setInterval(sim, 10000)