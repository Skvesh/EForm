import React from 'react';
import {
    TouchableOpacity,
    Text,
    TouchableOpacityProps,
    GestureResponderEvent,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { block, colors } from '../../theme';

export interface ButtonProps extends TouchableOpacityProps {
    title: string;
    // onPress: (event: GestureResponderEvent | string) => void;
    titleStyle?: TextStyle;
    // style?: ViewStyle;
}

export function Button(props: ButtonProps) {
    return (
        <TouchableOpacity
            style={[$button, props.style]}
            onPress={props.onPress}
            activeOpacity={props.activeOpacity}
        >
            <Text style={[$title, props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const $button: ViewStyle = {
    ...block.alignCenter,
    padding: '4%',
    backgroundColor: colors.componentBackground,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#FAF1ED',
};

const $title: TextStyle = {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
};
