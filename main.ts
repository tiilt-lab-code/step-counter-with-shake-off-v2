input.onButtonPressed(Button.A, function () {
    basic.showNumber(final_score)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index)
    }
    basic.showString("Go")
    step = 0
    final_score = 0
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
    final_score = step
    basic.showIcon(IconNames.No)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
let final_score = 0
let step = 0
step = 0
final_score = 0
basic.showString("A+B to start")
