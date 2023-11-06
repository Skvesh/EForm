import React from 'react';
import {
    Text,
    View,
    ViewStyle,
    TextStyle,
    TouchableWithoutFeedback,
    TextInput,
    TextInputProps,
} from 'react-native';

interface underInputBoxesProps extends UnderInputProps {
    leftValue: string;
    onLeftChangeText?: (text: string) => void;
    title: string;
    styleText: TextStyle;
}

interface UnderInputProps extends TextInputProps {}

function UnderlineInput(props: UnderInputProps) {
    return (
        <TextInput
            maxLength={3}
            value={props.value}
            onChangeText={props.onChangeText}
            style={[$squareContainer, $square, $text]}
            textAlign="center"
            keyboardType="numeric"
        />
    );
}

export function UnderlineInputBoxes(props: underInputBoxesProps) {
    return (
        <TouchableWithoutFeedback>
            <View style={[$button, props.style]}>
                <UnderlineInput value={props.value} onChangeText={props.onChangeText} />
                {props.title && <Text style={[$label, props.styleText]}>{props.title}</Text>}
                <UnderlineInput value={props.leftValue} onChangeText={props.onLeftChangeText} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const $button: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
};

const $squareContainer: ViewStyle = {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.54)',
};

const $square: ViewStyle = {
    width: 40,
    paddingTop: 3,
    paddingBottom: 1,
};

const $text: TextStyle = {
    fontSize: 18,
};

const $label: TextStyle = {
    textAlign: 'center',
};
