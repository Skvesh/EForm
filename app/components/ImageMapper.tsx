import React, { Component, useEffect } from 'react';
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Image,
    Animated,
    ImageSourcePropType,
    ViewStyle,
    ImageStyle,
} from 'react-native';
import { Images, imageSelect } from '../utils/images';
import { Area, BACK_MAP, FRONT_MAP } from '../utils/constants';
import { MapperStore } from '../models/MapperStore';
import { mapSide } from '../types/common';
import { getRandomColor } from '../utils/common';
import { observer } from 'mobx-react-lite';

interface ImageMapperProps {
    imgHeight: number;
    imgWidth: number;
    imgSource: ImageSourcePropType;
    imgMap: Area[];
    store: MapperStore;
    onPress: (id: string, name: string) => void;
    side: mapSide;
}

const ImageMapper = observer(function ImageMapper(props: ImageMapperProps) {
    return (
        <Animated.View style={$container}>
            <ImageBackground
                style={{ height: props.imgHeight, width: props.imgWidth }}
                source={props.imgSource}
            >
                {props.imgMap.map((item: Area) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => props.onPress(item.id, item.name)}
                        style={[
                            !props.store.isSelected(item.id, props.side) && buildStyle(item),
                            $area,
                        ]}
                    >
                        {props.store.isSelected(item.id, props.side) && (
                            <Image
                                style={[buildStyle(item), $image]}
                                source={imageSelect(
                                    'vectors',
                                    props.store.findById(item.id, props.side).woundType,
                                )}
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </ImageBackground>
        </Animated.View>
    );
});

function buildStyle(area: Area) {
    const style: ImageStyle = {
        // backgroundColor: getRandomColor('rgb'),
        width: 0,
        height: 0,
        left: area.x1,
        top: area.y1,
    };

    if (area.shape === 'rectangle') {
        style.width = area.width ? area.width : area.x2 - area.x1;
        style.height = area.height ? area.height : area.y2 - area.y1;
    }

    if (area.shape === 'circle') {
        style.width = area.radius;
        style.height = area.radius;
        style.borderRadius = area.radius / 2;
    }

    return style;
}

const $container: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
};

const $area: ViewStyle = {
    position: 'absolute',
};

const $image: ImageStyle = {
    resizeMode: 'contain',
};

export default ImageMapper;
