import React, { useState } from 'react';
import {
    TouchableOpacity,
    Text,
    TouchableOpacityProps,
    GestureResponderEvent,
    ViewStyle,
    TextStyle,
    View,
} from 'react-native';
import { ButtonProps, RadioButton } from './common';
import { colors } from '../theme';

export interface ButtonCheckSideProps extends ButtonProps {
    onTouch?: (side: string) => void;
}

export function ButtonCheckSide(props: ButtonCheckSideProps) {
    const [state, setState] = useState<{ [key: string]: boolean }>({
        right: false,
        left: true,
    });

    const pickRadioButton = (pick: keyof typeof state) => {
        setState(prevState => {
            const copy = { ...prevState };
            for (const key in copy) {
                copy[key] = false;
            }

            if (prevState[pick]) {
                return {
                    ...copy,
                };
            } else {
                return {
                    ...copy,
                    [pick]: true,
                };
            }
        });
    };

    const handlePress = () => {
        console.log(state);
        console.log(Object.keys(state));

        const pick = Object.keys(state).find(key => state[key]);
        console.log(pick, props.onTouch);

        props.onTouch && props.onTouch(pick || 'none');
    };

    return (
        <View style={[$container, props.style]}>
            <RadioButton
                style={$radiobutton}
                selected={state.right}
                onPress={() => pickRadioButton('right')}
            />
            <TouchableOpacity style={[$button]} onPress={handlePress}>
                <Text style={[$title, props.titleStyle]}>{props.title}</Text>
            </TouchableOpacity>
            <RadioButton
                style={$radiobutton}
                selected={state.left}
                onPress={() => pickRadioButton('left')}
            />
        </View>
    );
}

const $container: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
    backgroundColor: colors.componentBackground,
    borderWidth: 0.5,
    borderColor: '#FAF1ED',
};

const $button: ViewStyle = {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
};

const $radiobutton: ViewStyle = {
    flex: 1,
    alignItems: 'center',
};

const $title: TextStyle = {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
};
