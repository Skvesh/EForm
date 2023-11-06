import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ISvgProps } from '../../app/types/svg.types';

const SvgComponent = (props: ISvgProps) => (
    <Svg
        width="100%"
        height="100%"
        viewBox="0 100 1000 1000"
        fill="#fc2b11"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M452 854h60V653l82 82 42-42-156-152-154 154 42 42 84-84v201ZM220 976q-24 0-42-18t-18-42V236q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554V236H220v680h520V422H551ZM220 236v186-186 680-680Z" />
    </Svg>
);

export default SvgComponent;
