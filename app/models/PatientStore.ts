import { Instance, types } from 'mobx-state-tree';

export const PatientStoreModel = types
    .model('SessionStore')
    .props({
        lastName: types.optional(types.string, ''),
        name: types.optional(types.string, ''),
        home: types.optional(types.string, ''),
        address: types.optional(types.string, ''),
        pin: types.optional(types.string, ''),
        insurance: types.optional(types.string, ''),
        reason: types.optional(types.string, ''),
        diagnose: types.optional(types.string, ''),
        passport: types.optional(types.string, ''),
        firstAid: types.optional(types.boolean, false),
        anamnesis: types.optional(types.string, ''),
    })
    .actions(self => ({
        updateLastName(newLastName: string) {
            self.lastName = newLastName;
        },
        updateName(newName: string) {
            self.name = newName;
        },
        updateHome(newHome: string) {
            self.home = newHome;
        },
        updateAddress(newAddress: string) {
            self.address = newAddress;
        },
        updatePin(newPin: string) {
            self.pin = newPin;
        },
        updateInsurance(newInsurance: string) {
            self.insurance = newInsurance;
        },
        updateReason(newReason: string) {
            self.reason = newReason;
        },
        updateDiagnose(newDiagnose: string) {
            self.diagnose = newDiagnose;
        },
        updatePassport(newPassport: string) {
            self.passport = newPassport;
        },
        updateFirstAid() {
            self.firstAid = !self.firstAid;
        },
        updateAnamnesis(newAnamnesis: string) {
            self.anamnesis = newAnamnesis;
        },
    }));

export interface PatientStore extends Instance<typeof PatientStoreModel> {}
