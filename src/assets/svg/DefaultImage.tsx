import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ ...rest }) {
  return (
    <Svg width={35} height={34} viewBox="0 0 35 34" fill="none" {...rest}>
      <Path
        d="M1.222 29.658C1.542 31.554 3.224 33 5.25 33h24.5c2.255 0 4.083-1.79 4.083-4v-7.62M1.222 29.658A3.947 3.947 0 011.167 29V5c0-2.21 1.828-4 4.083-4h24.5c2.255 0 4.083 1.79 4.083 4v16.38M1.222 29.658l7.8-7.641a4.15 4.15 0 014.954-.318l1.04.679a4.152 4.152 0 004.816-.205l5.406-4.237a4.152 4.152 0 014.763-.24c.162.103.307.23.443.364l3.39 3.32M15.457 11c0 2.21-1.828 4-4.083 4s-4.083-1.79-4.083-4 1.828-4 4.083-4 4.083 1.79 4.083 4z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
