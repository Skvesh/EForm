import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { ISvgProps } from '../../app/types/svg.types';

const VecrotSvg = (props: ISvgProps) => (
    <Svg
        width="100%"
        height="100%"
        viewBox="0 0 493 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0 70C0 31.34 31.34 0 70 0h353c38.66 0 70 31.34 70 70v267c0 38.66-31.34 70-70 70H70c-38.66 0-70-31.34-70-70V70Z"
            fill="#F74428"
        />
        <Path
            d="M93 160c0-55.228 44.772-100 100-100h107c55.228 0 100 44.772 100 100v84c0 55.228-44.772 100-100 100H193c-55.228 0-100-44.772-100-100v-84Z"
            fill="#FC2B11"
        />
        <Path
            d="M213 106.002V164a5 5 0 0 1-5 5h-57.998a5.002 5.002 0 0 0-5.002 5v56c0 2.761 2.237 5 4.998 5H208a5 5 0 0 1 5 5v57.998a5.002 5.002 0 0 0 5 5.002h56c2.761 0 5-2.237 5-4.998V240a5 5 0 0 1 5-5h57.998a5.002 5.002 0 0 0 5.002-5v-56c0-2.761-2.237-5-4.998-5H284a5 5 0 0 1-5-5v-57.998a5.002 5.002 0 0 0-5-5.002h-56c-2.761 0-5 2.24-5 5.002Z"
            fill="#fff"
        />
    </Svg>
);

export default VecrotSvg;
