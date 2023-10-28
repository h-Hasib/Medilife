import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgComponent: React.FC<SvgProps> = ({ width, height, color, ...rest }) => (
  <Svg width={width} height={height} viewBox="0 0 128.000000 128.000000">
    <Path
      d="M1025 1266c-16-8-172-157-346-333L362 615l-46-140c-54-164-56-181-20-197 22-10 46-5 172 36l147 48 323 321c226 226 325 332 333 356 16 47 6 136-17 168-38 50-70 67-137 70-39 2-73-2-92-11zm132-108c14-13 23-33 23-52 0-27-37-68-312-342L555 452l-76-25-77-25 25 77 25 76 312 313c337 338 340 340 393 290z"
      transform="matrix(.1 0 0 -.1 0 128)"
      fill={color || '#489FF6'}
    />
    <Path
      d="M64 1171c-67-41-64-12-64-579V78l39-39L78 0h463c443 0 465 1 496 20 60 36 63 51 63 338 0 276-1 282-50 282s-50-7-50-270c0-178-3-249-12-258-17-17-859-17-876 0s-17 949 0 966c9 9 89 12 300 12 277 0 289 1 309 21 21 21 19 56-5 71-6 4-148 8-316 8-283 0-307-1-336-19z"
      transform="matrix(.1 0 0 -.1 0 128)"
      fill={color || '#489FF6'}
    />
  </Svg>
);

export default SvgComponent;
