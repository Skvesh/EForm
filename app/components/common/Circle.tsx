import { TouchableOpacity, Text, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacityProps } from 'react-native/types';
import { block, colors } from '../../theme';

interface CircleProps extends TouchableOpacityProps {
    title: string;
}

export function Circle(props: CircleProps) {
    return (
        <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress} style={$circle}>
            <Text style={$circleText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const $circle: ViewStyle = {
    padding: 15,
    marginRight: block.marginRight,
    borderRadius: 100,
    backgroundColor: colors.titleLogo,
};

const $circleText: TextStyle = {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
};
