import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgComponent: React.FC<SvgProps> = ({ width, height, color, ...rest }) => (
  <Svg width={width} height={height} viewBox="0 0 59 58" fill="none">
    <Circle cx={29.6} cy={29.1999} r={27.3} stroke={color || '#489FF6'} strokeWidth={3} />
    <Circle cx={29.6001} cy={24.3999} r={10.5} stroke={color || '#489FF6'} strokeWidth={3} />
    <Path
      d="M12.8 49.6c1.2-4.8 6.197-13.2 16.8-13.2 10.8 0 14.4 8.8 15.6 13.2"
      stroke={color || '#489FF6'}
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgComponent;
