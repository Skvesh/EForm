import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    ViewStyle,
    TouchableOpacityProps,
    GestureResponderEvent,
} from 'react-native';
import { colors } from '../../theme';

export interface CheckboxBaseProps extends TouchableOpacityProps {
    state: boolean;
}

export function Checkbox(props: CheckboxBaseProps) {
    // const [state, setState] = useState<boolean>(props.state);
    const handlePress = (event: GestureResponderEvent) => {
        console.log('Change state');

        // setState(!state);
        props.onPress && props.onPress(event);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={$squareContainer}>
            <View style={$square}>{props.state && <View style={$smallSquare}></View>}</View>
        </TouchableOpacity>
    );
}

const $square: ViewStyle = {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
};

const $smallSquare: ViewStyle = {
    width: '80%',
    height: '80%',
    borderRadius: 4,
    backgroundColor: colors.componentBackground,
};

const $squareContainer: ViewStyle = {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.54)',
};
