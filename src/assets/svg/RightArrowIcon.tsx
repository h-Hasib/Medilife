import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgComponent: React.FC<SvgProps> = ({ width, height, color, ...rest }) => (
  <Svg width={width} height={height} viewBox="0 0 29 24" fill="none">
    <Path
      d="M28.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L24.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h27v-3H0v3z"
      fill={color || '#489FF6'}
    />
  </Svg>
);

export default SvgComponent;
