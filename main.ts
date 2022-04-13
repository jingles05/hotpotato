input.onButtonPressed(Button.A, function () {
    countdown = 3
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    while (countdown != 0) {
        basic.showNumber(countdown)
        basic.pause(1000)
        countdown += -1
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("GO!")
    count = randint(3, 15)
    while (count != 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
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
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
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
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let countdown = 0
let strip: neopixel.Strip = null
let count = 0
count = 0
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
let range = strip.range(0, 5)
let range2 = strip.range(5, 10)
let range3 = strip.range(10, 15)
range.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
range2.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
range3.showColor(neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
basic.pause(200)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
