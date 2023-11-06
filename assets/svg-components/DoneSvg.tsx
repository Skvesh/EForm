import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ISvgProps } from '../../app/types/svg.types';

const SvgComponent = (props: ISvgProps) => (
    <Svg
        width={props.style?.width || '100%'}
        height={props.style?.height || '100%'}
        viewBox="0 0 64 64"
        fill={props.fill || '#fc2b11'}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M32 6C17.641 6 6 17.641 6 32s11.641 26 26 26 26-11.641 26-26S46.359 6 32 6zm-2.919 36.748-10.409-9.253 2.657-2.99 7.591 6.747L44 21l3.414 3.414-18.333 18.334z" />
    </Svg>
);

export default SvgComponent;
