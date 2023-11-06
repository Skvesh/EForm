import { Instance, destroy, types } from 'mobx-state-tree';
import {
    additionalPropertyModel,
    sideModel,
    bilateralModel,
    bilateralModelString,
} from './helpers/submodels';
import { side } from '../types/common';

const eyesOpeningModel = types.model({
    spontaneous: types.optional(sideModel, {}),
    onCall: types.optional(sideModel, {}),
    onPain: types.optional(sideModel, {}),
    none: types.optional(sideModel, {}),
});

const verbalContactModel = types.model({
    oriented: types.optional(sideModel, {}),
    disorientated: types.optional(sideModel, {}),
    inadequate: types.optional(sideModel, {}),
    unintelligible: types.optional(sideModel, {}),
    none: types.optional(sideModel, {}),
});

const motorSkillsModel = types.model({
    onCall: types.optional(sideModel, {}),
    onPain: types.optional(sideModel, {}),
    untargeted: types.optional(sideModel, {}),
    flexia: types.optional(sideModel, {}),
    extension: types.optional(sideModel, {}),
    none: types.optional(sideModel, {}),
});

const eyeReflexesModel = types.model({
    photoreaction: types.optional(bilateralModel, {}),
    deviation: types.optional(bilateralModel, {}),
    pupils: types.optional(bilateralModelString, {}),
    cornealReflex: types.optional(bilateralModel, {}),
    swimBulbs: types.optional(sideModel, { side: 'left' }),
    oculocephalicReflex: types.optional(sideModel, { side: 'left' }),
});

const painModel = types
    .model({
        sine: types.optional(sideModel, {}),
        bearable: types.optional(sideModel, {}),
        carping: types.optional(sideModel, {}),
        tingling: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: typeof additionalPropertyModel) {
            destroy(property);
        },
    }));

const abdomenModel = types
    .model({
        sine: types.optional(sideModel, {}),
        soreness: types.optional(sideModel, {}),
        resistance: types.optional(sideModel, {}),
        defence: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: typeof additionalPropertyModel) {
            destroy(property);
        },
    }));

const airwaysModel = types
    .model({
        passable: types.optional(sideModel, {}),
        aspiration: types.optional(sideModel, {}),
        obstruction: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: typeof additionalPropertyModel) {
            destroy(property);
        },
    }));

const breathingModel = types
    .model({
        normalBreathing: types.optional(sideModel, {}),
        stopBreathing: types.optional(sideModel, {}),
        shortnessOfBreath: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: typeof additionalPropertyModel) {
            destroy(property);
        },
    }));

const auscultationFindingBlueModel = types
    .model({
        unexplored: types.optional(sideModel, {}),
        physiological: types.optional(bilateralModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: typeof additionalPropertyModel) {
            destroy(property);
        },
    }));

const neurologicalFindingModel = types
    .model({
        inTheStandart: types.optional(sideModel, {}),
        cramps: types.optional(sideModel, {}),
        paresis: types.optional(sideModel, {}),
        plegia: types.optional(sideModel, {}),
        meningealSign: types.optional(sideModel, {}),
        departureStool: types.optional(sideModel, {}),
        departureUrine: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: typeof additionalPropertyModel) {
            destroy(property);
        },
    }));

const circulationModel = types.model({
    regular: types.optional(bilateralModel, {}),
    irregular: types.optional(bilateralModel, {}),
    full: types.optional(bilateralModel, {}),
    filamentous: types.optional(bilateralModel, {}),
    sine: types.optional(bilateralModel, {}),
});

const auscultationFindingPinkModel = types.model({
    regular: types.optional(sideModel, {}),
    irregular: types.optional(sideModel, {}),
    heartSounds: types.optional(sideModel, {}),
    shellac: types.optional(sideModel, {}),
    asystole: types.optional(sideModel, {}),
});

const skinModel = types
    .model({
        pink: types.optional(sideModel, {}),
        pale: types.optional(sideModel, {}),
        cyanotic: types.optional(sideModel, {}),
        capillaryLessThan2s: types.optional(sideModel, {}),
        returnMoreThan2s: types.optional(sideModel, {}),
        additionalProperties: types.array(additionalPropertyModel),
    })
    .actions(self => ({
        addAdditionalProperty(id: string, side: side) {
            self.additionalProperties.push(
                additionalPropertyModel.create({ id, checkValue: { side } }),
            );
        },
        removeAdditionalProperty(property: typeof additionalPropertyModel) {
            destroy(property);
        },
    }));

export const DetectionStoreModel = types.model('DetectionStore').props({
    eyesOpening: types.optional(eyesOpeningModel, {}),
    verbalContact: types.optional(verbalContactModel, {}),
    motorSkills: types.optional(motorSkillsModel, {}),
    eyeReflexes: types.optional(eyeReflexesModel, {}),
    pain: types.optional(painModel, {}),
    abdomen: types.optional(abdomenModel, {}),
    airways: types.optional(airwaysModel, {}),
    breathing: types.optional(breathingModel, {}),
    auscultationFindingBlue: types.optional(auscultationFindingBlueModel, {}),
    neurologicalFinding: types.optional(neurologicalFindingModel, {}),
    circulation: types.optional(circulationModel, {}),
    auscultationFindingPink: types.optional(auscultationFindingPinkModel, {}),
    skin: types.optional(skinModel, {}),
});

export interface DetectionStore extends Instance<typeof DetectionStoreModel> {}
