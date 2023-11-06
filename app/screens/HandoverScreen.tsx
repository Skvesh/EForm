import React, { FC } from 'react';
import { View, ViewStyle, ScrollView, TextStyle } from 'react-native';
import { SingleCheckbox, Screen, TableRow } from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { Input } from '../components';
import { colors } from '../theme';
import { Divider } from '../components/Divider';
import { useStores } from '../models/helpers/useStores';
import { HandoverStore } from '../models';

const CheckboxRow = observer(function CheckboxRow(props: { handoverStore: HandoverStore }) {
    return (
        <View style={[$radioArea, $input]}>
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="Zásah prim."
                side="left"
                state={props.handoverStore.intervention}
                onPress={() => props.handoverStore.updateIntervention()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="sekund."
                side="left"
                state={props.handoverStore.sekund}
                onPress={() => props.handoverStore.updateSekund()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="neusp."
                side="left"
                state={props.handoverStore.neusp}
                onPress={() => props.handoverStore.updateNeusp()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="Indikovaný"
                side="left"
                state={props.handoverStore.indicated}
                onPress={() => props.handoverStore.updateIndicated()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="neindik."
                side="left"
                state={props.handoverStore.notIndicated}
                onPress={() => props.handoverStore.updateNotIndicated()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="zneužitie"
                side="left"
                state={props.handoverStore.abused}
                onPress={() => props.handoverStore.updateAbused()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="Stav zlepšený"
                side="left"
                state={props.handoverStore.conditionImproved}
                onPress={() => props.handoverStore.updateConditionImproved()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="zmen."
                side="left"
                state={props.handoverStore.unchanged}
                onPress={() => props.handoverStore.updateUnchanged()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="zhoršený"
                side="left"
                state={props.handoverStore.aggravated}
                onPress={() => props.handoverStore.updateAggravated()}
            />
            <SingleCheckbox
                style={$button}
                styleText={{
                    ...$radioText,
                    flexWrap: 'wrap',
                    flexShrink: 1,
                    flexGrow: 1,
                    textAlign: 'left',
                }}
                title="Pacient ošetrený doma, poučený  "
                side="left"
                state={props.handoverStore.treated}
                onPress={() => props.handoverStore.updateTreated()}
            />
            <SingleCheckbox
                style={$button}
                styleText={$radioText}
                title="odmietol ošetrenie"
                side="left"
                state={props.handoverStore.refusedTreatment}
                onPress={() => props.handoverStore.updateRefusedTreatment()}
            />
            <SingleCheckbox
                style={{ ...$button, borderBottomWidth: 0 }}
                styleText={$radioText}
                title="odmietol prevoz"
                side="left"
                state={props.handoverStore.refusedTransportation}
                onPress={() => props.handoverStore.updateRefusedTransportation()}
            />
        </View>
    );
});

export const HandoverScreen: FC<FormTabScreenProps<'FormHandover'>> = observer(
    function HandoverScreen() {
        const {
            rootStore: { handoverStore },
        } = useStores();

        return (
            <Screen>
                <Input
                    style={$input}
                    label="Posádka 1"
                    onChangeText={text => handoverStore.updateFirstOfCrew(text)}
                    value={handoverStore.firstOfCrew}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Posádka 2"
                    value={handoverStore.secondOfCrew}
                    onChangeText={text => handoverStore.updateSecondOfCrew(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Posádka 3"
                    value={handoverStore.thirdOfCrew}
                    onChangeText={text => handoverStore.updateThirdOfCrew(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Posádka 4"
                    value={handoverStore.fourthOfCrew}
                    onChangeText={text => handoverStore.updateFourthOfCrew(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Odovzdal"
                    value={handoverStore.handed}
                    onChangeText={text => handoverStore.updateHanded(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Odovzdal kde"
                    value={handoverStore.handedWhere}
                    onChangeText={text => handoverStore.updateHandedWhere(text)}
                />
                <Divider style={$input} />
                <Input
                    style={$input}
                    label="Prevzal"
                    value={handoverStore.taken}
                    onChangeText={text => handoverStore.updateTaken(text)}
                />
                <Divider style={$input} />
                <CheckboxRow handoverStore={handoverStore} />
                <Divider />
                <Input
                    style={$input}
                    label="Spolupráca s"
                    value={handoverStore.cooperation}
                    onChangeText={text => handoverStore.updateCooperation(text)}
                />
                <Divider style={$input} />
                <View style={$table}>
                    <SingleCheckbox
                        state={handoverStore.death.check}
                        onPress={handoverStore.death.updateCheck}
                        activeOpacity={0.8}
                        style={{
                            // alignSelf: 'stretch',
                            justifyContent: 'space-between',
                            // alignItems: 'center',
                            height: 55,
                            paddingHorizontal: 20,
                            paddingVertical: 3,
                            borderBottomWidth: 1,
                            borderBottomColor: '#000',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            backgroundColor: colors.grey,
                        }}
                        styleText={{
                            fontSize: 25,
                        }}
                        title={'Úmrtie'}
                        side={'left'}
                    />
                    <TableRow
                        styleTitle={$title}
                        title={'čas'}
                        value={handoverStore.death.time}
                        onChangeText={text => handoverStore.death.updateTime(text)}
                    />
                </View>
            </Screen>
        );
    },
);
const $table: ViewStyle = {
    backgroundColor: '#fff',
    // padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
};
const $input: ViewStyle = {
    marginBottom: 20,
};

const $title: TextStyle = {
    fontSize: 25,
    lineHeight: 25,
};

const $radioArea: ViewStyle = {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
};

const $radioText: TextStyle = {
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    fontSize: 21,
    fontWeight: '500',
    textTransform: 'uppercase',
};

const $button: ViewStyle = {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
};
