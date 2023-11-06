import { Instance, SnapshotOut, destroy, types } from 'mobx-state-tree';
// import { emptyNumberType } from './helpers/submodels';
export const WoundModel = types
    .model({
        sine: types.optional(types.boolean, false),
        woundType: types.optional(types.string, ''),
    })
    .actions(self => ({
        setWoundType(woundType: string) {
            self.woundType = woundType;
        },
        setSine() {
            self.sine = !self.sine;
        },
    }));

export const FrontStoreModel = types.model({
    leftFoot: types.optional(WoundModel, {}),
    rightFoot: types.optional(WoundModel, {}),
    leftAnkle: types.optional(WoundModel, {}),
    rightAnkle: types.optional(WoundModel, {}),
    leftShin: types.optional(WoundModel, {}),
    rightShin: types.optional(WoundModel, {}),
    leftKnee: types.optional(WoundModel, {}),
    rightKnee: types.optional(WoundModel, {}),
    leftThigh: types.optional(WoundModel, {}),
    rightThigh: types.optional(WoundModel, {}),
    groinArea: types.optional(WoundModel, {}),
    stomach: types.optional(WoundModel, {}),
    chest: types.optional(WoundModel, {}),
    leftHand: types.optional(WoundModel, {}),
    rightHand: types.optional(WoundModel, {}),
    leftWrist: types.optional(WoundModel, {}),
    rightWrist: types.optional(WoundModel, {}),
    leftForearm: types.optional(WoundModel, {}),
    rightForearm: types.optional(WoundModel, {}),
    leftArm: types.optional(WoundModel, {}),
    rightArm: types.optional(WoundModel, {}),
    leftShoulder: types.optional(WoundModel, {}),
    rightShoulder: types.optional(WoundModel, {}),
    neck: types.optional(WoundModel, {}),
    face: types.optional(WoundModel, {}),
    head: types.optional(WoundModel, {}),
    smallLeftCircle: types.optional(WoundModel, {}),
    smallRightCircle: types.optional(WoundModel, {}),
    largeLeftCircle: types.optional(WoundModel, {}),
    largeRightCircle: types.optional(WoundModel, {}),
    bigLeftCircle: types.optional(WoundModel, {}),
    bigRightCircle: types.optional(WoundModel, {}),
});

export const BackStoreModel = types.model({
    leftHeel: types.optional(WoundModel, {}),
    rightHeel: types.optional(WoundModel, {}),
    leftShin: types.optional(WoundModel, {}),
    rightShin: types.optional(WoundModel, {}),
    leftThigh: types.optional(WoundModel, {}),
    rightThigh: types.optional(WoundModel, {}),
    leftButtock: types.optional(WoundModel, {}),
    rightButtock: types.optional(WoundModel, {}),
    loin: types.optional(WoundModel, {}),
    back: types.optional(WoundModel, {}),
    leftHand: types.optional(WoundModel, {}),
    rightHand: types.optional(WoundModel, {}),
    leftForearm: types.optional(WoundModel, {}),
    rightForearm: types.optional(WoundModel, {}),
    leftElbow: types.optional(WoundModel, {}),
    rightElbow: types.optional(WoundModel, {}),
    leftArm: types.optional(WoundModel, {}),
    rightArm: types.optional(WoundModel, {}),
    leftShoulder: types.optional(WoundModel, {}),
    rightShoulder: types.optional(WoundModel, {}),
    neck: types.optional(WoundModel, {}),
    backOfTheHead: types.optional(WoundModel, {}),
    topOfTheHead: types.optional(WoundModel, {}),
});

// export const MapperStoreModel = types.model({
//     front: types.optional(FrontStoreModel, {}),
//     back: types.optional(BackStoreModel, {}),
// });

export const PartOfBodyModel = types
    .model({
        id: types.optional(types.identifier, ''),
        partOfBody: types.optional(types.string, ''),
        sine: types.optional(types.boolean, false),
        woundType: types.optional(types.string, ''),
        // isSelected: types.optional(types.boolean, false),
    })
    .actions(self => ({
        setWoundType(woundType: string) {
            self.woundType = woundType;
        },
        setSine() {
            self.sine = !self.sine;
        },
        setPartOfBody(PartOfBody: string) {
            self.partOfBody = PartOfBody;
        },
    }));

export const MapperStoreModel = types
    .model({
        front: types.array(PartOfBodyModel),
        back: types.array(PartOfBodyModel),
    })
    .views(self => ({
        isSelected(id: string, side: keyof typeof self) {
            return self[side].some((item: PartOfBodyStore) => item.id === id);
        },
        findById(id: string, side: keyof typeof self) {
            return self[side].find((item: PartOfBodyStore) => item.id === id);
        },
    }))
    .actions(self => ({
        select(partOfBody: PartOfBodyStore, side: keyof typeof self) {
            self[side].push(partOfBody);
        },
        unselect(partOfBody: PartOfBodyStore, side: keyof typeof self) {
            self[side].remove(partOfBody);
        },
        unSelectById(id: string, side: keyof typeof self) {
            const partOfBodyToRemove = self[side].find(
                (partOfBody: PartOfBodyStore) => partOfBody.id === id,
            );
            self[side].remove(partOfBodyToRemove);
        },
    }));

// export const miniItem = types.model({
//     sine: types.optional(types.boolean, false),
//     fillWith: types.optional(types.string, ''),
// });
// export const Item = types.model({
//     id: types.optional(types.string, ''),
//     name: types.optional(types.string, ''),
//     shape: types.optional(types.string, ''),
//     x2: types.optional(types.number, 0),
//     y2: types.optional(types.number, 0),
//     x1: types.optional(types.number, 0),
//     y1: types.optional(types.number, 0),
//     width: types.optional(types.number, 0),
//     height: types.optional(types.number, 0),
//     radius: types.optional(types.number, 0),
//     prefill: types.optional(types.string, ''),
//     fill: types.optional(miniItem, {}),
// });

// export const MapperStoreModel = types
//     .model({
//         front: types.array(Item),
//         back: types.array(Item),
//     })
//     .actions(self => ({
//         addPartOfBody(partOfBody: PartOfBodyStore) {
//             self.front.push(partOfBody);
//         },
//         removePartOfBody(partOfBody: PartOfBodyStore) {
//             destroy(partOfBody);
//         },
//     }));

export interface PartOfBodySnapshot extends SnapshotOut<typeof PartOfBodyModel> {}
export interface PartOfBodyStore extends Instance<typeof PartOfBodyModel> {}
export interface MapperStore extends Instance<typeof MapperStoreModel> {}
