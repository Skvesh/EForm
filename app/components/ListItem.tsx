import React from 'react';
import {
    View,
    Text,
    ViewStyle,
    TouchableOpacityProps,
    TouchableOpacity,
    TextProps,
    TextStyle,
    Image,
    ImageStyle,
} from 'react-native';
import DoneSvg from '../../assets/svg-components/DoneSvg';
import { colors } from '../theme';
import UploadSvg from '../../assets/svg-components/UploadSvg';
import TrashSvg from '../../assets/svg-components/TrashSvg';

interface ListItemProps extends TouchableOpacityProps {
    status?: boolean;
    text: string;
    textStyle?: TextProps;
    removeItem: () => void;
    downloadItem: () => void;
    openItem: () => void;
}

export function ListItem(props: ListItemProps) {
    return (
        <View style={$item}>
            <View style={$status}>
                {/* {props.status ? (
                    <DoneSvg style={$icon} />
                ) : (
                    <Image style={$icon} source={require('../../assets/InProgress.png')} />
                )} */}
                <TouchableOpacity style={$icon} onPress={props.downloadItem}>
                    <UploadSvg />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={props.openItem}>
                <Text style={[{ ...props.textStyle }, $text]}>{props.text}</Text>
            </TouchableOpacity>
            <View style={$action}>
                {/* {props.status && (
                    <TouchableOpacity style={$icon}>
                        <UploadSvg />
                    </TouchableOpacity>
                )} */}
                <TouchableOpacity style={$icon} onPress={props.removeItem}>
                    <TrashSvg />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const $item: ViewStyle = {
    // padding: '4%',
    paddingVertical: '4%',
    paddingHorizontal: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FAF1ED',
};

const $status: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
};

const $icon: ImageStyle = {
    width: 30,
    height: 30,
};

const $text: TextStyle = {
    textAlign: 'center',
    color: colors.text,
    fontSize: 20,
};

const $action: ViewStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
};
