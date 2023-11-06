import { Instance, types } from 'mobx-state-tree';
import {
    additionalPropertyModel,
    additionalTableProperty,
    bilateralModel,
    sideModel,
} from './helpers/submodels';
import { side } from '../types/common';

const AirwaysModel = types
    .model({
        sine: types.optional(sideModel, {}),
        maneuver: types.optional(sideModel, {}),
        suction: types.optional(sideModel, {}),
        orotube: types.optional(sideModel, {}),
        oti: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: additionalTableProperty) {
            self.additionalProperties.remove(property);
        },
    }));

const BreathingModel = types
    .model({
        sine: types.optional(sideModel, {}),
        inhaled: types.optional(sideModel, {}),
        upv: types.optional(sideModel, {}),
        peep: types.optional(sideModel, {}),
        drainage: types.optional(bilateralModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: additionalTableProperty) {
            self.additionalProperties.remove(property);
        },
    }));

const CirculationModel = types
    .model({
        sine: types.optional(sideModel, {}),
        peripheralCatheter: types.optional(sideModel, {}),
        cvk: types.optional(sideModel, {}),
        overpressureInf: types.optional(sideModel, {}),
        infPump: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: additionalTableProperty) {
            self.additionalProperties.remove(property);
        },
    }));

const MainServicesModel = types
    .model({
        sine: types.optional(types.boolean, false),
        airways: types.optional(AirwaysModel, {}),
        breathing: types.optional(BreathingModel, {}),
        circulation: types.optional(CirculationModel, {}),
    })
    .actions(self => ({
        updateSine() {
            self.sine = !self.sine;
        },
    }));

const OtherServicesModel = types
    .model({
        sine: types.optional(sideModel, {}),
        coverage: types.optional(sideModel, {}),
        bandage: types.optional(sideModel, {}),
        pressureBandage: types.optional(sideModel, {}),
        tourniquet: types.optional(sideModel, {}),
        repositioning: types.optional(sideModel, {}),
        splint: types.optional(sideModel, {}),
        bagMattress: types.optional(sideModel, {}),
        fixationCollar: types.optional(sideModel, {}),
        ked: types.optional(sideModel, {}),
        rinse: types.optional(sideModel, {}),
        complaintProbe: types.optional(sideModel, {}),
        catheterUrine: types.optional(sideModel, {}),
        scienceChildbirth: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: additionalTableProperty) {
            self.additionalProperties.remove(property);
        },
    }));

export const TherapyModel = types
    .model({
        id: types.optional(types.identifier, ''),
        time: types.optional(types.string, ''),
        therapy: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateTime(time: string) {
            self.time = time;
        },
        updateTherapy(therapy: string) {
            self.therapy = therapy;
        },
        reset() {
            self.therapy = '';
            self.time = '';
        },
    }));

export const DiagnosisStoreModel = types
    .model('DiagnosisStore')
    .props({
        dg1: types.optional(types.string, ''),
        dg2: types.optional(types.string, ''),
        description: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateDg1(dg: string) {
            self.dg1 = dg;
        },
        updateDg2(dg: string) {
            self.dg2 = dg;
        },
        updateDescription(description: string) {
            self.description = description;
        },
    }));

export const SectionStoreModel = types
    .model('SectionStore')
    .props({
        mainServices: types.optional(MainServicesModel, {}),
        otherServices: types.optional(OtherServicesModel, {}),
        therapies: types.array(TherapyModel),
        diagnosis: types.optional(DiagnosisStoreModel, {}),
    })
    .views(self => ({
        get therapyLength() {
            return self.therapies.length;
        },
    }))
    .actions(self => ({
        addTherapy(therapy: TherapyStore) {
            self.therapies.push(TherapyModel.create(therapy));
        },
        removeTherapy(therapy: TherapyStore) {
            self.therapies.remove(therapy);
        },
        clearTherapy() {
            self.therapies.clear();
        },
    }));

export interface TherapyStore extends Instance<typeof TherapyModel> {}
export interface SectionStore extends Instance<typeof SectionStoreModel> {}
