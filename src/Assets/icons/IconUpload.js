import * as React from "react"

const IconUpload = (props) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>
        {
          "1.\u901A\u7528\u7EC4\u4EF6/2.Icon\u56FE\u6807/1.Outlined\u7EBF\u6027/Upload"
        }
      </title>
      <defs>
        <filter
          x="-5.2%"
          y="-22.3%"
          width="110.4%"
          height="151.8%"
          filterUnits="objectBoundingBox"
          id="prefix__a"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={3.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.737318841 0 0 0 0 0.737318841 0 0 0 0 0.737318841 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <rect id="prefix__b" x={130} y={660} width={278} height={56} rx={28} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-166 -679)">
          <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <use fill="#01A1F5" xlinkHref="#prefix__b" />
        </g>
        <path
          d="M6.375 4.446h1.732v7.929c0 .103.084.188.188.188H9.7a.188.188 0 00.187-.188V4.446h1.737c.157 0 .244-.18.148-.302L9.148.82a.187.187 0 00-.296 0L6.227 4.141a.188.188 0 00.148.305zm11.203 7.226h-1.406a.188.188 0 00-.188.187v3.61H2.016v-3.61a.188.188 0 00-.188-.187H.422a.188.188 0 00-.188.187V16.5c0 .415.336.75.75.75h16.032a.75.75 0 00.75-.75v-4.64a.188.188 0 00-.188-.188z"
          fill="#FFF"
        />
      </g>
    </svg>
  )
}

export default IconUpload;
