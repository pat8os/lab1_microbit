let temp = 0
OLED.init(128, 64)
basic.forever(function () {
    temp = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P1)
    OLED.clear()
    OLED.writeString("Temperature")
    OLED.writeNum(temp)
})
