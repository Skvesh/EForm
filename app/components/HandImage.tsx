import { Pressable, Text, Image, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { Images, imageSelect } from '../utils/images';

interface HandImageProps {
    text: string;
    source: keyof (typeof Images)['hands'];
    onPress: (source: string) => void;
    textStyle?: TextStyle;
    imageStyle?: ImageStyle;
    style?: ViewStyle;
}

function HandImage({ text, source, onPress, textStyle, imageStyle, style }: HandImageProps) {
    return (
        <Pressable onPress={() => onPress(source)} style={[$container, style]}>
            <Text style={[$text, textStyle]}>{text}</Text>
            <Image style={[$image, imageStyle]} source={imageSelect('hands', source)} />
        </Pressable>
    );
}

export default HandImage;

const $container: ViewStyle = {
    // alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
};

const $image: ImageStyle = {
    width: 150,
    height: 55,
    resizeMode: 'contain',
};

const $text: TextStyle = {
    width: 120,
    marginRight: 10,
    textAlign: 'left',
    fontSize: 20,
};
