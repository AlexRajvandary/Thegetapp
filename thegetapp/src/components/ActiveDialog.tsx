import { Avatar, Textarea } from "@heroui/react";
import AttachmentDropdown from "./AttachmentDropDown";
import Messages from "./Messages";

export type Message = {
  id: string;
  text: string;
  sender: "me" | "other";
  createdAt: string | Date;
};

export type ActiveDialogProps = {
  name: string;
  avatarSrc: string;
  isOnline?: boolean;
  messages: Message[];
};

export default function ActiveDialog({
  name,
  avatarSrc,
  isOnline = false,
  messages,
}: ActiveDialogProps) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="w-full flex items-start p-3 gap-4 bg-white border-b">
        <Avatar className="w-12 h-12" src={avatarSrc} />
        <div className="flex flex-col justify-center">
          <div className="text-medium font-medium">{name}</div>
          <div className={`text-sm ${isOnline ? "text-green-600" : "text-gray-500"}`}>
            {isOnline ? "Online" : "Offline"}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 hide-scrollbar">
        <Messages messages={messages} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 px-2 pb-1">
      
        <Textarea
            placeholder="Type your message..."
            startContent={<AttachmentDropdown />}
            minRows={1}
            maxRows={10}
            className="flex-1 px-1 rounded-xl"
            classNames={{base:"bg-white border border-gray-300", inputWrapper:"bg-white", input:"hide-scrollbar"}}
          />
      </div>
    </div>
  );
}
