import { createContext } from 'react';
import { RootStore, RootStoreModel } from '../RootStore';
import { ScreensStoreModel, ScreensStore } from '../ScreensStore';

const _rootStore = RootStoreModel.create({});
const _screensStore = ScreensStoreModel.create({});

export const RootStoreContext = createContext<RootStore>(_rootStore);
export const ScreensStoreContext = createContext<ScreensStore>(_screensStore);
