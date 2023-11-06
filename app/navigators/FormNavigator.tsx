import React from 'react';
import { Dimensions } from 'react-native';
import {
    SessionSreen,
    PatientScreen,
    DetectionScreen,
    TableScreen,
    MapperScreen,
    SectionScreen,
    HandoverScreen,
} from '../screens';
import { FormTabParamList } from '../types/navigator.types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../theme';
import { LastScreen } from '../screens/LastScreen';

// const Tab = createBottomTabNavigator<FormTabParamList>();
const Tab = createMaterialTopTabNavigator<FormTabParamList>();

export function FormNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="FormSession"
            initialLayout={{
                width: Dimensions.get('window').width,
            }}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    elevation: 0,
                    height: 3,
                },
                tabBarIndicatorStyle: {
                    height: 3,
                    backgroundColor: colors.componentBackground,
                },
            }}
        >
            <Tab.Screen name="FormSession" component={SessionSreen} />
            <Tab.Screen name="FormPatient" component={PatientScreen} />
            <Tab.Screen name="FormDetection" component={DetectionScreen} />
            <Tab.Screen name="FormTable" component={TableScreen} />
            <Tab.Screen
                name="FormMapper"
                component={MapperScreen}
                options={{
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        elevation: 0,
                        height: 3,
                    },
                }}
            />
            <Tab.Screen name="FormSection" component={SectionScreen} />
            <Tab.Screen name="FormHandover" component={HandoverScreen} />
            <Tab.Screen name="FormLast" component={LastScreen} />
        </Tab.Navigator>
    );
}
