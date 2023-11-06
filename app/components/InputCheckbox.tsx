import React from 'react';
import { useState } from 'react';
import { TextInput, TextInputProps, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { Checkbox } from './common';

export interface InputCheckboxProps extends TextInputProps {
    side: 'none' | 'left' | 'right';
    state: boolean;
    styleText?: TextStyle;
    backgroundColor?: ViewStyle;
    onPress: () => void;
    onLongPress: () => void;
}

export function InputCheckbox(props: InputCheckboxProps) {
    const [state, setState] = useState(props.state);

    return (
        <TouchableOpacity
            onLongPress={props.onLongPress}
            style={[$button, props.style, props.backgroundColor]}
        >
            {props.side === 'right' && (
                <Checkbox
                    onPress={() => {
                        setState(!state);
                        props.onPress();
                    }}
                    state={props.state}
                    // style={$squareContainer}
                ></Checkbox>
            )}
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={[$input, props.styleText, props.backgroundColor]}
            />
            {(props.side === 'left' || props.side === 'none') && (
                <Checkbox
                    onPress={() => {
                        setState(!state);
                        props.onPress();
                    }}
                    state={props.state}
                    // style={$squareContainer}
                ></Checkbox>
            )}
        </TouchableOpacity>
    );
}

const $button: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
};

const $input: TextStyle = {
    width: '70%',
    marginRight: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
};
