import { Avatar, Button, Card } from "@heroui/react";
import { openTelegramLink } from "@telegram-apps/sdk-react";

type ProductCardProps = {
  imageSrc?: string;
  title?: string;
  label?: string;
  category?: string;
  price?: string;
  href?: string;
  isLoading?: boolean;
  singleColumn?: boolean;
  text?: string;
  countryISO?: string | string[]; // ← теперь допускается один или несколько флагов
};

export default function AbroadOrderExample({
  imageSrc = "",
  title = "",
  href = "",
  text = "",
  countryISO = "",
}: ProductCardProps) {
  const countries = Array.isArray(countryISO) ? countryISO : [countryISO]; // нормализуем в массив

  return (
    <Card
      key={href}
      isPressable
      className="ml-[20px] my-[20px] w-[320px] flex flex-col shadow-xl rounded-md bg-white"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[200px] object-cover"
      />

      <div className="flex flex-col px-4 pb-4">
        <div className="text-[14px] font-semibold text-left pt-4">{title}</div>
        <div className="text-[12px] font-thin text-black text-left pt-2">
          {text}
        </div>

        <div className="flex gap-2 p-4">
          {countries.map((code) => (
            <Avatar
              key={code}
              isBordered
              className="w-6 h-6"
              src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
            />
          ))}
        </div>
      </div>
      <Button
        onPress={() => {
          if (openTelegramLink.isAvailable()) {
            openTelegramLink("https://t.me/getmvp");
            console.log("button link pressed");
          }
        }}
        radius="sm"
        endContent={
          <Avatar
            isBordered
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            className="w-6 h-6"
          />
        }
        className="text-md font-bold m-4 mt-0 bg-blue-400 text-white shadow-md"
      >
        Написать
      </Button>
    </Card>
  );
}
