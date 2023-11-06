import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './navigators/AppNavigator';
import { useInitialRootStore, useInitialStores } from './models/helpers';

function App() {
    if (!useInitialStores()) return null;

    // const { rehydrated } = useInitialRootStore();

    // if (!rehydrated) return null;

    return (
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
    );
}

export default App;
