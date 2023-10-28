import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface SvgComponentProps extends SvgProps {
  width: number;
  height: number;
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox={'0 0 56 54'} fill="none">
    <Path
      d="M53.6 38V11.8a4 4 0 00-4-4H6a4 4 0 00-4 4v36.4a4 4 0 004 4h43.6a4 4 0 004-4v-3.6M12.8 1.8v12M27.2 1.8v12M41.6 1.8v12"
      stroke={color || '#489FF6'}
      strokeWidth={3}
      strokeLinecap="round"
    />
    <Path
      d="M16.377 30.53l6.49 9.144a1 1 0 001.538.112l15.762-16.462"
      stroke={color || '#489FF6'}
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgComponent;
