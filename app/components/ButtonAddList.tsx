import React from 'react';
import { GestureResponderEvent, ViewStyle, TextStyle, View } from 'react-native';
import { colors } from '../theme';
import { InputCheckbox } from './InputCheckbox';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import { ButtonCheckSide } from './ButtonCheckSide';

interface ButtonAddListProps {
    styleButton: ViewStyle;
    style?: ViewStyle;
    backgroundColor?: ViewStyle;
    styleCheckbox: ViewStyle;
    styleCheckboxText: TextStyle;
    list: [];
    title: string;
    onPress: (id: string, side: string) => void;
    onLongPress: (event: GestureResponderEvent | string) => void;
}

export const ButtonAddList = observer(function ButtonAddList(props: ButtonAddListProps) {
    return (
        <View style={props.style}>
            {props.list.map((property: any) => {
                console.log(property);

                const { side, checked } = property.checkValue;
                return (
                    <InputCheckbox
                        side={side}
                        style={props.styleCheckbox}
                        styleText={props.styleCheckboxText}
                        backgroundColor={props.backgroundColor}
                        key={property.id}
                        value={property.key}
                        state={checked}
                        onPress={() => property.checkValue.toggle()}
                        onLongPress={() => props.onLongPress(property)}
                        onChangeText={text => property.updateKey(text)}
                    />
                );
            })}
            <ButtonCheckSide
                title={props.title}
                onTouch={(side: string) => {
                    const id = uuidv4();
                    console.log(id, side);

                    props.onPress(id, side);
                }}
                style={props.styleButton}
                titleStyle={$title}
            />
        </View>
    );
});

const $title: TextStyle = {
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
};
