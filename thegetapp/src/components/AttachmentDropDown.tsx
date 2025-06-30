import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@heroui/react";
import AttachmentIcon from "./AttachmentIcon"; // проверь путь

const AttachmentDropdown: React.FC = () => {
  return (
    <Dropdown placement="top-start">
      <DropdownTrigger>
        <button className="pl-[10px] rounded-full focus:outline-none">
          <AttachmentIcon size={20} />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Attachment Options" variant="flat">
        <DropdownItem key="upload_file">Upload File</DropdownItem>
        <DropdownItem key="upload_image">Upload Image</DropdownItem>
        <DropdownItem key="choose_from_library">Choose from Library</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AttachmentDropdown;
