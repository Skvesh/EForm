import 'react-native-get-random-values';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';
import App from './app/app';

function EFormApp() {
    return <App />;
}

AppRegistry.registerComponent(appName, () => EFormApp);
