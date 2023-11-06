import { Instance, types } from 'mobx-state-tree';
import { SessionStoreModel } from './SessionStore';
import { PatientStoreModel } from './PatientStore';
import { DetectionStoreModel } from './DetectionStore';
import { TableStoreModel } from './TableStore';
import { MapperStoreModel } from './MapperStore';
import { SectionStoreModel } from './SectionStore';
import { HandoverStoreModel } from './HandoverStore';
import { LastStoreModel } from './LastStore';

export const RootStoreModel = types.model('RootStore').props({
    sessionStore: types.optional(SessionStoreModel, {}),
    patientStore: types.optional(PatientStoreModel, {}),
    detectionStore: types.optional(DetectionStoreModel, {}),
    tableStore: types.optional(TableStoreModel, {}),
    mapperStore: types.optional(MapperStoreModel, {}),
    sectionStore: types.optional(SectionStoreModel, {}),
    handoverStore: types.optional(HandoverStoreModel, {}),
    lastStore: types.optional(LastStoreModel, {}),
});

export interface RootStore extends Instance<typeof RootStoreModel> {}
