namespace SpriteKind {
    export const Bola = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field0, function (sprite, location) {
    let _5_Vidas: Sprite = null
    info.changeLifeBy(5)
    sprites.destroy(_5_Vidas)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jugador.vy += -300
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    sprites.destroy(Negro)
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    sprites.destroy(mySprite)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    sprites.destroy(mySprite)
    tiles.setTileAt(location, assets.tile`transparency16`)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(2)
    sprites.destroy(mySprite)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    sprites.destroy(Negro)
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-5)
})
let mySprite: Sprite = null
let Negro: Sprite = null
let Jugador: Sprite = null
scene.setBackgroundImage(assets.image`Fondo Pantalla`)
tiles.setCurrentTilemap(tilemap`Nivel 1`)
Jugador = sprites.create(assets.image`Jugador`, SpriteKind.Player)
Jugador.setPosition(164, 456)
scene.cameraFollowSprite(Jugador)
controller.moveSprite(Jugador, 100, 10)
Jugador.ay = 800
let Vidas = 5
info.startCountdown(120)
info.setScore(0)
info.setLife(Vidas)
