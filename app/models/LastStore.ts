import { Instance, types } from 'mobx-state-tree';

export const LastStoreModel = types
    .model('SessionStore')
    .props({
        note: types.optional(types.string, ''),
        duration: types.optional(types.string, ''),
        distance: types.optional(types.string, ''),
        naca: types.optional(types.string, ''),
        services: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateNote(note: string) {
            self.note = note;
        },
        updateDuration(duration: string) {
            self.duration = duration;
        },
        updateDistance(distance: string) {
            self.distance = distance;
        },
        updateNaca(naca: string) {
            self.naca = naca;
        },
        updateServices(services: string) {
            self.services = services;
        },
    }));

export interface SessiLastStoreonStore extends Instance<typeof LastStoreModel> {}
