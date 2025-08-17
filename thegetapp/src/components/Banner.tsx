import { Button, Card } from "@heroui/react";
import { openTelegramLink } from "@telegram-apps/sdk-react";
import { TelegramIcon } from "./TelegramIcon";

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
}: ProductCardProps) {
  return (
   <Card
  key={href}
  isPressable
  className="mx-auto my-[20px] w-[320px] h-[500px] flex flex-col shadow-xl rounded-md bg-white"
>
  <img
    src={imageSrc}
    alt={title}
    className="w-full h-[200px] object-cover"
  />

  {/* Контейнер, который будет растягиваться */}
  <div className="flex flex-col px-4 flex-grow">
    <div className="text-[14px] font-semibold text-left pt-4">{title}</div>
    <div className="text-[12px] font-thin text-black text-left pt-2">
      {text}
    </div>
  </div>

  {/* Кнопка прижата вниз */}
  <Button
    onPress={() => {
      if (openTelegramLink.isAvailable()) {
        openTelegramLink("https://t.me/getmvp");
        console.log("button link pressed");
      }
    }}
    radius="sm"
    startContent={<TelegramIcon />}
    className="text-md font-bold m-4 mt-0 bg-gray-800 text-white shadow-md"
  >
    Написать
  </Button>
</Card>

  );
}
