let voice = 0
let item = 0
basic.clearScreen()
basic.forever(function () {
    item = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(item)
    basic.pause(50)
    serial.writeValue("item", item)
    if (item > 100) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
basic.forever(function () {
    voice = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(100)
    serial.writeValue("voice", pins.analogReadPin(AnalogPin.P1))
    if (voice > 5) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
