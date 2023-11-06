import React, { FC, useRef, useState } from 'react';
import {
    View,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
    TouchableOpacity,
    Text,
    ImageStyle,
    Animated,
    GestureResponderEvent,
} from 'react-native';
import { CheckboxList, Screen } from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { Divider } from '../components/Divider';
import { useStores } from '../models/helpers';
// import store from '../rematch/store';
// import ImageModal from '../components/imageMapperScreen/ImageModal';
import { Images, imageSelect } from '../utils/images';
import { BACK_MAP, FRONT_MAP } from '../utils/constants';
import ImageMapper from '../components/ImageMapper';
import { PartOfBodyModel, PartOfBodySnapshot, PartOfBodyStore } from '../models/MapperStore';
import MapperModal from '../components/MapperModal';
import { mapAnimation } from '../utils/animations';
import { mapSide } from '../types/common';

export const MapperScreen: FC<FormTabScreenProps<'FormMapper'>> = observer(function MapperScreen() {
    const {
        rootStore: { mapperStore },
    } = useStores();
    // const initialSelectedAreaId = PartOfBodyModel.create({});
    const initialSelectedAreaId: PartOfBodySnapshot = {
        id: '',
        partOfBody: '',
        woundType: '',
        sine: false,
    };

    const [side, setSide] = useState<mapSide>('front');
    const [selectedArea, setSelectedArea] = useState<PartOfBodySnapshot>(initialSelectedAreaId);
    const [modalVisible, setModalVisible] = useState(false);

    const transform = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const { opacityBackAnimatedStyle, opacityFrontAnimatedStyle, transformAnimatedStyle } =
        mapAnimation(opacity, transform);

    const mapperAreaClickHandler = (id: string, name: string) => {
        if (mapperStore.isSelected(id, side)) {
            mapperStore.unSelectById(id, side);
        } else {
            setSelectedArea({
                ...selectedArea,
                id,
                partOfBody: name,
            });
            setModalVisible(true);
        }
    };

    const modalClickHandHandler = (wound: string) => {
        const partOfBody = PartOfBodyModel.create({ ...selectedArea, woundType: wound });

        mapperStore.select(partOfBody, side);
        setModalVisible(false);
    };

    const modalClickSineHandler = () => {
        setSelectedArea({
            ...selectedArea,
            sine: !selectedArea.sine,
        });
    };

    const flipAnimation = () => {
        if (side === 'front') {
            Animated.parallel([
                Animated.timing(transform, {
                    toValue: 180,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    useNativeDriver: true,
                }),
            ]).start(() => setSide('back'));
        } else {
            Animated.parallel([
                Animated.timing(transform, {
                    toValue: 0,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    useNativeDriver: true,
                }),
            ]).start(() => setSide('front'));
        }
    };

    return (
        <Screen styleContent={$screen}>
            <MapperModal
                isVisible={modalVisible}
                toggleModalVisibilty={(state: boolean) => setModalVisible(state)}
                onSinePress={modalClickSineHandler}
                onHandPress={modalClickHandHandler}
                area={selectedArea}
            />
            <TouchableOpacity onPress={flipAnimation} style={$flipImage}>
                <Animated.Image
                    style={[
                        $imagePosition,
                        opacityBackAnimatedStyle,
                        transformAnimatedStyle,
                        $imageSize,
                    ]}
                    source={require('../../assets/back-mini.png')}
                />
                <Animated.Image
                    style={[opacityFrontAnimatedStyle, transformAnimatedStyle, $imageSize]}
                    source={require('../../assets/front-mini.png')}
                />
            </TouchableOpacity>
            <ImageMapper
                imgHeight={650}
                imgWidth={300}
                imgSource={
                    side === 'front'
                        ? imageSelect('bigImages', 'front')
                        : imageSelect('bigImages', 'back')
                }
                imgMap={side === 'front' ? FRONT_MAP : BACK_MAP}
                onPress={(id: string, name: string) => mapperAreaClickHandler(id, name)}
                store={mapperStore}
                side={side}
            />
        </Screen>
    );
});

const $screen: ViewStyle = {
    paddingTop: '3%',
    backgroundColor: '#fff',
    flexGrow: 1,
};

const $imageSize: ImageStyle = {
    width: 50,
    height: 100,
    resizeMode: 'cover',
};

const $imagePosition: ImageStyle = {
    position: 'absolute',
    top: 3,
    left: 3,
};

const $flipImage: ImageStyle = {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 3,
    borderWidth: 0.5,
    borderColor: '#007aff',
    borderRadius: 10,
    zIndex: 1,
};
