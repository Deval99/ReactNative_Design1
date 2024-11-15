import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ScrollElementSVG = (props: any) => (
  <Svg
    width={165}
    height={235}
    viewBox="0 0 165 235"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1_2357)">
      <Path
        d="M0 40.0953C0 30.2514 7.16305 21.8713 16.8869 20.339L141.887 0.642061C154.024 -1.27049 165 8.11117 165 20.3983V191.308C165 200.974 158.088 209.257 148.578 210.986L23.5777 233.713C11.3009 235.945 0 226.514 0 214.036V40.0953Z"
        fill="url(#paint0_linear_1_2357)"
        fillOpacity={0.6}
      />
      <Path
        d="M0 40.0953C0 30.2514 7.16305 21.8713 16.8869 20.339L141.887 0.642061C154.024 -1.27049 165 8.11117 165 20.3983V191.308C165 200.974 158.088 209.257 148.578 210.986L23.5777 233.713C11.3009 235.945 0 226.514 0 214.036V40.0953Z"
        fill="url(#paint1_linear_1_2357)"
        fillOpacity={0.6}
      />
      <Path
        d="M17.0426 21.3268L142.043 1.62987C153.573 -0.187054 164 8.72552 164 20.3983V191.308C164 200.491 157.433 208.359 148.399 210.002L23.3988 232.729C11.7358 234.85 1 225.89 1 214.036V40.0953C1 30.7436 7.8049 22.7825 17.0426 21.3268Z"
        stroke="url(#paint2_linear_1_2357)"
        strokeOpacity={0.2}
        strokeWidth={2}
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_2357"
        x1={46}
        y1={58.4617}
        x2={82.8287}
        y2={171.228}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#363E51" />
        <Stop offset={1} stopColor="#191E26" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_2357"
        x1={46}
        y1={58.4617}
        x2={82.8287}
        y2={171.228}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#363E51" />
        <Stop offset={1} stopColor="#191E26" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1_2357"
        x1={17.5}
        y1={3.60274}
        x2={135.882}
        y2={61.6941}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ScrollElementSVG;
