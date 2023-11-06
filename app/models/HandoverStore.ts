import { Instance, types } from 'mobx-state-tree';

const DeathModel = types
    .model({
        time: types.optional(types.string, ''),
        check: types.optional(types.boolean, false),
    })
    .actions(self => ({
        updateTime(time: string) {
            self.time = time;
        },
        updateCheck() {
            self.check = !self.check;
        },
    }));

export const HandoverStoreModel = types
    .model('HandoverStore')
    .props({
        firstOfCrew: types.optional(types.string, ''),
        secondOfCrew: types.optional(types.string, ''),
        thirdOfCrew: types.optional(types.string, ''),
        fourthOfCrew: types.optional(types.string, ''),
        handed: types.optional(types.string, ''),
        handedWhere: types.optional(types.string, ''),
        taken: types.optional(types.string, ''),
        intervention: types.optional(types.boolean, false),
        sekund: types.optional(types.boolean, false),
        neusp: types.optional(types.boolean, false),
        indicated: types.optional(types.boolean, false),
        notIndicated: types.optional(types.boolean, false),
        abused: types.optional(types.boolean, false),
        conditionImproved: types.optional(types.boolean, false),
        unchanged: types.optional(types.boolean, false),
        aggravated: types.optional(types.boolean, false),
        treated: types.optional(types.boolean, false),
        intervetreatedntion: types.optional(types.boolean, false),
        refusedTreatment: types.optional(types.boolean, false),
        refusedTransportation: types.optional(types.boolean, false),
        cooperation: types.optional(types.string, ''),
        death: types.optional(DeathModel, {}),
    })
    .actions(self => ({
        updateFirstOfCrew(firstOfCrew: string) {
            self.firstOfCrew = firstOfCrew;
        },
        updateSecondOfCrew(secondOfCrew: string) {
            self.secondOfCrew = secondOfCrew;
        },
        updateThirdOfCrew(thirdOfCrew: string) {
            self.thirdOfCrew = thirdOfCrew;
        },
        updateFourthOfCrew(fourthOfCrew: string) {
            self.fourthOfCrew = fourthOfCrew;
        },
        updateHanded(handed: string) {
            self.handed = handed;
        },
        updateHandedWhere(handedWhere: string) {
            self.handedWhere = handedWhere;
        },
        updateTaken(taken: string) {
            self.taken = taken;
        },
        updateIntervention() {
            self.intervention = !self.intervention;
        },
        updateSekund() {
            self.sekund = !self.sekund;
        },
        updateNeusp() {
            self.neusp = !self.neusp;
        },
        updateIndicated() {
            self.indicated = !self.indicated;
        },
        updateNotIndicated() {
            self.notIndicated = !self.notIndicated;
        },
        updateAbused() {
            self.abused = !self.abused;
        },
        updateConditionImproved() {
            self.conditionImproved = !self.conditionImproved;
        },
        updateUnchanged() {
            self.unchanged = !self.unchanged;
        },
        updateAggravated() {
            self.aggravated = !self.aggravated;
        },
        updateTreated() {
            self.treated = !self.treated;
        },
        updateRefusedTreatment() {
            self.refusedTreatment = !self.refusedTreatment;
        },
        updateRefusedTransportation() {
            self.refusedTransportation = !self.refusedTransportation;
        },
        updateCooperation(cooperation: string) {
            self.cooperation = cooperation;
        },
    }));

export interface HandoverStore extends Instance<typeof HandoverStoreModel> {}
