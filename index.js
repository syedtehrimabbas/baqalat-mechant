/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import colors from "./src/theme/colors";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primaryColor,
        accent: colors.accentColor,
    },
};

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);