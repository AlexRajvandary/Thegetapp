import { Avatar, Button, Chip } from "@heroui/react";
import { useState } from "react";
import {
  Check,
  HeartIcon,
  Share,
  ShieldCheck,
  ShoppingBasket,
} from "lucide-react";
import type { Product } from "../components/Product";
import { useNavigate } from "react-router-dom";
import {
  backButton,
  hapticFeedback,
  openTelegramLink,
  shareURL,
} from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import CountryFlag from "../components/CountryFlag";
import ImageGallery from "../components/ImageGallery";
import clsx from "clsx";
import { useCartStore } from "../store/cartStrore";

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Black", "White", "Blue", "Red"];

const exampleProduct: Product = {
  imageSrc:
    "https://optim.tildacdn.com/stor3437-6166-4235-b766-356234326234/-/format/webp/40083269.jpg.webp",
  imageSrces: [
    "https://optim.tildacdn.com/stor3437-6166-4235-b766-356234326234/-/format/webp/40083269.jpg.webp",
    "https://optim.tildacdn.com/stor3836-6331-4130-a664-623632643334/-/contain/830x830/center/center/-/format/webp/39386419.jpg.webp",
    "https://optim.tildacdn.com/stor6663-6163-4633-a138-623262363535/-/contain/830x830/center/center/-/format/webp/76203654.jpg.webp",
    "https://optim.tildacdn.com/stor3935-6538-4430-b238-396231373835/-/contain/830x830/center/center/-/format/webp/39685334.jpg.webp",
    "https://optim.tildacdn.com/stor3031-6461-4035-b532-396332653039/-/contain/830x830/center/center/-/format/webp/37599655.jpg.webp",
    "https://optim.tildacdn.com/stor6166-3737-4164-a463-393630353965/-/contain/830x830/center/center/-/format/webp/80671998.jpg.webp",
    "https://optim.tildacdn.com/stor6461-6639-4565-b737-383234373764/-/format/webp/81286816.jpg.webp",
  ],
  title: "Air Jordan 4 Retro 'Red Cement'",
  label: "Limited Edition",
  category: "Bag",
  price: "4999₽",
  href: "/products/air-jordan-4-red-cement",
};

export default function ProductPage() {
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
const addItem = useCartStore((state) => state.addItem);
const getQuantity = useCartStore((state) => state.getQuantity);
  const navigate = useNavigate();

  useEffect(() => {
    if (backButton.mount.isAvailable()) {
      backButton.mount();

      if (backButton.show.isAvailable()) backButton.show();
    }
    const handler = () => {
      navigate(-1);
      if (backButton.hide.isAvailable()) {
        backButton.hide();
      }
    };
    if (backButton.onClick.isAvailable()) backButton.onClick(handler);

    return () => {
      if (backButton.offClick.isAvailable()) {
        backButton.offClick(handler);
      }

      if (backButton.hide.isAvailable()) {
        backButton.hide();
      }
    };
  }, [navigate]);

  const addToCart = () => {
  if (!selectedSize || !selectedColor) return;

  addItem({
    id: "product-123", // Уникальный ID товара
    title: "Футболка Nike Shine",
    price: "4999₽",
    size: selectedSize,
    color: selectedColor,
  });
};
;

  const quantity = selectedSize && selectedColor
  ? getQuantity("product-123", selectedSize, selectedColor)
  : 0;

  return (
    <div className="bg-gray-100">
      <div className="w-full mt-[100px] md:w-[60%]">
        <ImageGallery images={exampleProduct.imageSrces} />
      </div>
      <div className="px-2 md:px-[140px] ">
        <div className="flex flex-col md:flex-row py-2 md:gap-12">
          <div className="w-full md:w-[30%] flex flex-col justify-start mx-[10px] ">
            <h1 className="text-[24px] my-2 font-semibold">
              {exampleProduct.price}
            </h1>
            <h1 className="text-[18px] md:text-[27px] my-2 font-bold">
              Футболка Nike Shine
            </h1>

            <div className="mr-4 mb-[10px]">
              <h2 className="text-[18px] py-2 font-medium">Размер</h2>
              <div className="flex flex-wrap gap-2 pb-4 rounded-lg">
                {sizes.map((size) => (
                  <Button
                    radius="sm"
                    key={size}
                    className={`h-8 w-[30px] text-s font-semibold border transition ${
                      selectedSize === size
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                    onPress={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>

              <h2 className="text-[18px] py-2 font-medium">Цвет</h2>
              <div className="flex gap-2 pb-2 rounded-lg">
                {colors.map((color) => {
                  const isSelected = selectedColor === color;
                  return (
                    <Avatar
                      isBordered
                      fallback={
                        <div className="w-full h-full bg-red-500 rounded-full" />
                      }
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      color={isSelected ? "primary" : "default"}
                      style={{ backgroundColor: color.toLowerCase() }}
                      className={clsx(
                        "w-8 h-8 m-1 rounded-full border-2 transition",
                        isSelected ? "scale-110 " : ""
                      )}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2 my-[10px]">
              <Chip
                variant="flat"
                radius="sm"
                size="lg"
                classNames={{
                  base: "border-thin",
                  content: "font-semibold text-gray-800",
                }}
              >
                Adidas
              </Chip>
              <CountryFlag countryKey="gb" />
              <Chip
                variant="flat"
                radius="sm"
                size="lg"
                startContent={<ShieldCheck strokeWidth={1} />}
                classNames={{
                  base: "border-thin",
                  content: "font-semibold text-gray-800",
                }}
              >
                Оригинал
              </Chip>
            </div>

            <div className="mb-1">
              <div className=" mr-4 p-4 bg-gray-200 rounded-md text-jusify font-thin text-sm md:text-[14px] space-y-3">
                <p>
                  Другие размеры и цвета — под заказ.
                  <span className="inline-flex items-center text-justify gap-2">
                    Напишите нам, чтобы узнать подробности.
                    <br />
                    Также доставляем любые товары из-за рубежа:
                  </span>
                  <div className="flex items-center justify-between flex-wrap mt-3">
                    {/* Флаги */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <Avatar
                        isBordered
                        className="w-6 h-6"
                        src="https://flagcdn.com/w40/us.png"
                      />
                      <Avatar
                        isBordered
                        className="w-6 h-6"
                        src="https://flagcdn.com/w40/eu.png"
                      />
                      <Avatar
                        isBordered
                        className="w-6 h-6"
                        src="https://flagcdn.com/w40/gb.png"
                      />
                      <Avatar
                        isBordered
                        className="w-6 h-6"
                        src="https://flagcdn.com/w40/de.png"
                      />
                      <Avatar
                        isBordered
                        className="w-6 h-6"
                        src="https://flagcdn.com/w40/it.png"
                      />
                      <Avatar
                        isBordered
                        className="w-6 h-6"
                        src="https://flagcdn.com/w40/jp.png"
                      />
                    </div>

                    {/* Кнопка */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button
                        onPress={() => {
                          if (openTelegramLink.isAvailable()) {
                            openTelegramLink("https://t.me/getmvp");
                            console.log("button link pressed");
                          }
                        }}
                        radius="md"
                        endContent={
                          <Avatar
                            isBordered
                            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                            alt="Telegram"
                            className="w-6 h-6"
                          />
                        }
                        className="text-sm pl-4 pr-2 py-1 bg-white shadow-sm w-[120px] hover:bg-blue-600 hover:text-white"
                      >
                        Написать
                      </Button>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full justify-between gap-2 bg-gray-100 pb-[50px] px-[18px] py-2 sticky bottom-0 z-50">
        <div className="flex items-center gap-2">
          <Button
            isIconOnly
            aria-label="Like"
            variant="light"
            onPress={() => {
              if (hapticFeedback?.isSupported()) {
                hapticFeedback.impactOccurred("medium");
              }

              setLiked(!liked);
            }}
          >
            <HeartIcon
              fill={liked ? "red" : "none"}
              stroke={liked ? "red" : "black"}
              size={25}
              strokeWidth={1}
            />
          </Button>

          <Button
            isIconOnly
            aria-label="Share"
            variant="light"
            onPress={() => {
              hapticFeedback?.impactOccurred("medium");
              shareURL(
                "https://t.me/TheGetTestBot/theget",
                "Look! Some cool app here!"
              );
            }}
          >
            <Share strokeWidth={1} />
          </Button>
        </div>

        <div className="flex items-center gap-2 ">
          <Button
            className="text-[13px] text-white font-bold bg-gray-800"
            startContent={
              quantity > 0 ? (
                <Check strokeWidth={1} />
              ) : (
                <ShoppingBasket strokeWidth={1} />
              )
            }
            onPress={addToCart}
          >
            {quantity > 0 ? `В корзине (${quantity})` : "В корзину"}
          </Button>
          <Button className="text-[13px] font-bold bg-blue-600 text-white w-[130px]">
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
}
