// Prima bozza molto brutta di un simulatore di smartwatch
const clockID = require('uuid').v4()
console.log('Activities for clock:', clockID)
const sessionUUID = require('uuid').v4()
let pools = 0
let bpm = 0
let position = {
    latitude: (Math.random() * 180) - 90,
    longitude: (Math.random() * 360) -180
}

function generateStartingBpm(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getBpm() {
    let startingBpm = generateStartingBpm(80, 120)
    let chance = Math.random();
    if (chance < 0.5) startingBpm+10
    else startingBpm-10
    bpm = startingBpm
}

const sim = () => {
    let random = Math.random()
    if(random < 1){
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
    if(position.latitude >= 90 ){
        let delta = 90 - position.latitude
        position.latitude = 90 + delta
        position.longitude -= 180
    }
    if(position.latitude < -90){
        let delta = -90 - position.latitude
        position.latitude = -90 + delta
        position.longitude -= 180
    }
    if(position.longitude > 180){
        position.longitude = ((position.longitude + 180) % 360) - 180
    }
    if(position.longitude <= -180){
        position.longitude = ((position.longitude - 180) % 360) + 180
    }
    getBpm()
    let res = {
        sessionUUID,
        activityUUID: require('uuid').v4(),
        pools,
        bpm,
        position,
        timestamp: new Date()
    }
    console.log(res)
}
sim()
setInterval(sim, 100)