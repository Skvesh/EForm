import 'react-native-svg';
import { SvgProps } from 'react-native-svg';
import { ImageStyle } from 'react-native/types';

export interface ISvgProps extends SvgProps {
    style?: ImageStyle;
    xmlns?: string;
    xmlnsXlink?: string;
    xmlSpace?: string;
}
