import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ISvgProps } from '../../app/types/svg.types';

const SvgComponent = (props: ISvgProps) => (
    <Svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="#fc2b11"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M10 2 9 3H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1h-4l-1-1h-4zM5 7v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7H5zm4 2c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1s-1-.4-1-1v-9c0-.6.4-1 1-1zm6 0c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1s-1-.4-1-1v-9c0-.6.4-1 1-1z" />
    </Svg>
);

export default SvgComponent;
