let b = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    b = 1
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    while (b == 0) {
        basic.showString("Balsha")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showString("Logo")
})
basic.forever(function () {
	
})
