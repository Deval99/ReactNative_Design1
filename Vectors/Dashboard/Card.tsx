import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop, Filter, FeGaussianBlur } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Card(props) {
  return (
    <Svg
      width={350}
      height={238}
      viewBox="0 0 350 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_120_622)">
        <Path
          d="M0 20C0 8.954 8.954 0 20 0h310c11.046 0 20 8.954 20 20v162.156c0 10.167-7.628 18.716-17.729 19.87l-310 35.429C10.403 238.811 0 229.529 0 217.584V20z"
          fill="url(#paint0_linear_120_622)"
          fillOpacity={0.6}
          />
        <Path
          // filter="url(#blur)"
          d="M20 1h310c10.493 0 19 8.507 19 19v162.156c0 9.658-7.246 17.78-16.843 18.877l-310 35.428C10.883 237.75 1 228.932 1 217.584V20C1 9.507 9.507 1 20 1z"
          stroke="url(#paint1_linear_120_622)"
          strokeOpacity={0.2}
          strokeWidth={2}
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_120_622"
          x1={126.212}
          y1={63.7344}
          x2={144.149}
          y2={211.851}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#353F54" />
          <Stop offset={1} stopColor="#222834" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_120_622"
          x1={39.2424}
          y1={8.96266}
          x2={171.249}
          y2={197.494}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={0.844522} />
          <Stop offset={1} />
        </LinearGradient>
        <Filter id="blur" x="0" y="0" width="150%" height="150%">
          <FeGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </Filter>
      </Defs>
    </Svg>
  )
}

export default Card
