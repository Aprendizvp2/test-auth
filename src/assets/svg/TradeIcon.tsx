import {appColors} from '@/theme/appColors';
import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface TradeIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const TradeIcon = ({
  width = 24,
  height = 24,
  color = appColors.BLACK,
}: TradeIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 2048 2048">
      <Path
        fill={color}
        d="M2048 384v640h-128V603l-768 768l-384-384l-675 674l-90-90l765-766l384 384l677-677h-421V384z"
      />
    </Svg>
  );
};
