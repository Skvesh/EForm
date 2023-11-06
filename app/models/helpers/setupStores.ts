import { IDisposer, applySnapshot, onSnapshot } from 'mobx-state-tree';
import { RootStore } from '../RootStore';
import * as storage from '../../utils/storage';
import { ScreensStore } from '../ScreensStore';
import { ROOT_STATE_STORAGE_KEY, SCREENS_STORAGE_KEY } from '../../utils/constants';

export async function setupRootStore(rootStore: RootStore) {
    try {
        let restoredRootState = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {};
        applySnapshot(rootStore, restoredRootState);
        // console.log('RestoredRootData.', restoredRootState);
    } catch (e) {
        console.error(e);
    }

    // if (_disposer) _disposer();

    const _disposer: IDisposer = onSnapshot(rootStore, snapshot =>
        storage.save(ROOT_STATE_STORAGE_KEY, snapshot),
    );

    const unsubscribe = () => {
        _disposer();
        console.log('Unsubscribe from root store.');
    };

    return unsubscribe;
}

export async function setupScreensStore(screensStore: ScreensStore) {
    try {
        let restoredSreensState = (await storage.load(SCREENS_STORAGE_KEY)) || {};
        applySnapshot(screensStore, restoredSreensState);
        // console.log('RestoredScreensState.', restoredSreensState);
    } catch (e) {
        console.error(e);
    }

    // if (_disposer) _disposer();

    const _disposer: IDisposer = onSnapshot(screensStore, snapshot =>
        storage.save(SCREENS_STORAGE_KEY, snapshot),
    );

    const unsubscribe = () => {
        _disposer();
        console.log('Unsubscribe from screens store.');
    };

    return unsubscribe;
}
