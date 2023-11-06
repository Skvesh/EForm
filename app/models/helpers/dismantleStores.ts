import { applySnapshot } from 'mobx-state-tree';
import { RootStore } from '../RootStore';
import * as storage from '../../utils/storage';
import { ScreensStore } from '../ScreensStore';
import { ROOT_STATE_STORAGE_KEY, SCREENS_STORAGE_KEY } from '../../utils/constants';

export async function dismantleRootStore(rootStore: RootStore) {
    try {
        await storage.remove(ROOT_STATE_STORAGE_KEY);
        applySnapshot(rootStore, {});
        console.log('RootStore was clear.');
    } catch (e) {
        console.error(e);
    }
}

export async function dismantleScreensStore(screensStore: ScreensStore) {
    try {
        await storage.remove(SCREENS_STORAGE_KEY);
        applySnapshot(screensStore, {});
        console.log('RootStore was clear.');
    } catch (e) {
        console.error(e);
    }
}
