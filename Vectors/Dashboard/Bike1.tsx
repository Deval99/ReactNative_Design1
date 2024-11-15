import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function Bike1(props: any) {
  return (
    <Svg
      width={317}
      height={153}
      viewBox="0 0 317 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_1_2450)" d="M0 0H316.818V153H0z" />
      <Defs>
        <Pattern
          id="pattern0_1_2450"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1_2450"
            transform="matrix(.00049 0 0 .00101 0 -.535)"
          />
        </Pattern>
        <Image
          id="image0_1_2450"
          width={2048}
          height={2048}
        />
      </Defs>
    </Svg>
  );
}
export default Bike1;