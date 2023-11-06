import React from 'react';
import { View, ViewStyle, TextStyle, TextInput, Text, TextInputProps } from 'react-native';
import { block, colors } from '../theme';

interface TableRowProps extends TextInputProps {
    title: string;
    value: string;
    subTitle?: string;
    styleTitle?: TextStyle;
}

export function TableRow(props: TableRowProps) {
    // const handleChange = (text: string) => {
    //     props.onChangeText(text);
    // };
    return (
        <View style={[$tableRow, props.style]}>
            <View style={$titleContainer}>
                <Text style={[title, props.styleTitle]}>{props.title}</Text>
            </View>
            <TextInput
                keyboardType={props.keyboardType}
                inputMode={props.inputMode}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                maxLength={props.maxLength}
                value={props.value}
                onChangeText={props.onChangeText}
                style={[$input, inputText, props.style]}
            />
            {props.subTitle && (
                <View style={$subTitleContainer}>
                    <Text style={title}>{props.subTitle}</Text>
                </View>
            )}
        </View>
    );
}

const $tableRow: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    borderBottomWidth: 1,
    // backgroundColor: '#fff',
    // width: '100%',
    flexWrap: 'wrap',
    // flex: 1,
};

const $titleContainer: ViewStyle = {
    marginRight: block.marginRight,
};
const $subTitleContainer: ViewStyle = {
    marginLeft: 10,
};

const title: TextStyle = {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
};
const $input: ViewStyle = {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.54)',
    // width: '80%',
    paddingTop: 3,
    paddingBottom: 1,
};

const inputText: TextStyle = {
    fontSize: 20,
};
