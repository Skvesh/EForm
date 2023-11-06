import React from 'react';
import { View, Text, TextInput, TextInputProps, ViewStyle, TextStyle } from 'react-native';
import { colors, support } from '../theme';

interface BaseTextInputProps extends TextInputProps {
    label: string;
    style?: ViewStyle;
    inputStyle?: ViewStyle;
}

export function Input(props: BaseTextInputProps) {
    return (
        <View style={[$container, props.style]}>
            <View style={$labelContainer}>
                <Text style={$label}>{props.label}</Text>
                {props.children}
            </View>
            <View style={[$inputContainer, props.inputStyle]}>
                <TextInput
                    style={$textInput}
                    placeholderTextColor={props.placeholderTextColor}
                    placeholder="Zadajte text..."
                    value={props.value}
                    onChangeText={props.onChangeText}
                />
            </View>
        </View>
    );
}

const $container: ViewStyle = {
    flex: 1,
};
const $labelContainer: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3%',
};

const $inputContainer: ViewStyle = {
    borderRadius: 10,
    padding: '3%',
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: colors.black,
};

const $label: TextStyle = {
    color: colors.black,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '500',
};

const $textInput: TextStyle = {
    fontSize: 20,
    color: colors.text,
};
