import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgComponent: React.FC<SvgProps> = ({ width, height, color, ...rest }) => (
  <Svg width={width} height={height} viewBox="0 0 59 57" fill="none">
    <Path
      d="M33.6 55.2H7.2c-7.06 0-4.89-6.923-4.803-7.192l.008-.02C5.61 39.185 16.81 22.803 39.6 30"
      stroke={color || '#489FF6'}
      strokeWidth={3}
      strokeLinecap="round"
    />
    <Circle cx={28.8001} cy={14.4} r={12.9} stroke={color || '#489FF6'} strokeWidth={3} />
    <Path
      d="M38.4 45.6h18.28M48 36v18.28"
      stroke={color || '#489FF6'}
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgComponent;
