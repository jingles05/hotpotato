input.onButtonPressed(Button.A, function () {
    countdown = 3
    while (countdown != 0) {
        basic.showNumber(countdown)
        basic.pause(1000)
        countdown += -1
    }
    basic.showString("GO!")
    count = randint(3, 15)
    while (count != 0) {
        basic.pause(1000)
        count += -1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    if (count == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
let countdown = 0
let count = 0
count = 0
