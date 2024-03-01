import React from 'react';
import {appColors} from '@/theme/appColors';
import {Path, Svg} from 'react-native-svg';

interface NewspaperIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const NewspaperIcon = ({
  width = 24,
  height = 24,
  color = appColors.WHITE,
}: NewspaperIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20">
      <Path
        fill={color}
        d="M0 16c0 1.1.9 2 2 2h16.5c.8 0 1.5-.7 1.5-1.5v-10c0-.8-.7-1.5-1.5-1.5H18v10c0 .6-.4 1-1 1V4c0-1.1-.9-2-2-2H2C.9 2 0 2.9 0 4zM3 4h11v4H3zm0 6h4v5H3zm5 0h6v1H8zm0 2h6v1H8zm0 2h6v1H8z"
      />
    </Svg>
  );
};
