let steps = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(500)
    steps = 0
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
