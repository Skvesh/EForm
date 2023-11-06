import React, { FC, useState } from 'react';
import { View, ViewStyle, ScrollView, TextStyle, TextInput } from 'react-native';
import { SingleCheckbox, Screen, Button, Error } from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { Input } from '../components';
import { colors } from '../theme';
import { Divider } from '../components/Divider';
import { useStores } from '../models/helpers/useStores';
import RNFS from 'react-native-fs';
import * as storage from '../utils/storage';
import { isEmpty } from '../utils/validations';
import fs from '../utils/fs';
import { getSnapshot } from 'mobx-state-tree';
import { dismantleRootStore, dismantleScreensStore } from '../models/helpers';

export const LastScreen: FC<FormTabScreenProps<'FormLast'>> = observer(function LastScreen({
    navigation,
}) {
    const [fileName, setFileName] = useState('');
    const [errorText, setErrorText] = useState<'' | 'Pole je povinné' | 'Tento názov už existuje'>(
        '',
    );

    const {
        rootStore,
        screensStore,
        rootStore: { lastStore },
    } = useStores();

    const createFile = async () => {
        if (isEmpty(fileName)) {
            setErrorText('Pole je povinné');
        } else if (await RNFS.exists(`${RNFS.DocumentDirectoryPath}/${fileName}.json`)) {
            setErrorText('Tento názov už existuje');
        } else {
            setErrorText('');
            const snapshot = getSnapshot(rootStore);
            fs.writeJSONFile(fileName, snapshot);
            dismantleRootStore(rootStore);
            dismantleScreensStore(screensStore);
            navigation.navigate('Home');
            screensStore.setRootStateToContinue();
        }
    };

    return (
        <Screen>
            <Input
                style={$input}
                label="Poznámka"
                onChangeText={text => lastStore.updateNote(text)}
                value={lastStore.note}
            />
            <Divider />
            <Input
                style={$input}
                label="Trvanie výjazdu, min."
                value={lastStore.duration}
                onChangeText={text => lastStore.updateDuration(text)}
            />
            <Divider />
            <Input
                style={$input}
                label="Km, let. čas"
                value={lastStore.distance}
                onChangeText={text => lastStore.updateDistance(text)}
            />
            <Divider />
            <Input
                style={$input}
                label="NACA"
                value={lastStore.naca}
                onChangeText={text => lastStore.updateNaca(text)}
            />
            <Divider />
            <Input
                style={$input}
                label="Výkony"
                value={lastStore.services}
                onChangeText={text => lastStore.updateServices(text)}
            />
            <Divider style={$input} />
            <View style={$table}>
                {!isEmpty(errorText) && (
                    <Error text={errorText} style={$error} textStyle={$errorText} />
                )}
                <TextInput
                    maxLength={15}
                    placeholder="Napíšte názov súboru"
                    style={$textInput}
                    onChangeText={text => setFileName(text)}
                    value={fileName}
                    numberOfLines={1}
                    keyboardType="default"
                    caretHidden
                />
                <Button title={'Uložiť'} onPress={() => createFile()} style={$button} />
            </View>
        </Screen>
    );
});

const $input: ViewStyle = {
    marginBottom: 20,
};

const $table: ViewStyle = {
    backgroundColor: '#fff',
    // padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
};

const $error: ViewStyle = {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
};

const $errorText: TextStyle = {
    textAlign: 'center',
};

const $button: ViewStyle = {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
};

const $textInput: TextStyle = {
    textAlign: 'center',
    fontSize: 25,
    color: colors.text,
};
