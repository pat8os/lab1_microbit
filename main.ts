music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
