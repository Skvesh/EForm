import { useContext, useEffect, useState } from 'react';
import { setupRootStore, setupScreensStore } from './setupStores';
import { RootStoreContext, ScreensStoreContext } from './stores';

export const useStores = () => {
    const rootStore = useContext(RootStoreContext);
    const screensStore = useContext(ScreensStoreContext);
    return {
        rootStore,
        screensStore,
    };
};

export const useInitialRootStore = (callback?: () => void | Promise<void>) => {
    const { rootStore } = useStores();
    const [rehydrated, setRehydrated] = useState(false);

    useEffect(() => {
        let _unsubscribe: () => void;
        (async () => {
            _unsubscribe = await setupRootStore(rootStore);

            setRehydrated(true);

            if (callback) callback();
        })();

        return () => {
            if (_unsubscribe) _unsubscribe();
        };
    }, []);

    return {
        rootStore,
        rehydrated,
    };
};

export const useInitialScreensStore = (callback?: () => void | Promise<void>) => {
    const { screensStore } = useStores();
    const [rehydrated, setRehydrated] = useState(false);

    useEffect(() => {
        let _unsubscribe: () => void;
        (async () => {
            _unsubscribe = await setupScreensStore(screensStore);

            setRehydrated(true);

            if (callback) callback();
        })();

        return () => {
            if (_unsubscribe) _unsubscribe();
        };
    }, []);

    return {
        screensStore,
        rehydrated,
    };
};

export const useInitialStores = async (callback?: () => void | Promise<void>) => {
    // const { rootStore } = useInitialRootStore(callback);
    // const { tableScreenStore } = useInitialTableScreenStore(callback);
    const initialStores = await Promise.all([
        useInitialRootStore(callback),
        useInitialScreensStore(callback),
    ]);
    return initialStores.every(value => value.rehydrated);
};
