import {Tab, Tabs} from '@heroui/react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import DialogCollection from "../components/DialogCollection";
import type { DialogData } from "../components/DialogCollection";
import '../App.css';
import ActiveDialog from '../components/ActiveDialog';
import type { Message } from '../components/ActiveDialog';
import React from "react";

const now = Date.now();

const generateMessages = (
  count: number,
  sender: "me" | "other",
  baseTime: number,
  label: string
): Message[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${label}-${i + 1}`,
    text: `${label} message ${i + 1}`,
    sender,
    createdAt: new Date(baseTime + i * 60_000).toISOString(), // по 1 минуте между
  }));
};

const sampleMessages: Message[] = [
  // Сегодня (0 дней назад)
  ...generateMessages(10, "me", now - 0 * 24 * 60 * 60 * 1000, "Today"),

  // Вчера (1 день назад)
  ...generateMessages(10, "other", now - 1 * 24 * 60 * 60 * 1000, "Yesterday"),

  // Неделя (3–6 дней назад)
  ...generateMessages(4, "me", now - 3 * 24 * 60 * 60 * 1000, "ThisWeek"),
  ...generateMessages(3, "other", now - 4 * 24 * 60 * 60 * 1000, "ThisWeek"),
  ...generateMessages(3, "me", now - 6 * 24 * 60 * 60 * 1000, "ThisWeek"),

  // В этом году (например, 30–80 дней назад)
  ...generateMessages(5, "me", now - 30 * 24 * 60 * 60 * 1000, "ThisYear"),
  ...generateMessages(5, "other", now - 80 * 24 * 60 * 60 * 1000, "ThisYear"),

  // Более года назад (например, 400–420 дней назад)
  ...generateMessages(5, "me", now - 400 * 24 * 60 * 60 * 1000, "LastYear"),
  ...generateMessages(5, "other", now - 420 * 24 * 60 * 60 * 1000, "LastYear"),
];
const dialogs: DialogData[] = [
  { id: "1", name: "Nina", lastMessage: "Are we still on?", avatarSrc: "https://i.pravatar.cc/150?u=101" },
  { id: "2", name: "Omar", lastMessage: "Sent the invoice", avatarSrc: "https://i.pravatar.cc/150?u=102" },
  { id: "3", name: "Lena", lastMessage: "Check this out 👉", avatarSrc: "https://i.pravatar.cc/150?u=103" },
  { id: "4", name: "Jasper", lastMessage: "Will be late", avatarSrc: "https://i.pravatar.cc/150?u=104" },
  { id: "5", name: "Mila", lastMessage: "All good on my side", avatarSrc: "https://i.pravatar.cc/150?u=105" },
  { id: "6", name: "Kai", lastMessage: "Let's reschedule", avatarSrc: "https://i.pravatar.cc/150?u=106" },
  { id: "7", name: "Rosa", lastMessage: "Thanks 🙏", avatarSrc: "https://i.pravatar.cc/150?u=107" },
  { id: "8", name: "Victor", lastMessage: "Documents uploaded", avatarSrc: "https://i.pravatar.cc/150?u=108" },
  { id: "9", name: "Isla", lastMessage: "Call me when free", avatarSrc: "https://i.pravatar.cc/150?u=109" },
];

export default function Messenger() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const selectedDialog = dialogs.find((dialog) => dialog.id === selectedId);

  return (
    <>
      <Header />
      <div className="mx-[160px] my-6">
        <div className="flex shadow-lg border overflow-hidden">
          {/* Левая колонка — 30% */}
          <div className="w-[30%] bg-white min-h-[calc(100vh-160px)] border-r">
            <div className="font-medium text-lg p-4 pb-[15px]">Chats</div>
            
            <div className='px-4'><SearchInput/></div>
            <div className="flex flex-col items-center pt-[15px] w-full">
              <Tabs aria-label="Options" radius='none' className="w-full justify-center" classNames={{panel:"py-0"}}>
    <Tab key="Sellers" title="Sellers" className="w-full">
        <DialogCollection items={dialogs} 
                          selectedId={selectedId ?? undefined}
                          onSelect={setSelectedId}/>
    </Tab>
    <Tab key="Buyers" title="Buyers" className="w-full">
          <DialogCollection items={dialogs} 
                          selectedId={selectedId ?? undefined}
                          onSelect={setSelectedId}/>
    </Tab>
              </Tabs>
            </div>
          </div>

          {/* Правая колонка — 70% */}
<div className="flex flex-col w-[70%] h-[calc(100vh-160px)] bg-gray-100">
  {selectedDialog ? (
          <ActiveDialog
            name={selectedDialog.name}
            avatarSrc={selectedDialog.avatarSrc}
            isOnline={true} // или по-своему
            messages={sampleMessages}
          />
        ) : (
         <div className="flex items-center justify-center h-full text-gray-500">
  <div className="max-w-md px-4 text-justify">
    Please be respectful, kind, and considerate. Treat others as you’d like to be treated.  
    No spam, hate speech, or inappropriate content.  
    Let’s keep the conversation helpful and friendly!
  </div>
</div>

        )}

</div>


      </div>
      </div>
    </>
  );
}
