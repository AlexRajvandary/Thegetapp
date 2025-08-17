import { Avatar, Button, Card } from "@heroui/react";
import { openTelegramLink } from "@telegram-apps/sdk-react";
import { TelegramIcon } from "./TelegramIcon";
import { useRef, useState, useEffect } from "react";

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
  const countries = Array.isArray(countryISO) ? countryISO : [countryISO];
  const textRef = useRef<HTMLDivElement>(null);
  const [imgHeight, setImgHeight] = useState(200);

  useEffect(() => {
    if (textRef.current) {
      const textHeight = textRef.current.clientHeight;
      // Максимальная высота карточки - заголовок и нижний блок примерно 150px
      // Остаток отдаём картинке
      const maxCardHeight = 500;
      const otherContentHeight = 152;
      const availableHeight = maxCardHeight - otherContentHeight - textHeight;

      // Минимальная высота картинки 200px, можно больше если текст меньше
      setImgHeight(availableHeight > 200 ? availableHeight : 200);
    }
  }, [text]);

  return (
    <Card
      key={href}
      isPressable
      className="mx-auto my-[20px] w-[320px] h-[500px] flex flex-col shadow-xl rounded-md bg-white"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full object-cover"
        style={{ height: `${imgHeight}px` }}
      />

      {/* Верхний блок с заголовком и текстом */}
      <div className="flex flex-col px-4 flex-grow">
        <div className="text-[14px] font-semibold text-left pt-4">{title}</div>
        <div
          ref={textRef}
          className="text-[12px] font-thin text-black text-left pt-2"
        >
          {text}
        </div>
      </div>

      {/* Нижний блок с флагами и кнопкой (колонка) */}
      <div className="flex flex-col px-4 pb-4 mt-auto">
        <div className="flex gap-2 mb-2 px-2 pb-2">
          {countries.map((code) => (
            <Avatar
              key={code}
              isBordered
              className="w-7 h-7"
              src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
            />
          ))}
        </div>

        <Button
          onPress={() => {
            if (openTelegramLink.isAvailable()) {
              openTelegramLink("https://t.me/getmvp");
              console.log("button link pressed");
            }
          }}
          radius="sm"
          startContent={<TelegramIcon />}
          className="text-md font-bold bg-gray-800 text-white shadow-md"
        >
          Написать
        </Button>
      </div>
    </Card>
  );
}
