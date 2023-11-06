import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    ViewStyle,
    TouchableOpacityProps,
    GestureResponderEvent,
} from 'react-native';
import { colors } from '../../theme';

export interface RadioButtonBaseProps extends TouchableOpacityProps {
    selected: boolean;
}

export function RadioButton(props: RadioButtonBaseProps) {
    const handlePress = (event: GestureResponderEvent) => {
        props.onPress && props.onPress(event);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={[$squareContainer, props.style]}>
            <View style={$circle}>{props.selected && <View style={$smallCircle}></View>}</View>
        </TouchableOpacity>
    );
}

const $squareContainer: ViewStyle = {
    borderRadius: 17.5,
    // borderWidth: 0.5,
    // borderColor: 'rgba(0,0,0,0.54)',
};

const $circle: ViewStyle = {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 17.5,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.54)',
};

const $smallCircle: ViewStyle = {
    width: '80%',
    height: '80%',
    borderRadius: 14,
    backgroundColor: colors.background,
};
