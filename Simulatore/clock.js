// Prima bozza molto brutta di un simulatore di smartwatch
const sessionUUID = require('uuid').v4()
let pools = 0
let bpm = 0
let position = [0, 0]

const sim = () => {
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