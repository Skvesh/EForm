import { Instance, types } from 'mobx-state-tree';
import { getCurrentTime } from '../utils/common';

export const SessionStoreModel = types
    .model('SessionStore')
    .props({
        date: types.optional(types.string, getCurrentTime(['year', 'month', 'day'])),
        statement: types.optional(types.string, ''),
        departure: types.optional(types.string, ''),
        coming: types.optional(types.string, ''),
        submit: types.optional(types.string, ''),
        finish: types.optional(types.string, ''),
        rlp: types.optional(types.boolean, false),
        rzp: types.optional(types.boolean, false),
        vzzs: types.optional(types.boolean, false),
    })
    .actions(self => ({
        updateDate(newDate: string) {
            self.date = newDate;
        },
        updateStatement(newStatement: string) {
            self.statement = newStatement;
        },
        updateDeparture(newDeparture: string) {
            self.departure = newDeparture;
        },
        updateComing(newComing: string) {
            self.coming = newComing;
        },
        updateSubmit(newSubmit: string) {
            self.submit = newSubmit;
        },
        updateFinish(newFinish: string) {
            self.finish = newFinish;
        },
        updateRlp() {
            self.rlp = !self.rlp;
        },
        updateRzp() {
            self.rzp = !self.rzp;
        },
        updateVzzs() {
            self.vzzs = !self.vzzs;
        },
    }));

export interface SessionStore extends Instance<typeof SessionStoreModel> {}
