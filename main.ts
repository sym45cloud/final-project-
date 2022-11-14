radio.setGroup(1)
radio.setTransmitPower(0.1)
let Id = 1
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    # # . # #
    # # # # #
    `)
basic.forever(function () {
    radio.sendNumber(Id)
    basic.pause(200)
})
