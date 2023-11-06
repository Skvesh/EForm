import React from 'react';
import {
    ImageStyle,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
    useColorScheme,
} from 'react-native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import { observer } from 'mobx-react-lite';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AppStackParamList } from '../types/navigator.types';
import { FormNavigator } from './FormNavigator';
import { colors } from '../theme';
import { dismantleScreensStore, useStores } from '../models/helpers';
import { dismantleRootStore } from '../models/helpers';
import TrashSvg from '../../assets/svg-components/TrashSvg';

const Stack = createNativeStackNavigator<AppStackParamList>();

function headerRight(navigation: NativeStackNavigationProp<AppStackParamList, 'Home'>) {
    const { rootStore, screensStore } = useStores();
    return (
        <TouchableOpacity
            style={$headerRight}
            onPress={() => {
                // navigation.navigate('Home');
                dismantleRootStore(rootStore);
                dismantleScreensStore(screensStore);
                screensStore.setRootStateToCreate();
                navigation.goBack();
            }}
        >
            {/* <Text style={$headerRightText}>Vymazať</Text> */}
            <View style={$icon}>
                <TrashSvg />
            </View>
        </TouchableOpacity>
    );
}

const AppStack = observer(function AppStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Form"
                component={FormNavigator}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        // backgroundColor: colors.background,
                    },
                    headerBackVisible: true,
                    headerRight: () => headerRight(navigation),
                })}
            />
        </Stack.Navigator>
    );
});

export const AppNavigator = observer(function AppNavigator() {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AppStack />
        </NavigationContainer>
    );
});

const $headerRightText: TextStyle = {
    marginRight: 15,
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
};

const $headerRight: ViewStyle = {
    // width: '100%',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const $icon: ImageStyle = {
    width: 30,
    height: 30,
    // flex: 1,
    // ...position.container,
    // backgroundColor: 'black',
};
