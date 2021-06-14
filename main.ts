input.onPinPressed(TouchPin.P0, function () {
    if (Vuelo < 5) {
        if (!(Validar_xy())) {
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showIcon(IconNames.Diamond)
        basic.showString("FIN")
        basic.showString("TOTAL DE VUELOS")
        basic.showNumber(Vuelo)
    }
})
function LimiteDeCoordanadas () {
    if (Abscisa_X == 4 || Ordena_Y == 4) {
        basic.showString("Se acerca al límite")
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)
    Abscisa_X += 1
    basic.showNumber(Abscisa_X)
    basic.pause(2000)
    if (!(Validar_xy())) {
        basic.showIcon(IconNames.No)
        Abscisa_X += -1
    }
})
function Validar_xy () {
    if (Abscisa_X >= 0 && Ordena_Y >= 0 && (Abscisa_X <= 4 && Ordena_Y <= 4)) {
        basic.clearScreen()
        led.plot(Abscisa_X, Ordena_Y)
        basic.pause(100)
        LimiteDeCoordanadas()
        return true
    } else {
        basic.pause(100)
        basic.showString("NO TENGO PISTA")
        basic.pause(100)
        basic.clearScreen()
        return false
    }
}
input.onPinPressed(TouchPin.P2, function () {
    if (Movimientos == 10) {
        basic.showArrow(ArrowNames.East)
        Ordena_Y += -1
        basic.showNumber(Ordena_Y)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < Abscisa_X + Ordena_Y; index++) {
        basic.showLeds(`
            . . . # .
            # # . # .
            . . # . .
            . # . # #
            . # . . .
            `)
    }
    x__y = game.createSprite(Abscisa_X, Abscisa_X)
    Vuelo += 1
    Abscisa_X = 0
    Ordena_Y = 0
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showArrow(ArrowNames.South)
    Ordena_Y += 1
    basic.showNumber(Ordena_Y)
    basic.pause(2000)
    if (!(Validar_xy())) {
        basic.showIcon(IconNames.No)
        Ordena_Y += -1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Movimientos == 10) {
        basic.showArrow(ArrowNames.West)
        Abscisa_X += 1
        basic.showNumber(Abscisa_X)
    } else {
        basic.showIcon(IconNames.No)
    }
})
function Vuelos () {
    if (Vuelo <= 5) {
        return true
    } else {
        basic.showString("FIN")
        basic.pause(100)
        return false
    }
}
let x__y: game.LedSprite = null
let Movimientos = 0
let Vuelo = 0
let Ordena_Y = 0
let Abscisa_X = 0
Abscisa_X = 0
Ordena_Y = 0
Vuelo = 0
basic.forever(function () {
	
})
