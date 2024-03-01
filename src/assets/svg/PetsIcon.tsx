import {appColors} from '@/theme/appColors';
import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface PetsIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const PetsIcon = ({
  width = 24,
  height = 24,
  color = appColors.BLACK,
}: PetsIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M4.5 12.125q-1.05 0-1.775-.725T2 9.625q0-1.05.725-1.775T4.5 7.125q1.05 0 1.775.725T7 9.625q0 1.05-.725 1.775t-1.775.725m4.5-4q-1.05 0-1.775-.725T6.5 5.625q0-1.05.725-1.775T9 3.125q1.05 0 1.775.725t.725 1.775q0 1.05-.725 1.775T9 8.125m6 0q-1.05 0-1.775-.725T12.5 5.625q0-1.05.725-1.775T15 3.125q1.05 0 1.775.725t.725 1.775q0 1.05-.725 1.775T15 8.125m4.5 4q-1.05 0-1.775-.725T17 9.625q0-1.05.725-1.775t1.775-.725q1.05 0 1.775.725T22 9.625q0 1.05-.725 1.775t-1.775.725m-12.85 10q-1.125 0-1.888-.862T4 19.225q0-1.3.888-2.275t1.762-1.925q.725-.775 1.25-1.687t1.25-1.713q.55-.65 1.275-1.075T12 10.125q.85 0 1.575.4t1.275 1.05q.7.8 1.238 1.725t1.262 1.725q.875.95 1.762 1.925T20 19.225q0 1.175-.763 2.038t-1.887.862q-1.35 0-2.675-.225T12 21.675q-1.35 0-2.675.225t-2.675.225"
      />
    </Svg>
  );
};