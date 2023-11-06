import React, { FC, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { Button, Error, Screen, TableList, TableRow } from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { useStores } from '../models/helpers/useStores';
import { TableStore, TimeModel, TimeStore, UpvModel, UpvStore } from '../models/TableStore';
import { block, colors } from '../theme';
import { Divider } from '../components/Divider';
import { v4 as uuidv4, validate } from 'uuid';
import { isEmpty } from '../utils/validations';

const TimeTable = observer(function TimeTable({
    table,
    list,
}: {
    table: TimeStore;
    list: TableStore;
}) {
    // const [timeTable, setTimeTable] = useState<TimeStore>(table);
    const [validated, setValidated] = useState<boolean>(true);

    const handleButtonPress = () => {
        if (isEmpty(table.time)) {
            setValidated(false);
        } else {
            if (list.timesLength < 10) {
                setValidated(true);
                const timeTable = TimeModel.create({
                    id: uuidv4(),
                    time: table.time,
                    systolicPressure: table.systolicPressure,
                    diastolicPressure: table.diastolicPressure,
                    sf: table.sf,
                    df: table.df,
                    do: table.do,
                    oxygenSaturation: table.oxygenSaturation,
                    glycemia: table.glycemia,
                    tt: table.tt,
                    gcs: table.gcs,
                });
                list.addTime(timeTable);
                table.reset();
            }
        }
    };

    return (
        <View style={[$table, $timeTable]}>
            {!validated && <Error text={'Pole je povinné'} />}
            <TableRow
                style={$firstTableRow(validated)}
                title={'Čas'}
                value={table.time}
                onChangeText={time => table.updateTime(time)}
            />
            <TableRow
                style={$pink}
                title={'Systl. TK'}
                subTitle="Torr"
                value={table.systolicPressure}
                onChangeText={systolicPressure => table.updateSystolicPressure(systolicPressure)}
            />
            <TableRow
                style={$pink}
                title={'Diast. TK'}
                subTitle="Torr"
                value={table.diastolicPressure}
                onChangeText={diastolicPressure => table.updateDistolicPressure(diastolicPressure)}
            />
            <TableRow
                style={$pink}
                title="SF (HR)"
                subTitle="min⁻¹"
                value={table.sf}
                onChangeText={sf => table.updateSf(sf)}
            />
            <TableRow
                style={$blue}
                title="DF (RR)"
                subTitle="min⁻¹"
                value={table.df}
                onChangeText={df => table.updateDf(df)}
            />
            <TableRow
                style={$blue}
                title={'DO (TV)'}
                subTitle="ml"
                value={table.do}
                onChangeText={newDo => table.updateDo(newDo)}
            />
            <TableRow
                style={$blue}
                title={'O₂ saturacia'}
                subTitle="%"
                value={table.oxygenSaturation}
                onChangeText={oxygenSaturation => table.updateOxygenSaturation(oxygenSaturation)}
            />
            <TableRow
                title={'Glyk.'}
                subTitle="mmol/l"
                value={table.glycemia}
                onChangeText={glycemia => table.updateGlycemia(glycemia)}
            />
            <TableRow
                title={'TT'}
                subTitle="°C"
                value={table.tt}
                onChangeText={tt => table.updateTt(tt)}
            />
            <TableRow
                style={$grey}
                title={'GCS'}
                value={table.gcs}
                onChangeText={gcs => table.updateGcs(gcs)}
                // style={$lastTableRow}
            />
            {/* <TableRow title={'TS'} value={table.ts}/> */}
            <TableList<TableStore>
                data={list}
                listTitle="times"
                itemTitle="time"
                // onItemPress={item =>
                //     setTimeTable((oldTimeTable: TimeStore) => ({
                //         oldTimeTable,
                //         ...(item as TimeStore),
                //     }))
                // }
                onItemLongPress={item => list.removeTime(item as TimeStore)}
            />
            {/* <Divider style={$divider(list.timesLength === 0)} /> */}
            <Button
                title="Pridať"
                onPress={() => handleButtonPress()}
                style={$button}
                activeOpacity={0.5}
            />
        </View>
    );
});

const UpvTable = observer(function UpvTable({
    table,
    list,
}: {
    table: UpvStore;
    list: TableStore;
}) {
    // const [upvTable, setUpvTable] = useState<UpvStore>(table);
    const [validated, setValidated] = useState<boolean>(true);

    const handleButtonPress = () => {
        if (isEmpty(table.upv)) {
            setValidated(false);
        } else {
            if (list.upvesLength < 10) {
                setValidated(true);
                const upvTable = UpvModel.create({
                    id: uuidv4(),
                    upv: table.upv,
                    massage: table.massage,
                    defibrillation: table.defibrillation,
                    pacemaker: table.pacemaker,
                    transport: table.transport,
                });
                list.addUpv(upvTable);
                table.reset();
            }
        }
    };

    return (
        <View style={$table}>
            {!validated && <Error text={'Pole je povinné'} style={{ ...$error, ...$blue }} />}
            <TableRow
                style={[$firstTableRow(validated), $blue]}
                title={'UPV'}
                value={table.upv}
                onChangeText={upv => table.updateUpv(upv)}
            />
            <TableRow
                style={$pink}
                title={'Masáž'}
                value={table.massage}
                onChangeText={massage => table.updateMassage(massage)}
            />
            <TableRow
                style={$pink}
                title={'Defibrilácia'}
                value={table.defibrillation}
                onChangeText={defibrillation => table.updateDefibrillation(defibrillation)}
            />
            <TableRow
                style={$pink}
                title={'Pace-maker'}
                value={table.pacemaker}
                onChangeText={pacemaker => table.updatePacemaker(pacemaker)}
            />
            <TableRow
                title={'Transport'}
                value={table.transport}
                onChangeText={transport => table.updateTransport(transport)}
            />
            <TableList
                data={list}
                listTitle="upves"
                itemTitle="upv"
                // onItemPress={item =>
                //     setUpvTable((oldUpvTable: UpvStore) => ({
                //         oldUpvTable,
                //         ...(item as UpvStore),
                //     }))
                // }
                onItemLongPress={item => list.removeUpv(item as UpvStore)}
            />
            {/* <Divider style={$divider(list.upvesLength === 0)} /> */}
            <Button
                title="Pridať"
                onPress={() => {
                    handleButtonPress();
                }}
                style={$button}
                activeOpacity={0.5}
            />
        </View>
    );
});

export const TableScreen: FC<FormTabScreenProps<'FormTable'>> = observer(function SessionScreen() {
    const {
        rootStore: { tableStore: list },
        screensStore: table,
    } = useStores();

    return (
        <Screen styleContent={$screen}>
            <TimeTable table={table.time} list={list} />
            <UpvTable table={table.upv} list={list} />
        </Screen>
    );
});

const $screen: ViewStyle = {
    paddingTop: '3%',
};

const $table: ViewStyle = {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
};

const $timeTable: ViewStyle = {
    marginBottom: 30,
};

const $firstTableRow = (isEmpty: boolean): ViewStyle => {
    return isEmpty
        ? {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
          }
        : {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
          };
};

// const $divider = (isEmpty: boolean): ViewStyle => {
//     return isEmpty ? { marginVertical: 10 } : { marginBottom: 10 };
// };

const $button: ViewStyle = {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
};

const $pink: ViewStyle = {
    backgroundColor: colors.pink,
};

const $blue: ViewStyle = {
    backgroundColor: colors.blue,
};

const $grey: ViewStyle = {
    backgroundColor: colors.grey,
};

const $error: ViewStyle = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
};
export { TableList };
