import React from "react";

type HeartIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
  isFilled?: boolean;
  filledColor?: string;
  strokeColor?: string;
};

export const HeartIcon: React.FC<HeartIconProps> = ({
  size = 25,
  width,
  height,
  strokeWidth = 1.5,
  isFilled = false,
  filledColor = "red",
  strokeColor = "grey",
}) => {
  return (

    

    <svg xmlns="http://www.w3.org/2000/svg"
        width={size ?? width}
          height={size ?? height}
         viewBox="0 0 24 24" 
        fill={isFilled ? filledColor : "none"}
         stroke={strokeColor}
         strokeWidth={strokeWidth}
         stroke-linecap="round" 
         stroke-linejoin="round" 
         >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  );
};
