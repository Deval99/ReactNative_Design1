import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
const Accessory_Box = (props) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      width={50}
      height={50}
      rx={10}
      fill="url(#paint0_linear_125_645)"
      fillOpacity={0.6}
    />
    <Rect
      x={0.5}
      y={0.5}
      width={49}
      height={49}
      rx={9.5}
      stroke="url(#paint1_linear_125_645)"
      strokeOpacity={0.2}
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <Path
      d="M15.3549 13.1442C18.2789 10.5058 28.4817 9.93611 32.6188 13.5341C35.7158 16.2274 36.4944 18.8368 36.6902 19.9786C36.7466 20.3076 36.4737 20.5773 36.1277 20.5741L27.113 20.4889C27.113 20.4889 25.5577 20.4889 24.5312 21.3595C23.7764 21.9997 23.0552 23.044 22.7264 23.5519C22.6085 23.7341 22.4031 23.8481 22.1804 23.8481H12.9092C12.5611 23.8481 12.2824 23.5765 12.3003 23.2414C12.4037 21.3164 12.9171 15.3441 15.3549 13.1442Z"
      fill="white"
      fillOpacity={0.6}
    />
    <Path
      d="M26.4042 23.3246C26.2212 23.4608 25.9825 23.706 25.5697 24.2014C24.6792 25.2702 23.8795 25.9198 22.6274 26.2118C21.5644 26.4596 20.1931 26.4357 18.261 26.4021H18.2606L17.9512 26.3967C16.3796 26.3699 14.8788 26.3699 13.7703 26.3766C13.4693 26.3784 13.1974 26.3807 12.9611 26.3831C12.7624 26.3851 12.5887 26.3873 12.4441 26.3892C12.2858 26.3913 12.1623 26.3932 12.0784 26.3945L11.9591 26.3965L11.9532 26.3967L11.9518 26.3967H11.9514C11.4361 26.4064 11.0102 26.0116 11.0002 25.5149C10.9901 25.0182 11.3997 24.6078 11.915 24.5981L11.9157 24.598L12 24.5966L12.0471 24.5958C12.1327 24.5944 12.2582 24.5925 12.4185 24.5904C12.7391 24.5861 13.1993 24.5811 13.7585 24.5777C14.8765 24.5709 16.3931 24.5709 17.9842 24.598C20.2113 24.636 21.3635 24.6556 22.1886 24.4632C22.8806 24.3019 23.3563 23.985 24.1145 23.075C24.5261 22.581 24.8863 22.1816 25.2632 21.9009C25.6857 21.5863 26.1071 21.4349 26.5955 21.3774C26.9633 21.3341 27.3929 21.3445 27.8504 21.3556H27.8513C27.9163 21.3572 27.9819 21.3588 28.0479 21.3602C28.6113 21.3726 29.3276 21.3816 30.2973 21.3308L30.3278 21.3292L30.3583 21.3296C31.9972 21.3471 33.6719 21.3471 34.9379 21.3427C35.1754 21.3419 35.3984 21.3409 35.604 21.3399C35.9463 21.3381 36.2403 21.3362 36.4726 21.3345C36.6585 21.3331 36.8047 21.3319 36.9044 21.331L37.0473 21.3297L37.0545 21.3296L37.0563 21.3296H37.0568C37.5722 21.3243 37.9944 21.7227 37.9999 22.2194C38.0054 22.7161 37.5921 23.1231 37.0768 23.1284H37.0761L37.0741 23.1285L37.0666 23.1285L36.9217 23.1299C36.8211 23.1308 36.6738 23.132 36.4869 23.1334C36.288 23.1349 36.0443 23.1365 35.764 23.138C35.5173 23.1394 35.2423 23.1406 34.9447 23.1417C33.6816 23.1461 32.0097 23.1461 30.3678 23.1288C29.3468 23.1812 28.5872 23.1715 28.0054 23.1587C27.9408 23.1573 27.8795 23.1559 27.8213 23.1546C27.3207 23.1432 27.0443 23.1369 26.8217 23.1631C26.6413 23.1843 26.5417 23.2222 26.4042 23.3246Z"
      fill="white"
      fillOpacity={0.6}
    />
    <Path
      d="M20.2386 27.0863H18.3411C18.3411 27.0863 18.7455 30.5643 19.9897 31.8535C21.234 33.1428 23.6292 33.2927 23.6292 33.2927C23.6292 33.2927 24.3372 34.9538 24.9978 35.9012C25.6226 36.7971 26.8642 38 26.8642 38L28.0462 36.7107C28.0462 36.7107 27.035 35.7106 26.522 34.9717C26.0264 34.2579 25.4644 33.0229 25.4644 33.0229C25.4644 33.0229 26.8642 31.3138 27.4552 30.0546C28.0462 28.7953 29.3216 23.7582 29.3216 23.7582H27.4552C27.4552 23.7582 26.9895 26.3229 26.3665 27.8658C26.2589 28.1323 26.1534 28.4094 26.0478 28.6867C25.5557 29.9793 25.0617 31.2769 24.3446 31.5237C23.4736 31.8235 22.416 31.6137 21.234 30.3844C20.052 29.1551 20.2386 27.0863 20.2386 27.0863Z"
      fill="white"
      fillOpacity={0.6}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_125_645"
        x1={13.9394}
        y1={12.7514}
        x2={19.453}
        y2={37.4094}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#363E51" />
        <Stop offset={1} stopColor="#191E26" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_125_645"
        x1={5.30303}
        y1={1.36986}
        x2={34.7087}
        y2={22.4459}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Accessory_Box;