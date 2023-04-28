// Prima bozza molto brutta di un simulatore di smartwatch
const sessionUUID = require('uuid').v4()
let pools = 0
let bpm = 0
let position = {
    latitude: (Math.random() * 180) - 90,
    longitude: (Math.random() * 360) -180}

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
    let ran = Math.random()
    if(ran < 0.25){
        position.latitude += Math.random()
        position.longitude += Math.random()
    }
    if(ran >= 0.25 && ran < 0.5){
        position.latitude += Math.random()
        position.longitude -= Math.random()
    }
    if(ran >= 0.5 && ran < 0.75){
        position.latitude -= Math.random()
        position.longitude += Math.random()
    }
    if(ran > 0.75){
        position.latitude -= Math.random()
        position.longitude -= Math.random()
    }
    getBpm()
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