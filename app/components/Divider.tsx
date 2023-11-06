import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface DividerProps extends ViewProps {}

export function Divider(props: DividerProps) {
    return <View style={[$divider, props.style]}></View>;
}

const $divider: ViewStyle = {
    width: '100%',
    height: 2,
    backgroundColor: '#F9B890',
};
