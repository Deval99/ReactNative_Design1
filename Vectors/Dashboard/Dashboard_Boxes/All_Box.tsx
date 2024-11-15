import * as React from 'react';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
const All_Box = (props: any) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={50} height={50} rx={10} fill="#353F54" />
    <Rect
      x={0.5}
      y={0.5}
      width={49}
      height={49}
      rx={9.5}
      stroke="url(#paint0_linear_125_624)"
      strokeOpacity={0.2}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_125_624"
        x1={5.60606}
        y1={1.86722}
        x2={34.8664}
        y2={30.5229}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={0.844522} />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default All_Box;
