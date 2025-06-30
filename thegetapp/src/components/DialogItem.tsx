import React from "react";
import { Avatar } from "@heroui/react";

type DialogItemProps = {
  name: string;
  lastMessage: string;
  avatarSrc: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const DialogItem: React.FC<DialogItemProps> = ({ avatarSrc,
                                                 name,
                                                 lastMessage,  
                                                 isSelected = false,
                                                 onClick }) => {
  return (
   <div
  onClick={onClick}
  className={`
    group flex items-center rounded-none w-full cursor-pointer transition-colors 
    ${isSelected ? "bg-blue-500" : "bg-white"}
    hover:bg-blue-500
  `}
>
  <Avatar className="h-11 w-11 m-[5px]" src={avatarSrc} />
  <div className="flex flex-col pl-4 pb-2">
    <p className={`text-md font-semibold transition-colors ${isSelected ? "text-white" : "text-black"} group-hover:text-white`}>
      {name}
    </p>
    {lastMessage && (
      <p className={`text-sm transition-colors ${isSelected ? "text-white" : "text-gray-500"} group-hover:text-white`}>
        {lastMessage}
      </p>
    )}
  </div>
</div>

  );
};

export default DialogItem;
