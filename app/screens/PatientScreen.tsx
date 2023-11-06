import React, { FC } from 'react';
import { View, TextInput, ViewStyle, ScrollView, TextStyle } from 'react-native';
import { SingleCheckbox, Screen } from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { Input } from '../components';
import { block, colors, font, support } from '../theme';
import { Divider } from '../components/Divider';
import { useStores } from '../models/helpers';

export const PatientScreen: FC<FormTabScreenProps<'FormPatient'>> = observer(
    function PatientScreen() {
        const {
            rootStore: { patientStore },
        } = useStores();

        return (
            <Screen>
                <Input
                    style={$input}
                    label="Priezvisko"
                    value={patientStore.lastName}
                    onChangeText={text => patientStore.updateLastName(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Meno"
                    value={patientStore.name}
                    onChangeText={text => patientStore.updateName(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Bydlisko"
                    value={patientStore.home}
                    onChangeText={text => patientStore.updateHome(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Miesto"
                    value={patientStore.address}
                    onChangeText={text => patientStore.updateAddress(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    inputStyle={$pink}
                    label="Rodné číslo"
                    value={patientStore.pin}
                    onChangeText={text => patientStore.updatePin(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    inputStyle={$pink}
                    label="Poisťovňa"
                    value={patientStore.insurance}
                    onChangeText={text => patientStore.updateInsurance(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Dôvod"
                    value={patientStore.reason}
                    onChangeText={text => patientStore.updateReason(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Diagnóza"
                    value={patientStore.diagnose}
                    onChangeText={text => patientStore.updateDiagnose(text)}
                />
                <Divider />
                <Input
                    style={$input}
                    label="Číslo pasu"
                    value={patientStore.reason}
                    onChangeText={text => patientStore.updateReason(text)}
                />
                <Divider />
                <View style={$inRow}>
                    <Input
                        inputStyle={$grey}
                        label="Anamnéza  (OA, LA, AA, TO)"
                        value={patientStore.anamnesis}
                        onChangeText={text => patientStore.updateAnamnesis(text)}
                    >
                        <SingleCheckbox
                            title="PP"
                            side="right"
                            style={$checkbox}
                            styleText={$checkboxText}
                            state={patientStore.firstAid}
                            onPress={() => patientStore.updateFirstAid()}
                        />
                    </Input>
                </View>
            </Screen>
        );
    },
);

const $input: ViewStyle = {
    marginBottom: block.marginBottom,
};

const $pink: ViewStyle = {
    backgroundColor: colors.pink,
};
const $grey: ViewStyle = {
    backgroundColor: colors.grey,
};

const $inRow: ViewStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
};

const $checkbox: ViewStyle = {};

const $checkboxText: TextStyle = {
    color: colors.black,
    fontSize: font.size.medium,
    lineHeight: font.size.medium,
    fontWeight: font.weight.medium,
    textTransform: 'uppercase',
};
