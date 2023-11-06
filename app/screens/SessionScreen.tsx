import React, { FC } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { SingleCheckbox, Screen } from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { Input } from '../components';
import { block, colors } from '../theme';
import { Divider } from '../components/Divider';
import { useStores } from '../models/helpers/useStores';
import { SessionStore } from '../models/SessionStore';

const CheckboxRow = observer(function CheckboxRow(props: { sessionStore: SessionStore }) {
    return (
        <View style={$radioArea}>
            <SingleCheckbox
                styleText={$radioText}
                title="rlp"
                side="left"
                state={props.sessionStore.rlp}
                onPress={() => props.sessionStore.updateRlp()}
            />
            <SingleCheckbox
                styleText={$radioText}
                title="rzp"
                side="left"
                state={props.sessionStore.rzp}
                onPress={() => props.sessionStore.updateRzp()}
            />
            <SingleCheckbox
                styleText={$radioText}
                title="vzzs"
                side="left"
                state={props.sessionStore.vzzs}
                onPress={() => props.sessionStore.updateVzzs()}
            />
        </View>
    );
});

export const SessionSreen: FC<FormTabScreenProps<'FormSession'>> = observer(
    function SessionScreen() {
        const {
            rootStore: { sessionStore },
        } = useStores();

        return (
            <Screen>
                <Input
                    style={$input}
                    label="Dátum"
                    onChangeText={text => sessionStore.updateDate(text)}
                    value={sessionStore.date}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Hlásenie"
                    value={sessionStore.statement}
                    onChangeText={text => sessionStore.updateStatement(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Výjazd"
                    value={sessionStore.departure}
                    onChangeText={text => sessionStore.updateDeparture(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Príchod"
                    value={sessionStore.coming}
                    onChangeText={text => sessionStore.updateComing(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Odovzdanie"
                    value={sessionStore.submit}
                    onChangeText={text => sessionStore.updateSubmit(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Ukončenie"
                    value={sessionStore.finish}
                    onChangeText={text => sessionStore.updateFinish(text)}
                />
                <Divider style={$input} />
                <CheckboxRow sessionStore={sessionStore} />
            </Screen>
        );
    },
);

const $input: ViewStyle = {
    marginBottom: block.marginBottom,
};

const $radioArea: ViewStyle = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
};

const $radioText: TextStyle = {
    ...block.alignCenter,
    marginRight: block.marginRight,
    fontSize: 25,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: colors.text,
};
