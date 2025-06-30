import React from "react";

type Props = {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  isFilled?: boolean;
  filledColor?: string;
  strokeColor?: string;
} & React.SVGProps<SVGSVGElement>;

export const BookmarkIcon = ({
  size = 24,
  strokeWidth = 1.5,
  isFilled = false,
  filledColor = "black",
  strokeColor = "black",
  ...props
}: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? filledColor : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 3C5.44772 3 5 3.44772 5 4V21C5 21.5523 5.44772 22 6 22C6.24087 22 6.47257 21.9111 6.65 21.75L12 17L17.35 21.75C17.5274 21.9111 17.7591 22 18 22C18.5523 22 19 21.5523 19 21V4C19 3.44772 18.5523 3 18 3H6Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
