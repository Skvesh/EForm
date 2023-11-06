import React, { FC, useEffect, useState } from 'react';
import { View, Text, ViewStyle, TextStyle, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem } from '../components';
import { block, colors } from '../theme';
import { listFakeData } from '../utils/listFakeData';
import { Button } from '../components';
import { observer } from 'mobx-react-lite';
import { AppStackParamList, AppStackScreenProps } from '../types/navigator.types';
import { Divider } from '../components/Divider';
import LogoSvg from '../../assets/svg-components/LogoSvg';
import RNFS from 'react-native-fs';
import fs from '../utils/fs';
import { FILE_PATH } from '../utils/constants';
import { RootStore, ScreensStore } from '../models';
import { applySnapshot } from 'mobx-state-tree';
import { useStores } from '../models/helpers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

function List({
    listData,
    rootStore,
    screensStore,
    navigation,
}: {
    listData: string[];
    rootStore: RootStore;
    navigation: NativeStackNavigationProp<AppStackParamList, 'Home', undefined>;
    screensStore: ScreensStore;
}) {
    return (
        <View style={$list}>
            <View style={$listHeader}>
                <Text style={$listText}>Sťahnuť</Text>
                <View style={$absoluteView}>
                    <Text style={$listText}>Výbrať</Text>
                </View>
                <Text style={$listText}>Vymazať</Text>
            </View>
            {listData.length === 0 ? (
                <View style={$epmtyList}>
                    <Text style={$epmtyListText}>Zoznam súborov je prázdny</Text>
                </View>
            ) : (
                <FlatList
                    data={listData}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            removeItem={() => fs.deleteFile(`${FILE_PATH}/${item}.json`)}
                            downloadItem={() => {}}
                            openItem={async () => {
                                const restoredData = await fs.readJSONFile(
                                    `${FILE_PATH}/${item}.json`,
                                );
                                applySnapshot(rootStore, restoredData);
                                navigation.navigate('Form', { screen: 'FormSession' });
                                screensStore.setRootStateToContinue();
                            }}
                        />
                    )}
                    keyExtractor={item => item}
                    initialNumToRender={3}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                        <View
                            style={{
                                // height: 10,
                                margin: '1.5%',
                            }}
                        />
                    )}
                />
            )}
        </View>
    );
}

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}
type buttonState = 'Výtvoriť' | 'Pokročovať';

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen(props) {
    const [listData, setListData] = useState<string[]>([]);
    const { navigation } = props;
    const { rootStore, screensStore } = useStores();

    useEffect(() => {
        (async () => {
            if (!(await RNFS.exists(FILE_PATH))) {
                await RNFS.mkdir(FILE_PATH);
                console.log('Folder created');
            }
            const fileNames = await fs.getListOfNames(FILE_PATH);
            const fileNamesWithoutType = fileNames.map(name => name.replace(/\.[^.]*$/, ''));
            setListData([...fileNamesWithoutType]);
        })();
    }, [listData]);

    async function createForm() {
        navigation.navigate('Form', { screen: 'FormSession' });
        screensStore.setRootStateToContinue();
    }

    return (
        <SafeAreaView style={$screen}>
            <View style={$container}>
                <View style={$svg}>
                    <LogoSvg />
                </View>
                <Text style={$title}>EForm</Text>
                <Divider />
                <List
                    listData={listData}
                    rootStore={rootStore}
                    screensStore={screensStore}
                    navigation={navigation}
                />
                <Divider style={$divider} />
                <Button title={screensStore.rootState} onPress={createForm} />
            </View>
        </SafeAreaView>
    );
});

const $screen: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
};

const $container: ViewStyle = {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '7%',
};

const $svg: ViewStyle = {
    flex: 1.5,
    ...block.alignCenter,
};

const $divider: ViewStyle = {
    marginBottom: 20,
};

const $list: ViewStyle = {
    flex: 2,
    marginBottom: 20,
};

const $listHeader: ViewStyle = {
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'relative',
};

const $absoluteView: ViewStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...block.alignCenter,
};

const $epmtyList: ViewStyle = {
    flex: 1,
    ...block.alignCenter,
};

const $title: TextStyle = {
    color: colors.titleLogo,
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
    padding: 5,
};

const $listText: TextStyle = {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
};

const $epmtyListText: TextStyle = {
    color: colors.black,
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
};
