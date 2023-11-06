import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { colors } from '../theme';

interface ErrorProps {
    text: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export function Error(props: ErrorProps) {
    return (
        <View style={[$errorContainer, props.style]}>
            <Text style={[$errorText, props.textStyle]}>{props.text}</Text>
        </View>
    );
}

const $errorContainer: ViewStyle = {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
};

const $errorText: TextStyle = {
    color: colors.red,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
};
