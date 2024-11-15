import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
const Electric_Box = (props) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={50} height={50} rx={10} fill="url(#paint0_linear_125_628)" />
    <Rect
      x={0.5}
      y={0.5}
      width={49}
      height={49}
      rx={9.5}
      stroke="url(#paint1_linear_125_628)"
      strokeOpacity={0.2}
    />
    <Path
      d="M15.6893 35H34.9572C37.3867 35 38.6465 33.7402 38.6465 31.3444V20.5913C38.6465 18.1955 37.3867 16.947 34.9572 16.947H33.6074V15.5297C33.6074 14.5736 33.045 14 32.0889 14H28.9507C27.9834 14 27.4322 14.5736 27.4322 15.5297V16.947H23.1918V15.5297C23.1918 14.5736 22.6406 14 21.6733 14H18.5351C17.5678 14 17.0166 14.5736 17.0166 15.5297V16.947H15.6893C13.2598 16.947 12 18.1843 12 20.5913V31.3444C12 33.7515 13.2598 35 15.6893 35ZM21.6845 26.7102C21.6845 26.5865 21.7408 26.474 21.842 26.3615L26.4424 20.6251C26.8136 20.1527 27.4435 20.4788 27.2185 21.0525L25.7225 25.0455H28.5345C28.7595 25.0455 28.962 25.2255 28.962 25.4505C28.962 25.5742 28.9057 25.6979 28.7933 25.7991L24.2041 31.5356C23.8329 31.9968 23.203 31.6706 23.4167 31.0969L24.9239 27.1039H22.1119C21.8757 27.1039 21.6845 26.9352 21.6845 26.7102Z"
      fill="white"
      fillOpacity={0.6}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_125_628"
        x1={18.0303}
        y1={13.278}
        x2={23.3926}
        y2={43.6412}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#353F54" />
        <Stop offset={1} stopColor="#222834" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_125_628"
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
export default Electric_Box;
