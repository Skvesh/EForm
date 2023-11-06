import {
    IAnyType,
    Instance,
    SnapshotIn,
    SnapshotOrInstance,
    SnapshotOut,
    TypeOfValue,
    destroy,
    types,
} from 'mobx-state-tree';
// import { emptyNumberType } from './helpers/submodels';

export const TimeModel = types
    .model({
        id: types.optional(types.identifier, ''),
        time: types.optional(types.string, ''),
        systolicPressure: types.optional(types.string, ''),
        diastolicPressure: types.optional(types.string, ''),
        sf: types.optional(types.string, ''),
        df: types.optional(types.string, ''),
        do: types.optional(types.string, ''),
        oxygenSaturation: types.optional(types.string, ''),
        glycemia: types.optional(types.string, ''),
        tt: types.optional(types.string, ''),
        gcs: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateTime(newTime: string) {
            self.time = newTime;
        },
        updateSystolicPressure(newSystolicPressure: string) {
            self.systolicPressure = newSystolicPressure;
        },
        updateDistolicPressure(newDiastolicPressure: string) {
            self.diastolicPressure = newDiastolicPressure;
        },
        updateSf(newSf: string) {
            self.sf = newSf;
        },
        updateDf(newDf: string) {
            self.df = newDf;
        },
        updateDo(newDo: string) {
            self.do = newDo;
        },
        updateOxygenSaturation(newOxygenSaturation: string) {
            self.oxygenSaturation = newOxygenSaturation;
        },
        updateGlycemia(newGlycemia: string) {
            self.glycemia = newGlycemia;
        },
        updateTt(newTt: string) {
            self.tt = newTt;
        },

        updateGcs(newGcs: string) {
            self.gcs = newGcs;
        },
        reset() {
            self.time = '';
            self.systolicPressure = '';
            self.systolicPressure = '';
            self.diastolicPressure = '';
            self.sf = '';
            self.df = '';
            self.do = '';
            self.oxygenSaturation = '';
            self.glycemia = '';
            self.tt = '';
            self.gcs = '';
        },
    }));

export const UpvModel = types
    .model({
        id: types.optional(types.identifier, ''),
        upv: types.optional(types.string, ''),
        massage: types.optional(types.string, ''),
        defibrillation: types.optional(types.string, ''),
        pacemaker: types.optional(types.string, ''),
        transport: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateUpv(newUpv: string) {
            self.upv = newUpv;
        },
        updateMassage(newMassage: string) {
            self.massage = newMassage;
        },
        updateDefibrillation(newDefibrillation: string) {
            self.defibrillation = newDefibrillation;
        },
        updatePacemaker(newPacemaker: string) {
            self.pacemaker = newPacemaker;
        },
        updateTransport(newTransport: string) {
            self.transport = newTransport;
        },
        reset() {
            self.upv = '';
            self.massage = '';
            self.defibrillation = '';
            self.pacemaker = '';
            self.transport = '';
        },
    }));

// export const TableScreenStoreModel = types.model({
//     time: types.optional(TimeModel, {}),
//     upv: types.optional(UpvModel, {}),
// });

export const TableStoreModel = types
    .model({
        times: types.array(TimeModel),
        upves: types.array(UpvModel),
    })
    .views(self => ({
        get timesLength() {
            return self.times.length;
        },
        get upvesLength() {
            return self.times.length;
        },
    }))
    .actions(self => ({
        addTime(newTime: TimeStore) {
            self.times.push(newTime);
        },
        removeTime(time: TimeStore) {
            destroy(time);
        },
        addUpv(newUpv: UpvStore) {
            self.upves.push(newUpv);
        },
        removeUpv(upv: UpvStore) {
            destroy(upv);
        },
    }));

export interface TimeStore extends Instance<typeof TimeModel> {}
export interface UpvStore extends Instance<typeof UpvModel> {}
// export interface TableScreenStore extends Instance<typeof TableScreenStoreModel> {}
export interface TableStore extends Instance<typeof TableStoreModel> {}
export interface TableStoreSnapshot extends SnapshotOut<typeof TableStoreModel> {}
export type TableStoreSnapshotType = SnapshotOut<typeof TableStoreModel>;
// export interface TableStoreSnapshot extends SnapshotOut<typeof TableStoreModel> {}
// export interface TableMap extends Instance<TableStore["upv"]> {}
