namespace SpriteKind {
    export const Bola = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jugador.vy += -300
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
info.onCountdownEnd(function () {
    game.gameOver(false)
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
let mySprite: Sprite = null
let Jugador: Sprite = null
scene.setBackgroundImage(assets.image`Fondo Pantalla`)
tiles.setCurrentTilemap(tilemap`Nivel 1`)
Jugador = sprites.create(assets.image`Jugador`, SpriteKind.Player)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Jugador.setPosition(164, 456)
scene.cameraFollowSprite(Jugador)
controller.moveSprite(Jugador, 100, 10)
Jugador.ay = 800
info.setScore(0)
info.setLife(3)
