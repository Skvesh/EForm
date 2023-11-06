import { Instance, types } from 'mobx-state-tree';
import { TimeModel, UpvModel } from './TableStore';
import { TherapyModel } from './SectionStore';
import { getCurrentTime } from '../utils/common';
import { rootStateType } from './helpers/submodels';

export const ScreensStoreModel = types
    .model({
        time: types.optional(TimeModel, { time: getCurrentTime() }),
        upv: types.optional(UpvModel, {}),
        therapy: types.optional(TherapyModel, { time: getCurrentTime() }),
        rootState: types.optional(rootStateType, 'Vytvoriť'),
    })
    .actions(self => ({
        setRootStateToCreate() {
            if (self.rootState === 'Pokračovať') self.rootState = 'Vytvoriť';
        },
        setRootStateToContinue() {
            if (self.rootState === 'Vytvoriť') self.rootState = 'Pokračovať';
        },
    }));

export interface ScreensStore extends Instance<typeof ScreensStoreModel> {}
