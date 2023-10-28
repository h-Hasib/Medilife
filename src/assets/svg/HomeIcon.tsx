import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgComponent: React.FC<SvgProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 47 56" fill="none">
    <Path
      d="M13.057 46.244h22.114M45 21.262V52a2 2 0 01-2 2H4a2 2 0 01-2-2V21.297a2 2 0 01.681-1.504L22.757 2.19a2 2 0 012.68.038L44.36 19.797A2 2 0 0145 21.262z"
      stroke={color || '#489FF6'}
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgComponent;
