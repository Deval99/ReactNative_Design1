import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Nav_Selected_Box(props) {
  return (
    <Svg
      width={60}
      height={56}
      viewBox="0 0 60 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 18.198a10 10 0 018.039-9.806l40-8C54.227-.845 60 3.888 60 10.198v27.604a10 10 0 01-8.039 9.806l-40 8C5.773 56.845 0 52.112 0 45.802V18.198z"
        fill="url(#paint0_linear_1_2488)"
      />
      <Path
        d="M8.137 8.883l40-8C54.015-.293 59.5 4.203 59.5 10.198v27.604a9.5 9.5 0 01-7.637 9.316l-40 8C5.985 56.292.5 51.797.5 45.801V18.198a9.5 9.5 0 017.637-9.315z"
        stroke="url(#paint1_linear_1_2488)"
        strokeOpacity={0.6}
        style={{
          mixBlendMode: "overlay"
        }}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_2488"
          x1={3}
          y1={-2}
          x2={44.7906}
          y2={79.0429}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#34C8E8" />
          <Stop offset={1} stopColor="#4E4AF2" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_2488"
          x1={0}
          y1={-2}
          x2={34.0751}
          y2={70.2302}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Nav_Selected_Box
