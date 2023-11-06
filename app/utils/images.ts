export const Images = {
    hands: {
        x: require('../../assets/hands/x.png'),
        o: require('../../assets/hands/o.png'),
        om: require('../../assets/hands/om.png'),
        mm: require('../../assets/hands/mm.png'),
        mmx: require('../../assets/hands/mmx.png'),
        lines: require('../../assets/hands/lines.png'),
    },
    miniImages: {
        front: require('../../assets/front-mini.png'),
        back: require('../../assets/back-mini.png'),
    },
    bigImages: {
        front: require('../../assets/front.png'),
        back: require('../../assets/back.png'),
    },
    vectors: {
        x: require('../../assets/vectors/x-small.png'),
        o: require('../../assets/vectors/o-small.png'),
        om: require('../../assets/vectors/om-small.png'),
        mm: require('../../assets/vectors/mm-small.png'),
        mmx: require('../../assets/vectors/mmx-small.png'),
        lines: require('../../assets/vectors/lines-small.png'),
    },
};

export function imageSelect<T extends keyof typeof Images>(
    field: T,
    image: keyof (typeof Images)[T],
) {
    return Images[field][image];
}
