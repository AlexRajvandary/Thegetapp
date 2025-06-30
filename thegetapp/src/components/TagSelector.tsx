import { useState } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Chip
} from "@heroui/react";

type Tag = { key: string; label: string };

const defaultTagOptions: Tag[] = [
  { key: "vintage", label: "Vintage" },
  { key: "streetwear", label: "Streetwear" },
  { key: "casual", label: "Casual" },
  { key: "formal", label: "Formal" },
];

type Props = {
  allowCustomTags?: boolean;
};

export default function TagSelector({ allowCustomTags = true }: Props) {
  const [availableTags, setAvailableTags] = useState<Tag[]>(defaultTagOptions);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState("");

  const normalizedInput = inputValue.trim().toLowerCase();

  const filteredTags = availableTags.filter(
    (tag) =>
      tag.label.toLowerCase().includes(normalizedInput) &&
      !selectedTags.find((t) => t.key === tag.key)
  );

  const showCustomOption =
    allowCustomTags &&
    normalizedInput &&
    !availableTags.some((t) => t.label.toLowerCase() === normalizedInput) &&
    !selectedTags.some((t) => t.label.toLowerCase() === normalizedInput);

  const customTagLabel = inputValue.trim();
  const customTagOption: Tag[] = showCustomOption
    ? [{ key: `__new__${customTagLabel}`, label: customTagLabel }]
    : [];

  const autocompleteOptions = [...filteredTags, ...customTagOption];

  const handleAddTag = (tag: Tag) => {
    if (!tag.label.trim()) return;

    if (selectedTags.find((t) => t.label.toLowerCase() === tag.label.toLowerCase())) return;

    setSelectedTags((prev) => [...prev, tag]);

    const exists = availableTags.find((t) => t.key === tag.key);
    if (!exists) setAvailableTags((prev) => [...prev, tag]);
  };

  const handleRemoveTag = (key: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.key !== key));
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <Chip
            key={tag.key}
            variant="solid"
            onClose={() => handleRemoveTag(tag.key)}
            radius="none"
          >
            {tag.label}
          </Chip>
        ))}
      </div>

      <Autocomplete
        aria-label="Add tags"
        className="w-full"
        placeholder="Add tags"
        description={
          allowCustomTags
              ? "Add tags to make your item more searchable"
              : "Specify your search by adding Tags"}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSelectionChange={(key) => {
          const selected = autocompleteOptions.find((item) => item.key === key);
          if (!selected) return;

          const cleanLabel = selected.label;
          const newTag = { key: cleanLabel.toLowerCase(), label: cleanLabel };
          handleAddTag(newTag);
          setInputValue("");
        }}
        inputProps={{
          classNames: {
            inputWrapper: "h-[48px]",
            input: "ml-1",
          },
        }}
        popoverProps={{
          offset: 8,
          classNames: {
            base: "rounded-none",
            content: "p-1 border-small border-default-100 bg-background rounded-none",
          },
        }}
        listboxProps={{
          hideSelectedIcon: true,
          itemClasses: {
            base: [
              "rounded-none",
              "text-default-500",
              "transition-opacity",
              "data-[hover=true]:text-black",
              "data-[hover=true]:bg-gray-200",
              "font-medium",
              "px-2",
              "py-2",
              "flex",
              "items-center",
              "gap-2",
            ],
          },
        }}
        items={autocompleteOptions}
        radius="none"
        variant="bordered"
      >
        {(item) => (
          <AutocompleteItem key={item.key}>
            {item.key.startsWith("__new__") ? (
              <span>Add new tag: "{item.label}"</span>
            ) : (
              item.label
            )}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
