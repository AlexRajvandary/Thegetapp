import React from "react";
import DialogItem from "./DialogItem";

export type DialogData = {
  id: string;
  name: string;
  lastMessage: string;
  avatarSrc: string;
};

type DialogCollectionProps = {
  items: DialogData[];
   selectedId?: string;
  onSelect?: (id: string) => void;
};

export default function DialogCollection({ items, selectedId, onSelect }: DialogCollectionProps) {
     const [internalSelectedId, setInternalSelectedId] = React.useState<string | null>(null);
      const handleSelect = (id: string) => {
    onSelect?.(id);
    setInternalSelectedId(id);
  };

  const activeId = selectedId ?? internalSelectedId;
  return (
    <div className="max-h-[450px] overflow-y-auto space-y-1 hide-scrollbar">
      {items.map((item) => (
        <DialogItem
          key={item.id}
          name={item.name}
          lastMessage={item.lastMessage}
          avatarSrc={item.avatarSrc}
          isSelected={activeId === item.id}
          onClick={() => handleSelect(item.id)}
        />
      ))}
    </div>
  );
}
