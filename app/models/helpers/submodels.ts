import { Instance, types } from 'mobx-state-tree';

export const sideType = types.union(
    types.literal('none'),
    types.literal('left'),
    types.literal('right'),
);

export const rootStateType = types.union(types.literal('Vytvoriť'), types.literal('Pokračovať'));

// export const emptyNumberType = types.union(types.number, types.literal(''));

export const sideModel = types
    .model({
        side: types.optional(sideType, 'none'),
        checked: types.optional(types.boolean, false),
    })
    .actions(self => ({
        toggle() {
            self.checked = !self.checked;
        },
    }));
// bilateral
export const bilateralModel = types
    .model({
        left: types.optional(types.boolean, false),
        right: types.optional(types.boolean, false),
    })
    .actions(self => ({
        updateLeft() {
            self.left = !self.left;
        },
        updateRight() {
            self.right = !self.right;
        },
    }));

export const bilateralModelString = types
    .model({
        left: types.optional(types.string, ''),
        right: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateLeft(newLeftString: string) {
            self.left = newLeftString;
        },
        updateRight(newRightString: string) {
            self.right = newRightString;
        },
    }));

export const additionalPropertyModel = types
    .model({
        id: types.identifier,
        key: types.optional(types.string, ''),
        checkValue: types.optional(sideModel, {}),
    })
    .actions(self => ({
        updateKey(newKey: string) {
            self.key = newKey;
        },
    }));

export const additionalTablePropertyModel = types
    .model({
        id: types.identifier,
        key: types.optional(types.string, ''),
        value: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateKey(newKey: string) {
            self.key = newKey;
        },
        updateValue(newValue: string) {
            self.value = newValue;
        },
    }));

export interface additionalTableProperty extends Instance<typeof additionalPropertyModel> {}
