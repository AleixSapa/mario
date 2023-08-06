// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Nivel 1":
            case "nivel1":return tiles.createTilemap(hex`14001e00050b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b040200000a00000000000000000000000000000003020000080808080808080000080000000000000302000000000000000000000000000808080800030200000000000000090000000000000000000003020a0000000000000000000000000000090000030200000000000808080808080000000000000803020000000000000000000000000000000000080302000000000000000000000000080808000008030200000000000000000000000000000000080003020000080808080000000900000000000809000302000900000000000000000000000a080000000302000000000000000000000000000800000000030200000900000000000009000000000000000003020000080808000000000000000008080808080302000000000000000000000000000000000000030200000000000000000008080800000000000003020000080808000000000000000000000000000302000000000000000000000000000808000000030200000000000000000000000000000000000a030200000000000000090000000000000000000003020000000000000808080000000900000000000302000900000000000000000000080808080808030200000000000000000a00000000000000000003020808080808000000000000000000000000000302000000000000080800000000000000000000030200000000000000000000080808080000000003020000000000000000000000000000000000000302000000000000000000000000000000000000030701010101010101010101010101010101000006`, img`
2..................2
2..................2
2..2222222..2......2
2.............2222.2
2..................2
2..................2
2.....222222......22
2.................22
2............222..22
2................2.2
2..2222.........2..2
2..............2...2
2.............2....2
2..................2
2..222........222222
2..................2
2.........222......2
2..222.............2
2.............22...2
2..................2
2..................2
2......222.........2
2............2222222
2..................2
222222.............2
2......22..........2
2..........2222....2
2..................2
2..................2
22222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
