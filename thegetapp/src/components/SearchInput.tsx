import {Input} from "@heroui/react";
import { Search } from "lucide-react";

type SearchIconProps = {
  size?: number;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
  [key: string]: unknown;  // для остальных props (если нужны)
};

type SearchInputProps = {
  placeholder?: string;
  readOnly?: boolean;
};

export const SearchIcon: React.FC<SearchIconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function SearchInput({ placeholder = "Поиск", readOnly = false }: SearchInputProps){
    return(<>
      <Input
          readOnly = {readOnly}
          classNames={{
            base: "max-w-full sm:max-w-[30rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-800 bg-gray-200 dark:bg-default-500/20",
          }}
          placeholder={placeholder}
          size="sm"
          startContent={<Search size={18} strokeWidth={1.5} />}
          type="search"
          variant="flat"
          radius="full"
        />
    </>)
}