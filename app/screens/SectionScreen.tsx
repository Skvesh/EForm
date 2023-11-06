import React, { FC, useState } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import {
    Button,
    CheckboxList,
    Screen,
    SingleCheckbox,
    TableRow,
    Divider,
    Error,
    TableList,
} from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { useStores } from '../models/helpers';
import { SectionStore, TherapyModel, TherapyStore } from '../models';
import { colors } from '../theme';
import { isEmpty } from '../utils/validations';
import { v4 as uuidv4 } from 'uuid';

const TherapyTable = observer(function TherapyTable({
    table,
    list,
}: {
    table: TherapyStore;
    list: SectionStore;
}) {
    // const [upvTable, setUpvTable] = useState<UpvStore>(table);
    const [validated, setValidated] = useState<boolean>(true);

    const handleButtonPress = () => {
        if (isEmpty(table.time)) {
            setValidated(false);
        } else {
            if (list.therapyLength < 10) {
                setValidated(true);
                const therapyTable = TherapyModel.create({
                    id: uuidv4(),
                    time: table.time,
                    therapy: table.therapy,
                });
                list.addTherapy(therapyTable);
                table.reset();
            }
        }
    };

    return (
        <View style={$table}>
            <View style={$labelContainer}>
                <Text style={$label}>{'Terapia'}</Text>
            </View>
            {!validated && <Error text={'Pole je povinné'} />}
            <TableRow
                style={[$firstTableRow]}
                title={'Čas'}
                value={table.time}
                onChangeText={time => table.updateTime(time)}
            />
            <TableRow
                title={'Popis'}
                value={table.therapy}
                onChangeText={massage => table.updateTherapy(massage)}
            />
            <TableList<SectionStore>
                data={list}
                listTitle="therapies"
                itemTitle="therapy"
                // onItemPress={item =>
                //     setUpvTable((oldUpvTable: UpvStore) => ({
                //         oldUpvTable,
                //         ...(item as UpvStore),
                //     }))
                // }
                onItemLongPress={item => list.removeTherapy(item as TherapyStore)}
            />
            {/* <Divider style={$divider(list.therapyLength === 0)} /> */}
            <Button
                title="Pridať"
                style={$button}
                onPress={() => {
                    handleButtonPress();
                }}
            />
        </View>
    );
});

export const SectionScreen: FC<FormTabScreenProps<'FormSection'>> = observer(
    function SectionScreen() {
        const {
            rootStore: { sectionStore },
            screensStore: table,
        } = useStores();

        return (
            <Screen styleContent={$screen}>
                <View style={$table}>
                    <View style={$labelContainer}>
                        <Text style={$label}>{'Výkony'}</Text>
                    </View>
                    <SingleCheckbox
                        state={sectionStore['mainServices'].sine}
                        onPress={sectionStore['mainServices'].updateSine}
                        style={{
                            // alignSelf: 'stretch',
                            justifyContent: 'space-between',
                            // alignItems: 'center',
                            height: 55,
                            paddingHorizontal: 20,
                            paddingVertical: 3,
                            borderBottomWidth: 1,
                            borderBottomColor: '#000',
                        }}
                        styleText={{
                            fontSize: 25,
                        }}
                        title={'Sine'}
                        side={'left'}
                    />
                    <CheckboxList<SectionStore['mainServices']>
                        source={sectionStore['mainServices']}
                        data="airways"
                        options="SectionScreen.airways"
                        style={{ backgroundColor: colors.blue, borderRadius: 0 }}
                    />
                    <Divider />
                    <CheckboxList<SectionStore['mainServices']>
                        source={sectionStore['mainServices']}
                        data="breathing"
                        options="SectionScreen.breathing"
                        leftSubTitle="P"
                        rightSubTitle="L"
                        style={{ backgroundColor: colors.blue, borderRadius: 0 }}
                    />
                    <Divider />
                    <CheckboxList<SectionStore['mainServices']>
                        source={sectionStore['mainServices']}
                        data="circulation"
                        options="SectionScreen.circulation"
                        style={$last}
                    />
                </View>
                <CheckboxList<SectionStore>
                    source={sectionStore}
                    data="otherServices"
                    options="SectionScreen.otherServices"
                    style={$perfomance}
                />
                <TherapyTable table={table.therapy} list={sectionStore} />
                <View style={$table}>
                    <View style={$labelContainer}>
                        <Text style={$label}>{'Diagnóza'}</Text>
                    </View>
                    <TableRow
                        style={$firstTableRow}
                        title={'Dg1:'}
                        value={sectionStore.diagnosis.dg1}
                        onChangeText={text => sectionStore.diagnosis.updateDg1(text)}
                    />
                    <TableRow
                        title={'Dg2:'}
                        value={sectionStore.diagnosis.dg2}
                        onChangeText={text => sectionStore.diagnosis.updateDg2(text)}
                    />
                    <TableRow
                        multiline
                        style={$lastTableRow}
                        numberOfLines={3}
                        title={'Popis:'}
                        value={sectionStore.diagnosis.description}
                        onChangeText={text => sectionStore.diagnosis.updateDescription(text)}
                    />
                </View>
            </Screen>
        );
    },
);

const $screen: ViewStyle = {
    paddingTop: '3%',
};

const $table: ViewStyle = {
    backgroundColor: '#fff',
    // padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
};

const $last: ViewStyle = {
    backgroundColor: colors.pink,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginBottom: 0,
};

const $pink: ViewStyle = {
    backgroundColor: colors.pink,
};

const $perfomance: ViewStyle = {
    borderWidth: 1,
};

const $firstTableRow: ViewStyle = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
};
const $lastTableRow: ViewStyle = {
    alignItems: 'center',
    borderBottomWidth: 0,
};

const $labelContainer: ViewStyle = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3%',
    backgroundColor: colors.grey,
};

const $label: TextStyle = {
    color: '#000',
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '500',
    // textTransform: 'uppercase',
};

const $button: ViewStyle = {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
};

const $grey: ViewStyle = {
    backgroundColor: colors.grey,
};
