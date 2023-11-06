import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    TouchableWithoutFeedback,
} from 'react-native';
import { colors } from '../theme';
import { Checkbox, CheckboxBaseProps } from './common';

export interface SeparatedCheckboxesProps extends CheckboxProps {
    leftState: boolean;
    onLeftPress: () => void;
}

export interface SingleCheckboxProps extends CheckboxProps {
    side: 'none' | 'left' | 'right';
}

// interface CheckboxProps extends Omit<CheckboxBaseProps, 'onPress'> {
interface CheckboxProps extends CheckboxBaseProps {
    onPress: () => void;
    title?: String;
    styleText?: TextStyle;
}

export function SingleCheckbox(props: SingleCheckboxProps) {
    const [state, setState] = useState(props.state);
    const marginSideStyle: ViewStyle =
        props.side === 'right' ? { marginLeft: 10 } : { marginRight: 10 };

    return (
        <TouchableOpacity
            activeOpacity={props.activeOpacity}
            style={[$button, props.style]}
            onPress={() => {
                setState(!state);
                props.onPress();
            }}
        >
            {props.side === 'right' && (
                <View pointerEvents="none">
                    <Checkbox state={props.state}></Checkbox>
                </View>
            )}
            {props.title && (
                <Text style={[$label, marginSideStyle, props.styleText]}>{props.title}</Text>
            )}
            {(props.side === 'left' || props.side === 'none') && (
                <View pointerEvents="none">
                    <Checkbox state={props.state}></Checkbox>
                </View>
            )}
        </TouchableOpacity>
    );
}

export function SeparatedCheckboxes(props: SeparatedCheckboxesProps) {
    const [rightState, setRightState] = useState(props.state);
    const [leftState, setLeftState] = useState(props.leftState);
    return (
        <TouchableWithoutFeedback>
            <View style={[$button, props.style]}>
                <Checkbox
                    state={props.state}
                    onPress={() => {
                        setRightState(!rightState);
                        props.onPress();
                    }}
                    // style={$squareContainer}
                ></Checkbox>
                {props.title && <Text style={[$label, props.styleText]}>{props.title}</Text>}
                <Checkbox
                    state={props.leftState}
                    onPress={() => {
                        setLeftState(!leftState);
                        props.onLeftPress();
                    }}
                    // style={$squareContainer}
                ></Checkbox>
            </View>
        </TouchableWithoutFeedback>
    );
}

const $button: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
};

// const $squareContainer: ViewStyle = {
//     backgroundColor: '#fff',
//     borderRadius: 4,
//     borderWidth: 0.5,
//     borderColor: 'rgba(0,0,0,0.54)',
// };

const $label: TextStyle = {
    textAlign: 'center',
};
