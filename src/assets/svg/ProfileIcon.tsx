import React from 'react';
import {appColors} from '@/theme/appColors';
import {Path, Svg} from 'react-native-svg';

interface ProfileIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ProfileIcon = ({
  width = 24,
  height = 24,
  color = appColors.WHITE,
}: ProfileIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M8 14.5a6.47 6.47 0 0 0 3.25-.87V11.5A2.25 2.25 0 0 0 9 9.25H7a2.25 2.25 0 0 0-2.25 2.25v2.13A6.47 6.47 0 0 0 8 14.5m4.75-3v.937a6.5 6.5 0 1 0-9.5 0V11.5a3.752 3.752 0 0 1 2.486-3.532a3 3 0 1 1 4.528 0A3.752 3.752 0 0 1 12.75 11.5M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M9.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};
