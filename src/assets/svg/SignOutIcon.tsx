import React from 'react';
import {appColors} from '@/theme/appColors';
import {Path, Svg} from 'react-native-svg';

interface SignOutIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const SignOutIcon = ({
  width = 24,
  height = 24,
  color = appColors.BLACK,
}: SignOutIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14">
      <Path
        fill={appColors.WHITE}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 10.5v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2M6.5 7h7m-2-2l2 2l-2 2"
      />
    </Svg>
  );
};
