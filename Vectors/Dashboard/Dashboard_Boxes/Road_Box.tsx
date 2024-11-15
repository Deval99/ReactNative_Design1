import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
const Road_Box = (props) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={50} height={50} rx={10} fill="url(#paint0_linear_125_632)" />
    <Rect
      x={0.5}
      y={0.5}
      width={49}
      height={49}
      rx={9.5}
      stroke="url(#paint1_linear_125_632)"
      strokeOpacity={0.2}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 25C40 33.2843 33.2843 40 25 40C16.7157 40 10 33.2843 10 25C10 16.7157 16.7157 10 25 10C33.2843 10 40 16.7157 40 25ZM14.9678 31.5869L19.7734 23.0028H29.8867L34.7491 31.9983C36.1657 30.0284 37 27.6116 37 25C37 18.3726 31.6274 13 25 13C18.3726 13 13 18.3726 13 25C13 27.4325 13.7238 29.696 14.9678 31.5869Z"
      fill="white"
      fillOpacity={0.6}
    />
    <Path
      d="M24.6176 23.0029H25.4675L25.595 24.1927H24.4901L24.6176 23.0029Z"
      fill="black"
    />
    <Path
      d="M24.4477 25.6372H25.6375L25.765 26.912H24.2777L24.4477 25.6372Z"
      fill="black"
    />
    <Path
      d="M24.1079 29.1219H25.9775L26.19 31.4165H23.7679L24.1079 29.1219Z"
      fill="black"
    />
    <Path
      d="M23.7675 34.3909H26.3171L26.572 37.1954H23.4701L23.7675 34.3909Z"
      fill="black"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_125_632"
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
        id="paint1_linear_125_632"
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
export default Road_Box;
