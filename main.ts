let moisture = 0
Obloq.Obloq_mqtt_setup(
SerialPin.P1,
SerialPin.P2,
"VM6243721",
"Yp6t6kbdxmjd",
"bcomndYGR",
"x5TmndLMgz",
"IdnW7dLMR",
Obloq.SERVERS.Global
)
basic.forever(function () {
    moisture = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    100
    )
    Obloq.Obloq_mqtt_send_message(convertToText(moisture))
    basic.pause(60000)
    if (moisture < 50) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        if (moisture < 80) {
            basic.showIcon(IconNames.Yes)
        } else {
            if (moisture < 100) {
                basic.showIcon(IconNames.StickFigure)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
        basic.showIcon(IconNames.Happy)
    }
})
