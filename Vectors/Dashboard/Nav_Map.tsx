import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Nav_Map(props: any) {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.53 14.815l4.193 2.338c.21.115.386.203.606.255V2.81L8.251.349a2.792 2.792 0 00-.72-.326v14.792zM.736 15.993c0 .765.484 1.187 1.187 1.187.255 0 .518-.08.817-.238l3.498-1.898V.12c-.193.08-.422.176-.659.317L1.606 2.695c-.597.334-.87.809-.87 1.477v11.821zm12.876 1.371a.883.883 0 00.308-.14l4.447-2.514c.615-.343.897-.809.897-1.477V1.473c0-.8-.492-1.195-1.24-1.195-.272 0-.562.08-.87.246l-3.542 1.97v14.87z"
        fill="currentColor"
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default Nav_Map
