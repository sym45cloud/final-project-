radio.setGroup(1)
radio.setTransmitPower(1)
let Id = 1
basic.showNumber(Id)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    radio.sendNumber(Id)
    basic.pause(200)
})
