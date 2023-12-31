namespace SpriteKind {
    export const trash = SpriteKind.create()
    export const trashCan = SpriteKind.create()
}

namespace SpriteGame {
    export const foodWaste = img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..............fffffffffff.......
        .............fffdddddddff.......
        ...........fffdfddddddfff.......
        ..........ffdddfdddddff7f.......
        .........ffddddfddddff77f.......
        ........fffffffffffff777f.......
        ........ff777777777f7777f.......
        .........f777777777f7777f.......
        .........f777717777f7777f.......
        .........f777717777f7777f.......
        .........f771111177f7777f.......
        .........f777111777f7777f.......
        .........f777717777f7777f.......
        .........f777717777f7777f.......
        .........f777111777f7777f.......
        .........f771111177f7777f.......
        .........f777777777f7777f.......
        .........f777777777f7777f....1..
        .........f777777777f7777f.......
        .........f777777777f7777f.......
        .........f777777777f777ff.......
        .........f777777777f7ff.........
        .........fffffffffffff..........
        ................................
        ................................
        ................................
    `;
    export const banana = img`
        . . . . . . e . . . . . . . . .
        . . . . . . e e . . . . . . . .
        . . . . . . e e e . . . . . . .
        . . . . . . . e 5 . . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . 5 5 5 5 5 5 . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . . . . 5 5 5 d 5 5 5 5 5 . . .
        . . . . 5 5 d d d 5 5 5 5 5 . .
        . . . 5 5 5 d d 5 . 5 5 5 5 . .
        . . 5 5 5 d d 5 5 5 . 5 5 5 5 .
        . 5 5 d d d . . 5 5 . . 5 5 5 5
        5 d d d . . . . . . . . . . 5 5
        d d d . . . . . . . . . . . . 5
    `;
    export const apple = img`
        . . . . . . . e c 7 . . . . . .
        . . . . e e e c 7 7 e e . . . .
        . . c e e e e c 7 e 2 2 e e . .
        . . . e e e e c 6 e e 2 2 2 . .
        . . . 2 e 2 e c c 2 4 5 2 . . .
        . . . . d 2 2 2 2 2 4 2 . . . .
        . . . . . d 2 2 2 2 d d . . . .
        . . . . . . d d d d d . . . . .
        . . . . . . . d e d . . . . . .
        . . . . . . . d e d . . . . . .
        . . . . . . . d d e . . . . . .
        . . . . . . d d d d d . . . . .
        . . . . . d d d d d d d . . . .
        . . . . 2 d d d d d d d 2 . . .
        . . . 2 2 e e 4 d 4 2 e e 2 . .
        . . . . . 2 2 e e e e . . . . .
    `; 
    export const hazardousWaste = img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............fffffffffff.......
            .............fffdddddddff.......
            ...........fffdfddddddfff.......
            ..........ffdddfdddddff2f.......
            .........ffddddfddddff22f.......
            ........fffffffffffff222f.......
            ........ff222222222f2222f.......
            .........f222222222f2222f.......
            .........f222222222f2222f.......
            .........f222222222f2222f.......
            .........f222212222f2222f.......
            .........f222111222f2222f.......
            .........f221121122f2222f.......
            .........f211121122f2222f.......
            .........f211111112f2222f.......
            .........f111121111f2222f.......
            .........f222222222f2222f.......
            .........f222222222f2222f.......
            .........f222222222f2222f.......
            .........f222222222f2222f.......
            .........f222222222f222ff.......
            .........f222222222f2ff.........
            .........fffffffffffff..........
            ................................
            ................................
            ................................
        `; 
    export const glassWaste = img`
................................
................................
................................
................................
................................
................................
..............fffffffffff.......
.............fffdddddddff.......
...........fffdfddddddfff.......
..........ffdddfdddddff9f.......
.........ffddddfddddff99f.......
........fffffffffffff999f.......
........ff999999999f9999f.......
.........f999999999f9999f.......
.........f999999999f9999f.......
.........f999919999f9999f.......
.........f999919999f9999f.......
.........f999111999f9999f.......
.........f991111199f9999f.......
.........f991111199f9999f.......
.........f991111199f9999f.......
.........f991111199f9999f.......
.........f991111199f9999f.......
.........f991111199f9999f.......
.........f991111199f9999f.......
.........f999999999f9999f.......
.........f999999999f999ff.......
.........f999999999f9ff.........
.........fffffffffffff..........
................................
................................
................................
`; 
    export const restWaste = img`
................................
................................
................................
................................
................................
................................
..............fffffffffff.......
.............fffdddddddff.......
...........fffdfddddddfff.......
..........ffdddfdddddffff.......
.........ffddddfddddfffff.......
........fffffffffffffffff.......
........fffffffffffffffff.......
.........ffffffffffffffff.......
.........ffffffffffffffff.......
.........ffff1f1fffffffff.......
.........ffff1111ffffffff.......
.........fffff11fffffffff.......
.........ffff1111ffffffff.......
.........fff111111fffffff.......
.........ff11111111ffffff.......
.........ff11111111ffffff.......
.........ff11111111ffffff.......
.........ff1111111fffffff....1..
.........fff11111ffffffff.......
.........ffffffffffffffff.......
.........ffffffffffffffff.......
.........ffffffffffffff.........
.........fffffffffffff..........
................................
................................
................................
`;
    export const metalWaste = img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............fffffffffff.......
    .............fffdddddddff.......
    ...........fffdfddddddfff.......
    ..........ffdddfdddddff4f.......
    .........ffddddfddddff44f.......
    ........fffffffffffff444f.......
    ........ff444444444f4444f.......
    .........f444444444f4444f.......
    .........f444444444f4444f.......
    .........f414444444f4444f.......
    .........f414444444f4444f.......
    .........f411111444f4444f.......
    .........f441111444f4444f.......
    .........f441111444f4444f.......
    .........f441111444f4444f.......
    .........f441111444f4444f.......
    .........f441111444f4444f.......
    .........f444444444f4444f....1..
    .........f444444444f4444f.......
    .........f444444444f4444f.......
    .........f444444444f444ff.......
    .........f444444444f4ff.........
    .........fffffffffffff..........
    ................................
    ................................
    ................................
        `; 
    export const can = img`
            . . . . . . . . . . . . . . . .
            . . . . . c c c c c c . . . . .
            . . . . c b d d d d b c . . . .
            . . . c b d d d f f d b c . . .
            . . . c c b d d d d d c c . . .
            . . . c b c c c c c c b c . . .
            . . . c b b d d d d b b c . . .
            . . . c b d d d d d b b c . . .
            . . . c b d d d d d b b c . . .
            . . . c b d d d d d d b c . . .
            . . . c b b d d d d d b c . . .
            . . . c b b d d d d d b c . . .
            . . . c b d d d d d b b c . . .
            . . . c b b b d d d b b c . . .
            . . . . c c b b b b b c . . . .
            . . . . . c c c c c c . . . . .
        `; 
    export const cardboardWaste = img`
................................
................................
................................
................................
................................
................................
..............fffffffffff.......
.............fffdddddddff.......
...........fffdfddddddfff.......
..........ffdddfdddddffef.......
.........ffddddfddddffeef.......
........fffffffffffffeeef.......
........ffeeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeef.......
.........feeeeeeeeefeeeff.......
.........feeeeeeeeefeff.........
.........fffffffffffff..........
................................
................................
................................
`; 
    export const paperWaste = img`
................................
................................
................................
................................
................................
................................
..............fffffffffff.......
.............fffdddddddff.......
...........fffdfddddddfff.......
..........ffdddfdddddff6f.......
.........ffddddfddddff66f.......
........fffffffffffff666f.......
........ff666666666f6666f.......
.........f666666666f6666f.......
.........f666666666f6666f.......
.........f666611166f6666f.......
.........f666111166f6666f.......
.........f661111166f6666f.......
.........f661111166f6666f.......
.........f661111166f6666f.......
.........f661111166f6666f.......
.........f661111166f6666f.......
.........f666666666f6666f.......
.........f666666666f6666f....1..
.........f666666666f6666f.......
.........f666666666f6666f.......
.........f666666666f666ff.......
.........f666666666f6ff.........
.........fffffffffffff..........
................................
................................
................................
`; 
    export const plasticWaste = img`
................................
................................
................................
................................
................................
................................
..............fffffffffff.......
.............fffdddddddff.......
...........fffdfddddddfff.......
..........ffdddfdddddffcf.......
.........ffddddfddddffccf.......
........fffffffffffffcccf.......
........ffcccccccccfccccf.......
.........fcccccccccfccccf.......
.........fcccccccccfccccf.......
.........fcccccccccfccccf.......
.........fcc11111ccfccccf.......
.........fcc1ccc1ccfccccf.......
.........fcc11111ccfccccf.......
.........fcc11111ccfccccf.......
.........fcc11111ccfccccf.......
.........fcc11111ccfccccf.......
.........fcc11111ccfccccf.......
.........fcc11111ccfccccf....1..
.........fcccccccccfccccf.......
.........fcccccccccfccccf.......
.........fcccccccccfcccff.......
.........fcccccccccfcff.........
.........fffffffffffff..........
................................
................................
................................
`; 
    export const fork = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 . 1 . 1 . . . . . .
        . . . . . 1 . 1 . 1 . . . . . .
        . . . . . 1 . 1 . 1 . . . . . .
        . . . . . 1 . 1 . 1 . . . . . .
        . . . . . . 1 1 1 . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
    `;
    export const bag = img`
            . . . . . . . . . . . . . . . .
            . . . . . . 1 1 1 1 . . . . . .
            . . . . . 1 . . . . 1 . . . . .
            . . . . . 1 . . . . 1 . . . . .
            . . . . . 1 . . . . 1 . . . . .
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
            . 1 1 2 1 1 2 1 2 2 1 2 2 1 . .
            . 1 1 2 1 1 2 1 2 1 2 1 2 1 . .
            . 1 1 2 2 2 2 1 2 1 1 1 2 1 1 .
            . 1 1 2 1 1 2 1 2 1 1 1 2 1 1 .
            . 1 1 2 1 1 2 1 2 1 1 1 2 1 1 .
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `;
    export const clothesWaste = img`
................................
................................
................................
................................
................................
................................
..............fffffffffff.......
.............fffdddddddff.......
...........fffdfddddddfff.......
..........ffdddfdddddff3f.......
.........ffddddfddddff33f.......
........fffffffffffff333f.......
........ff333333333f3333f.......
.........f333333333f3333f.......
.........f333333333f3333f.......
.........f333333333f3333f.......
.........f311131113f3333f.......
.........f311111113f3333f.......
.........f331111133f3333f.......
.........f331111133f3333f.......
.........f331111133f3333f.......
.........f331111133f3333f.......
.........f333333333f3333f.......
.........f333333333f3333f.......
.........f333333333f3333f.......
.........f333333333f3333f.......
.........f333333333f333ff.......
.........f333333333f3ff.........
.........fffffffffffff..........
................................
................................
................................
        `;
    export const shirt = img`
            . . . . . . . . . . . . . . . .
            . . . f f f f f f f f f . . . .
            . . f 1 1 f d d d f 1 1 f . . .
            . f 1 1 1 f d d d f 1 1 1 f . .
            f 1 1 1 1 1 f f f 1 1 1 1 1 f .
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f .
            f 1 1 f 1 1 1 1 2 4 1 f 1 1 f .
            f f f f 1 1 1 1 2 2 1 f f f f .
            . . . f 1 1 1 1 2 1 1 f . . . .
            . . . f 1 1 1 1 1 1 1 f . . . .
            . . . f 1 1 1 1 1 4 1 f . . . .
            . . . f 1 1 1 1 1 1 1 f . . . .
            . . . f 1 1 1 1 1 1 1 f . . . .
            . . . f f f f f f f f f . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `;
    export const sock = img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 9 9 9 9 . . . . .
            . . . . . . . 6 6 6 6 . . . . .
            . . . . . . . 6 6 6 6 . . . . .
            . . . . . . . 6 6 6 6 . . . . .
            . . . . . . . 6 6 6 6 . . . . .
            . . . . . . 6 6 6 6 6 . . . . .
            . . . . . 6 6 6 6 6 6 . . . . .
            . . 6 6 6 6 6 6 6 6 6 . . . . .
            9 6 6 6 6 6 6 6 9 9 9 . . . . .
            9 6 6 6 6 6 6 6 9 9 9 . . . . .
            9 9 6 6 6 6 6 6 9 9 . . . . . .
            . 9 9 6 6 . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `;
    export const lightBulb = img`
            . . . . . . f f f f . . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . f 1 f 1 1 1 1 f . . . . 
            . . . f 1 f 1 1 1 1 1 1 f . . . 
            . . f 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 5 5 1 1 1 1 f . . 
            . . f 1 1 1 1 5 5 1 1 1 1 f . . 
            . . f 1 1 1 1 5 5 1 1 1 1 f . . 
            . . . f 1 1 1 5 5 1 1 1 f . . . 
            . . . f 1 1 1 5 5 1 1 1 f . . . 
            .  . . . f 1 1 5 5 1 1 f . . . . 
            . . . . . f 1 5 5 1 f . . . . . 
            . . . . . f 1 5 5 1 f . . . . . 
            . . . . . f 1 5 5 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f f f f . . . . . . 
        `;
    export const battery = img`
        . . . . . f f f f f . . . . . . 
        . . . . f f d d d f f . . . . . 
        . . . f 5 5 5 1 5 5 5 f . . . . 
        . . . f 5 5 1 1 1 5 5 f . . . . 
        . . . f 5 5 5 1 5 5 5 f . . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 5 7 7 f . . . . 
        . . . f 7 7 7 5 7 7 7 f . . . . 
        . . . f 7 7 5 5 5 7 7 f . . . . 
        . . . f 7 7 7 5 7 7 7 f . . . . 
        . . . f 7 7 5 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 1 1 1 7 7 f . . . . 
        . . . f f 7 7 7 7 7 f f . . . . 
        . . . . f f f f f f f . . . . . 
        `;
    export const cup = img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f f 9 9 9 9 9 9 9 9 9 9 f f . 
        . f 9 9 9 9 9 9 9 9 9 1 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 1 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 1 9 9 f . 
        . . f 9 9 9 9 9 9 9 1 9 9 f . . 
        . . f 9 9 9 9 9 9 9 1 9 9 f . . 
        . . f 9 9 9 9 9 9 9 1 9 9 f . . 
        . . . f 9 9 9 9 9 9 1 9 f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 f f f f f f 9 f . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . . . . f f f f f f . . . . . 
        `;
    export const vine = img`
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c b a c f . . . . . 
        . . . . . f c b a c f . . . . . 
        . . . . . f c b a c f . . . . . 
        . . . . . f c b a c f . . . . . 
        . . . . . f c b a c f . . . . . 
        . . . . . f c b a c f . . . . . 
        . . . . . f c b a c f . . . . . 
        . . . . . f c c a c f . . . . . 
        . . . . . f f c c f f . . . . . 
        . . . . . . f f f f . . . . . . 
        `;
    export const containerWaste = img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............fffffffffff.......
    .............fffdddddddff.......
    ...........fffdfddddddfff.......
    ..........ffdddfdddddffbf.......
    .........ffddddfddddffbbf.......
    ........fffffffffffffbbbf.......
    ........ffbbbbbbbbbfbbbbf.......
    .........fbbbbbbbbbfbbbbf.......
    .........fbbbbbbbbbfbbbbf.......
    .........fbbbb11bbbfbbbbf.......
    .........fbbb111bbbfbbbbf.......
    .........fbbb111bbbfbbbbf.......
    .........fbbb111bbbfbbbbf.......
    .........fbbb111bbbfbbbbf.......
    .........fbbb111bbbfbbbbf.......
    .........fbbb111bbbfbbbbf.......
    .........fbbb111bbbfbbbbf.......
    .........fbbbbbbbbbfbbbbf.......
    .........fbbbbbbbbbfbbbbf.......
    .........fbbbbbbbbbfbbbbf.......
    .........fbbbbbbbbbfbbbff.......
    .........fbbbbbbbbbfbff.........
    .........fffffffffffff..........
    ................................
    ................................
    ................................
        `;
    export const box = img`
        . . . . . . f f . . . . . . . . 
        . . . . f f e e f f . . . . . . 
        . . f f e e e e e e f f . . . . 
        . f e e e e e e e e e e f f . . 
        . f f f e e e e e e f f e f . . 
        . f e e f f e e e f e e e f . . 
        . f e e e e f e f e e e e f . . 
        . f e e e e e f e e e e e f . . 
        . f e e e e e f e e e e e f . . 
        . f e e e e e f e e e e e f . . 
        . f e e e e e f e e e e e f . . 
        . f f e e e e f e e e f f f . . 
        . . . f f e e f e e f f . . . . 
        . . . . f f e f e f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `;
    export const tampon = img`
        . . . . . . . . . . . . . . . .
        . . . . . . e e e . . . . . . .
        . . . . . e 2 2 e e . . . . . .
        . . . . . 2 2 2 e e . . . . . .
        . . . . . e e 2 2 e . . . . . .
        . . . . . e e 2 e e . . . . . .
        . . . . . 2 e 2 e e . . . . . .
        . . . . . 2 e 2 2 e . . . . . .
        . . . . . e 2 2 2 e . . . . . .
        . . . . . e 2 2 2 e . . . . . .
        . . . . . 2 1 1 2 2 . . . . . .
        . . . . . 1 1 1 1 2 . . . . . .
        . . . . . . 1 d 1 . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . d . . d . . . . .
        . . . . . . . . d d . . . . . .
    `;
    export const roll = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f b b d d f . . . . . 
        . . . . f b b d d d d f . . . . 
        . . . . f f b d d d f f . . . . 
        . . . . f e f f f f e f . . . . 
        . . . . f e e e e e e f . . . . 
        . . . . f f e e e e e f . . . . 
        . . . . f e f e e e e f . . . . 
        . . . . f e e f f e e f . . . . 
        . . . . f e e e e f e f . . . . 
        . . . . f e e e e e f f . . . . 
        . . . . f e e e e e e f . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . . f f f f . . . . . . 
        `;
    export const tuna = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b b b b b . . . 
    . . . b b 6 b b 6 6 6 6 6 b . . 
    . . b b 6 6 6 b 6 6 6 f 6 b b . 
    . . b b 6 6 6 6 6 6 6 6 6 b b . 
    . . b b 6 6 6 b 6 6 6 6 6 b b . 
    . . b b b 6 b b 6 6 6 6 6 b b . 
    . . . b b b b b b b b b b b . . 
    . . . . b b b b b b b b b . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `;
    export const juice = img`
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 f 4 4 4 . . . . . 
    . . . . 4 4 f 4 4 4 4 . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `;
    export const coco = img`
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . b b b b b b b b b . . . . 
    . . . 2 b b b b b b b 2 . . . . 
    . . . b d d f d f d d b . . . . 
    . . . b d d d d d d d b . . . . 
    . . . b d f d d d f d e . . . . 
    . . . e d d f f f d d e . . . . 
    . . . e d d d d d d d e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `;
    export const newspaper = img`
    . . . . . . . . . . . . . . . . 
    . . d f d d f d f d f d f f f . 
    . . f d f d f d f d f d f d d . 
    . . f f f d f d f d f d f f f . 
    . . f d f d f d f d f d d d f . 
    . . f d f d d f d d f d f f f . 
    . . d d d d d d d d d d d d d . 
    . . d d d d d f 4 4 d d d d d . 
    . . d d d d d f 4 4 d d d d d . 
    . . d d d d d f d d d d d d d . 
    . . d d d e e e e e d d d d d . 
    . . d d d e e e e e d d d d d . 
    . . 6 6 6 6 e e e 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . . . . . . . . . . . . . . . 
    `;
    export const fly = img`
        . . . . . . . . . . . . f f f f 
        . . . . . . . . . . f f 1 1 b f 
        . . . . . . . f f f 1 1 1 b 1 f 
        . . . . f f f 1 1 1 1 b b 1 1 f 
        . . f f f 1 1 1 1 1 b b b 1 1 f 
        f f 1 1 1 1 1 1 1 b b b 1 1 1 f 
        1 1 1 1 1 1 1 b b b b 1 1 1 1 f 
        f 1 1 1 1 1 b b b b b 1 1 1 f . 
        . f f 1 b b b b b b 1 1 1 1 f . 
        . . f f f b b b b b 1 1 1 1 f . 
        . . f c c b b b b 1 1 1 1 1 f . 
        . . . f c c c c c 1 1 1 1 f . . 
        . . . f c c c c f 1 1 1 1 f . . 
        . . . . f c c f f f 1 1 1 f . . 
        . . . . f c f . . . f 1 1 f . . 
        . . . . . f . . . . . f f . . . 
        `;
    export const chips = img`
    . . . . . . . . . . . . . . . . 
    . 2 5 5 2 5 2 5 2 5 5 5 2 5 5 . 
    . 2 5 2 5 5 5 5 2 2 5 2 2 5 5 . 
    . 2 2 5 5 5 2 5 2 5 2 5 2 5 2 . 
    . 2 5 2 5 5 2 5 2 5 5 5 2 5 5 . 
    . 2 5 5 2 5 2 5 2 5 5 5 2 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 2 2 2 5 5 5 5 5 4 4 5 5 5 5 . 
    . 2 5 5 5 5 5 5 4 4 4 4 5 5 5 . 
    . 2 2 2 5 5 5 4 4 4 4 4 4 5 5 . 
    . 5 5 2 5 5 5 5 4 4 4 4 4 4 5 . 
    . 2 2 2 5 5 5 5 5 4 4 4 4 5 5 . 
    . 5 5 5 5 5 5 5 5 5 4 4 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . . . . . . . . . . . . 
    `;
}

// generate and render waste objects for the level
function generateWasteObjectsForLevel () {
    wasteObjects.forEach((item: WasteObject) => {
        // set ghost to true(which makes it so it doesnt get registered with onOverlap)
        item.sprite.setFlag(SpriteFlag.Ghost, true);
        // set invisible to true(Makes it invisible).
        item.sprite.setFlag(SpriteFlag.Invisible, true);
        // set position to middle left, just right outside screen
        item.sprite.setPosition(-50, 60);
    });
    // reset the game object list to start fresh each level.
    wasteObjectsByLevel = []
    // reset the chosen trashtypes each level
    selectedTrashTypes = []
    // while the amount of items in the selected trashtypes are less than the (2 + (currentlevel - 1) *2) do the following.
    while (selectedTrashTypes.length < 2 + (currentLevel - 1) * 2) {
        // set the trashtype randomly based on how may trashtypes exist in our list
        randomTrashType = Math.floor(Math.random() * Object.keys(TrashType).length) + 1
        // if the randomly chosen trashtype is not inside the trashtypes we selected then we add it to the list (push == add)
        if (!(arrayContains(selectedTrashTypes, randomTrashType))) {
            selectedTrashTypes.push(randomTrashType)
        }
    }
    selectedTrashTypes.forEach(trashType => {
        // find all wasteObjects inside the wasteObjects list where the trashtype is equals to one another.
        let filteredItems = wasteObjects.filter((item: WasteObject) => item.trashType === trashType);

        // for each wasteObject inside the filtered wasteObject list, we want to do the following.
        filteredItems.forEach((item: WasteObject) => {
            // set ghost to false(which makes it so it gets registered with onOverlap)
            item.sprite.setFlag(SpriteFlag.Ghost, false);
            // set invisible to false(Makes it visible).
            item.sprite.setFlag(SpriteFlag.Invisible, false);
            // add the item to our list
            wasteObjectsByLevel.push(item);
        });
    });
    positionAndMoveSprites()
}
function generateWasteObjectList () {
    wasteObjects = [
    wasteObject(SpriteType.CAN, SpriteGame.foodWaste, TrashType.Food),
    wasteObject(SpriteType.GARBAGE, SpriteGame.banana, TrashType.Food),
    wasteObject(SpriteType.GARBAGE, SpriteGame.apple, TrashType.Food),
    wasteObject(SpriteType.CAN, SpriteGame.hazardousWaste, TrashType.Hazardous),
    wasteObject(SpriteType.CAN, SpriteGame.glassWaste, TrashType.Glass),
    wasteObject(SpriteType.CAN, SpriteGame.restWaste, TrashType.Rest),
    wasteObject(SpriteType.CAN, SpriteGame.metalWaste, TrashType.Metal),
    wasteObject(SpriteType.GARBAGE, SpriteGame.can, TrashType.Metal),
    wasteObject(SpriteType.CAN, SpriteGame.cardboardWaste, TrashType.Cardboard),
    wasteObject(SpriteType.CAN, SpriteGame.paperWaste, TrashType.Paper),
    wasteObject(SpriteType.CAN, SpriteGame.plasticWaste, TrashType.Plastic),
    wasteObject(SpriteType.GARBAGE, SpriteGame.fork, TrashType.Plastic),
    wasteObject(SpriteType.GARBAGE, SpriteGame.bag, TrashType.Plastic),
    wasteObject(SpriteType.CAN, SpriteGame.clothesWaste, TrashType.Clothes),
    wasteObject(SpriteType.GARBAGE, SpriteGame.shirt, TrashType.Clothes),
    wasteObject(SpriteType.GARBAGE, SpriteGame.sock, TrashType.Clothes),
    wasteObject(SpriteType.GARBAGE, SpriteGame.lightBulb, TrashType.Hazardous),
    wasteObject(SpriteType.GARBAGE, SpriteGame.battery, TrashType.Hazardous),
    wasteObject(SpriteType.GARBAGE, SpriteGame.cup, TrashType.Glass),
    wasteObject(SpriteType.GARBAGE, SpriteGame.vine, TrashType.Glass),
    wasteObject(SpriteType.CAN, SpriteGame.containerWaste, TrashType.Container),
    wasteObject(SpriteType.GARBAGE, SpriteGame.box, TrashType.Cardboard),
    wasteObject(SpriteType.GARBAGE, SpriteGame.tampon, TrashType.Rest),
    wasteObject(SpriteType.GARBAGE, SpriteGame.roll, TrashType.Cardboard),
    wasteObject(SpriteType.GARBAGE, SpriteGame.tuna, TrashType.Metal),
    wasteObject(SpriteType.GARBAGE, SpriteGame.juice, TrashType.Container),
    wasteObject(SpriteType.GARBAGE, SpriteGame.coco, TrashType.Container),
    wasteObject(SpriteType.GARBAGE, SpriteGame.newspaper, TrashType.Paper),
    wasteObject(SpriteType.GARBAGE, SpriteGame.fly, TrashType.Paper),
    wasteObject(SpriteType.GARBAGE, SpriteGame.chips, TrashType.Rest)
    ]
}
info.onScore(5, function () {
    // calculate next level
    if ((currentLevel + 1) == 4) {
        fish.sayText("Congratulations you won!!")
        // destroy all wasteobjects
        wasteObjects.forEach((obj: WasteObject) => obj.sprite.destroy() )
    } else {
        // sets score to 0
        info.setScore(0)
        fish.sayText("Good job! Onwards to level " + (currentLevel + 1), 2000)
        // generate next level
        generateWasteObjectsForLevel()
    }
})
// This is just a method for checking if an array contains a specific element.
function arrayContains (array: any[], element: number) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] == element) {
            return true
        }
    }
    return false
}
function setupOverlapHandlers () {
    sprites.onOverlap(SpriteKind.Player, SpriteKind.trash, function (player, trash) {
        // we find the wasteObject where the sprite is equal to the one we are overlapping with.
        // the .find method is saying 'give me the first object you find where the condition is true'
        let waste = wasteObjects.find((item: WasteObject) => item.sprite === trash)

        // if waste is not null and the spriteType == GARBAGE and the waste is not following anything then:
        if (waste && waste.spriteType == SpriteType.GARBAGE && !waste.isFollowing) {
            // set the sprite to follow the player
            waste.sprite.follow(player, 100)
            // set the isFollowing boolean to true
            waste.isFollowing = true;
        }
    })
    sprites.onOverlap(SpriteKind.trash, SpriteKind.trashCan, function (trash, can) {
        // we find the wasteObject where the sprite is equal to the one we are overlapping with.
        // the .find method is saying 'give me the first object you find where the condition is true'
        let waste = wasteObjects.find((item: WasteObject) => item.sprite === trash)
        let bin = wasteObjects.find((item: WasteObject) => item.sprite === can)

        // unfollow the current target
        waste.sprite.follow(null)
        // set the position to start position
        waste.sprite.setPosition(-10, 60)
        // set the speed of the right movement
        waste.sprite.vx = 30
        // set the isFollowing boolean to false
        waste.isFollowing = false;

        // if the bin is not null and the waste trashtype is the same trashtype as the bin:
        if (waste.trashType == bin.trashType) {
            // increase a point
            info.changeScoreBy(1)
        } else {
            // decrease a point
            info.changeScoreBy(-1)
        }
    })
}
function startLevel () {
    // set background image
    scene.setBackgroundImage(img`
        8fffffffffffffffffffffffff88fffff88ffff8998889999999989988888989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffffff8fffff88ff9f88889889999999989998888898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fffff889ff9988888988999989998999888889899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fff8f8f99ff998888898899988999899988888989999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffff8fff8f8fff998998888889889998899989998898898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffff8fff8f8fffff98888888888888999889998899889888899999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffff8ffff88ffffff99888889988888999988999889988988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff88fff8ffff8ff889988888998898988998899988998899888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff8fff8f8ff8ff8888988888899889988899889998899989988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffff8ffffff888888ff88888888888889988998889988999889998999888999999999989999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff8ffffff88888fff888888888888889999999888998899988999899988899999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff8ffffff88888ff88888888888888888898899988899889998899989999889998999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff88f888888f888888888888888888889889998889988999889998989988999999999999899999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffff8ffff88f8888888888888888888888888888988899888998889988999988999899999999899998999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffff8ffff88888888888888888888888889888888998889988899888998899998889989999999998999969999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff888f88888888888888888888888988888899888999889988899888999888899999999999989999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff888f888888888888888888888888898888889988899988998889988899998888999999999999899999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff8888888888888888888888888889888888998889998889988998889999988889999989999998999999999999999999999999999999999999999999999999999999999999999999
        fffffff8fffff8fff88888888888888888888888888888988888899888999888998899888999999889999998999999989999999999999999999999999999999999999999999999999999999999999999
        ffffff8fffff8fff88f888888888888888888888888888898888889988899988899888998899999999999999989999999899999999999999999999999999999999999999999999999999999999999999
        ffffffff8f88fff88ff888888888888888888888888888889888888999889998889988899888999999899999999899999998999989999999999999999999999999999999999999999999999999999999
        fffffff8888ff888ff8888888888888888888888888888888988888899999999888999899988899999988999999998899999999998899999999999999999999999999999999999999999999999999999
        ff8fff888ffff8fff88888888888888888888888888888888888888889999999988999999999888999998899999999988889999999988999999999999999999999999999999999999999999999999999
        fffff888ffff8ff8888888888888888888888888888888888888888889999989998889999988988899999988899999999998899999999999999999999999999999999999999999999999999999999999
        ffff88fffff8ff88888888888888888888888888888888888888888889999888999888999988889999999999888999999998988999999999999999999999999999999999999999999999999999999999
        fff88fff88fff888888888888888888888888888888888888888888888988988899998889999888899999999999889999999998889999999999999999999999999999999999999999999999999999999
        f8888ff88ffff888888888888888888888888888888888888888888888898899888998888999998889999888999998899999999988889899999999999999999999999999899999999999999999999999
        88fff888ffff8888888888888888888888888888888888888888888888889888988898888889999988899988889999988888999999988888999999999899999999999999999999999999999999999999
        8fff88ffff888888888888888888888888888888888888888888888888888988899888988888999998888999888889999888888999999988888898999999888999999999999999999999999999999999
        ff888ffff8888888888888888888888888888888888888888888888888888899888988898888899999988889999888899999888889999999888888899999999998889999999999999999999999999999
        f888ffff88888888888888888888888888888888888888888888888889988888888898888988888999999888899998888899999888899999999888888889999999999988888999999999999888888888
        88ffff8888888888888888888888888888888888888888888888888888998888888889988898888999999998888999998888999999888899999998889999988888999999999899999999998888888888
        8ffff88888888888888888888888888888888888888888888888888888899888888988898899988889999999988988999998889999999988999999999999999999999999999999999999999999999999
        8fff888888888888888888888888888888888888888888888888888888888988888888888999999888999999999988889999998889999999989999989999999999999999999999999999999999999999
        ff88888888888888888888888888888888888888888888888888888888888898888888988999999998889999999999888899999998899999999999999999999999988888889999999999999999999999
        f888888888888888888888888888888888888888888888888888888888888889988888899998899999888899999999998888899999998899999999999999899999999988888888888888888888889999
        6888888888888888888888888888888888888888888888888888888888888888898888888898888999998888999999999998888999999998899999999999999999999999999988888888888888888888
        6888888888888888888888888888888888888888888888888888888888888888888888888888988889999988888899999999988888999999998899999999999999999999999999999999999999999999
        6688888888888888888888888888888888888888888888888888888888888888888888888888899888889999998888999999999988888999999998899999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888888889999888899999988888999988999988888999999999999999999999999999899999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888889888888898998888899999988889988889999988999999999999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888998888888889998888999999989999888889999999999999888999999998888888888889999999888888899
        66f8888888888888888888888888888888888888888888888888888888888888888888888889988888888999888888999999999999888899999999999988888999999999998899999999888889999999
        66ff888888888888888888888888888888888888888888888888888888888888888888888888899888888889988888889999999999998888899999999999888888899999999999988889888889999999
        66fff88888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888899998889999988888999989999998999999999999999998888888999999999
        666ff88888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888889998888888999988899888889999999999888999999999999888888888889
        666fff8888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888899999899888888999999998888889999999999998888889999999888888888
        666fff6888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888889888999988998889999998888889999999998888888888888888999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888899888888888888888888888999998888888999999888888999999999998888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888889999999888888888999888899888888888888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998899998888888889999989999999999999999999999
        666ff6666f888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999988889999999999999888888888888fff
        666fff66fff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888888888fff668
        6666fffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888fff666666
        66666fffffff888888888f888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888888888888888888888888888fffff6666866
        66666fffffff888888f8f6688888888888888888888888888888888888888888888888888888888888888888888888888888888888888899998888888888888888888888888888888888fff886666666
        666666ffff8666888ffff66f8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff866666666
        666666ffff8666888ffff666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888899999996ff66666866
        666666fff68666888ffff666f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888ff8f666666666
        666666ff668666f888fff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888fffff666666668
        6666666f6666666f8866f666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff8666666668
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeee4eeeeeeeeeeeeeeee4eeeeeeeeeeeeee4eeeeeeeeeeeeeeeeee4eeeeeeeeeeee4eeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeeeee4eeeeeeeeeeeee4eeeeeeeeeee4eeeee
        eeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        666cccccccc64444444566666cccccbbbbbbbccc6666f666ff8588ff6666888888888ffffffff888888888888fffffffffff6666666f6666666666666668666666666666666cccccccccccccb556ccc6
        666ccccccc64444444445666ccbcccbbbbbbbcccf666f666f6658ff66666f88fff888888888888888888888fffffffffffff6666666f66666666666666666666666666666666ccccccccccccb556cc68
        666ccccccc6644442444446ccbbbcccbbbbbccbb86666666f665ff866666fffffff88888888ffff88ff8888f88888ff88886666666666666666666666866688666699666666666ccccccccccc556cc55
        666ccccccc6644222444444cccbbccccccccccbb666666666655f886666ffffffffffff888888888888ffffff8888888888666656666cccc6666666666668666666996666556666cccccccccc556c556
        666ccccccc64442244244444ccccccccccccccbb666666666655f8f6666fffffffff888888888888888888888888888888866655666cccbbc6666666666666666669996665566666ccccccccc5566556
        666ccccccc64444444244444cccccccccccccccc666666666655f88f6668ffffff8888ffffffffffffffff888888888888ff6655566ccbbbc66ccc66666666666669999995666666cccccccc55665566
        666ccccccc6444444444444ccccccccccccccccc666666666556f88ff666ff88fffffffffffffffffffffff8fffffffffff66655566cccbbc6ccbbcc6666666666699999556666666ccccccc55665566
        666ccccccc64444444422466666cccccccccccccc6666666655666866666ff88ffffffffff88f8888ff8888888ff888ff6666665666cccccbbccbbcc6666666666699999556666666866cccc55c66668
        666ccccccc66444444424566666cccccccccccccc6666666656666666666ff8888ffff555f88f8ffff888888fffffff6666666656666ccccbbcccccc6666666666669999556666666866cccc55c66668
        666cccccc666666444445566666cccccccccccccc66666665566666666666f88666fff5558888888888888888fffff66666666656666cccccccccccc6666666666666696556666666666cccc55c66666
        666ccccccc66666644445566666cccccccccccccc666666655666666666cc6866666ff65f88888fffffffffffffff666666666655666cccccccccccc6666666666666666656666666666cccc55c66666
        666ccccccc66666665565566666cccccccccccccc6666666566666666ccccc866666ff65ffffffffffff888888ff66666666666556666cccccccccc6666666666666666665566666666cccccc5666666
        66cccccccc66666665566666666ccccccc666cc666666666566666666cccbbc6666f66655ffffffffffff8888ff6666666666665666666ccccccccc66ff666666666666665566666666ccccc65566666
        66cccccccc666666665566666666ccccebb666666666666666666666ccccbbbb668f6665568888ffff888fffff666666655666655666666ccccccc66666666666666666666576666666ccccc65566666
        666cccccc6666666665566666666cccccbb666666666666666666666ccccccbb66ff6665566888ffffffffff66666666655666669666996cbbcccc66666422444666666666556666666ccccc55666666
        666cccccc6666666666566666666cccccbb6666666666666666ccccc6ccccccccc6f6665566fffffff8888866666666665566655999999cbbbcccc66644422444466666666556666666cccc655666666
        666cccccc6666666666556666666cccccbbb666665566666666cccbbcccccccccbc666655666888888ffff66666ffffff5566655999999ccbbccc666224222444466666666656666666cccc655666666
        666cccccc66666666665566666666cccccb666666656666666ccccbbccccccccbbbc6665566fffffffffff666ffffffff5566669959996ccccccc644224422444466666666656666666ccccc56666666
        66cccccccc6666666666566666666cccccbb66666655696666ccccbbcccccccccbcc6665566fffffffffff6fffffffff6656666655666cbbbcccc444444424224466666666655666666cccc556666666
        66ccccccc66666666666556666666cccccbb66666655966666cccccbbbccccccccc66665566fffffffffffffffffffff666665665566ccbbbccc6444444224444466666666655666666cccc556666666
        66cccccccc6666666666556666666ccccccb666666559666666ccccbbbccccccccc6666556ff8ffffffffffffffffff6666655665566ccbbcc666444444494444466666666655666666cccc556666666
        666ccccccc6666666666559666666cccccccc66666655444466cccccbccccccc66666665566ffffffffffffffff88866666655665666cbbbccc66644422444444468666666656666996cccc556666666
        666ccccccc6666666666559666666cccccccc666666544444444ccccccccccccf8666666666fffffffffffffffffff66666666666666cbbbccc66664444449444666668666666666999cccc556666bcc
        666ccccccc6666666666556966666ccccccccc666665444442444cccccccccc6f6666666666fffffffffffff88fffff6666666666666cbbcccc6666444444ccccc66686666666666cccccbb556666bbc
        66ccccccc66666666666556666666cccccccccc666654444224444cccccccbbcff666666666ffffffffffffffffffff6666666666666cccccc6666664444cbbbbbc66666666666ccccbbbbbb56b666cc
        66ccccccc66666666666566666666ccccccccccc66665442424444cccccccbbc68666666666fffffffff888888f8ff866666666666666cccc6666666644cbbbbbbcccc6666666cccbbbbbcbb66c666cc
        66ccccccc66666666666566666666ccccccbbbccc6665542422244cccccccbbc66666666666688888ff8888fffffff6666666666666666cccc666666666bbbbcbcccccc666666cccbbbbbccc666c66cc
        66ccccccc66666666665566666666ccccccbbbbcc6666444442244466ccccccc666665666666ffffffffffffffffff666666666666666cccccc6666666bbbccccccccccc66666ccccccccccc666c66cc
        66ccccccc66666666665566666ccccccccccbbbbb6664444444424446cccccbb666665666666fffffffffffffffff6666666666666666cccccc666666bbbbcccccccccccc66666ccccccccccc66666cc
        66ccccccc666666666655666ccccccccccccccbbb6664444444424446cccccbbb666656686666ffffffffffffffff666666666666666cccccccc66666bbbcccccccccccccc66666ccccccccccc6666cc
        66cccccccccccc666665566cccccccccccccccccb666b444444444446cccccbbb6666566f6666f66ffffff88888866666666666666666cccccccc666cbbccccccccccccccc66666cccccccccccc666cc
        66ccccccccccccc6666566ccccccccccccccccccc66ccb444444444666ccccbbb66655666666666666ffffffffff66666666666666666ccccccccccccccccccccccccccccc66666ccccccccccccc66cc
        66ccccccccccccc66665cccccccccccccccccccc666cccc6444444ccc6cccccbb6666566666666f6666fffffffff66666666666666666cccccccccccccccccccccccccccccc666cccccccccccccc66cc
        6cccccccccccccc66666ccccccccccccccccccc6666cccc6644bccccccccccccc8666666666666f66666ffffffff666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccc8
        6cccccccccccccc66666ccccccccccccccccccc666ccccc6666ccccccccccccccf666666666666ff6666ffffffff6666666666666666666ccccccccccccccc6cccccccccccccccccccccccccccccccc8
        `)
    // set fishy image
    fish = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 3 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Player)
    // set fishy position
    fish.setPosition(80, 100)
    fish.sayText("Hello! Use the wasd to move me. Move the garbage to the correct containers.", 3000)
    // enable movement to fishy
    controller.moveSprite(fish)
    // generate all wasteobjects to a list
    generateWasteObjectList()
    //generates the first level
    generateWasteObjectsForLevel()

    // if a garbage/trash reaches the right wall, sets it to the left side
    game.onUpdate(function () {
        wasteObjectsByLevel.forEach((item: WasteObject) => {
            if (item.spriteType === SpriteType.GARBAGE && item.sprite.x > screen.width + 10) {
                item.sprite.x = -10
            }
        })
    })
}
function positionAndMoveSprites () {
    // filter level waste objects by spriteType CAN
    const listOfCans = wasteObjectsByLevel.filter((item: WasteObject) => item.spriteType === SpriteType.CAN);
    listOfCans.forEach((item, index) => {
        // set the position to be dynamic to the screen width
        item.sprite.setPosition(160 / (listOfCans.length + 1) * (index + 1), 110);
    });
    const listOfGarbage = wasteObjectsByLevel.filter((item: WasteObject) => item.spriteType === SpriteType.GARBAGE);
    listOfGarbage.forEach((item: WasteObject, index) => {
        setTimeout(() => {
            // set the position
            item.sprite.setPosition(-10, 60);
            // set the speed of the right movement
            item.sprite.vx = 30;
            // 2500 milliseconds times the current index
        }, 2500 * index);
    });

    setupOverlapHandlers()
}
// set the fish to inactive in the beginning
let fish: Sprite = null
// this is for setting a random trashtype in the code, so that we can randomize the trashtypes we filter by.
let randomTrashType = 0
// current level
let currentLevel = 1
// a list of wasteObject, which is set to empty '[]'. This is all wasteObjects
let wasteObjects: WasteObject[] = []
// a list of TrashType, which is set to empty '[]'. This is for storing the trashTypes we want to find
let selectedTrashTypes: number[] = []
// a list of wasteObject, which is set to empty '[]'. This is for storing the ones we need to show.
let wasteObjectsByLevel: any[] = []

// this is the wasteObject interface. This is used so the code knows what the object is.
interface WasteObject {
    spriteType: number;
    sprite: Sprite;
    trashType: number;
    isFollowing: boolean;
}

// the spritetype enum. Contains all the spritetypes
const SpriteType = { CAN: 1, GARBAGE: 2 }

// the trashtype enum. Contains all the trashtypes
const TrashType = {
    Food: 1,
    Hazardous: 2,
    Glass: 3,
    Container: 4,
    Rest: 5,
    Metal: 6,
    Cardboard: 7,
    Paper: 8,
    Plastic: 9,
    Clothes: 10
}

// this is a waste object. you put in parameters(the paranthesis), and you get an object in return.
const wasteObject = (spriteType: number, spriteImg: Image, trashType: number, isFollowing: boolean = false): any => {
    return {
        spriteType: spriteType,
        sprite: sprites.create(spriteImg, spriteType === SpriteType.CAN ? SpriteKind.trashCan : SpriteKind.trash),
        trashType: trashType,
        isFollowing: isFollowing
    }
}
// starts the game when the application starts
startLevel()
