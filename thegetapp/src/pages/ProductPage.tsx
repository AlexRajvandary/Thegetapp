import { Avatar, Button, Chip } from "@heroui/react";
import React from "react";
import { HeartIcon, BookmarkIcon, Share, ShieldCheck } from "lucide-react";
import type { Product } from "../components/Product";
import { useNavigate } from "react-router-dom";
import { backButton, hapticFeedback, mainButton, miniApp, openTelegramLink, shareURL } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import CountryFlag from "../components/CountryFlag";
import ImageGallery from "../components/ImageGallery";
import clsx from "clsx";


const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Black", "White", "Blue", "Red"];

const exampleProduct: Product = {
  imageSrc: "https://optim.tildacdn.com/stor3437-6166-4235-b766-356234326234/-/format/webp/40083269.jpg.webp",
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
  price: "$4999.99",
  href: "/products/air-jordan-4-red-cement"
};

export default function ProductPage() {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (backButton.mount.isAvailable()) backButton.mount();
    if (backButton.show.isAvailable()) backButton.show();

    if(mainButton.mount.isAvailable()) {mainButton.mount();
      miniApp.mountSync();
      miniApp.setBottomBarColor("#FFFFFF");
mainButton.setParams({
  isVisible: true,
  text: "Добавить в корзину",
  backgroundColor: "#000000"
});
    }
      const handler = () => {
        navigate(-1);
    if (backButton.hide.isAvailable()){ 
      backButton.hide();
      mainButton.setParams({isVisible: false});
    }
  };
    if (backButton.onClick.isAvailable()) backButton.onClick(handler);

    return () => {
      if(backButton.offClick.isAvailable()){
        backButton.offClick(handler);
      }
      
      if (backButton.hide.isAvailable())
        {
           backButton.hide();
            mainButton.setParams({isVisible: false});
          }
    };
  }, [navigate]);

  return (
    <>
       <div className="w-full mt-[100px] md:w-[60%]">
          <ImageGallery images={exampleProduct.imageSrces}/>
        </div>
    <div className="px-2 md:px-[140px]">
      <div className="flex flex-col md:flex-row py-2 md:gap-12">
            <div className="flex items-center w-full gap-2">
              <Button isIconOnly aria-label="Like" variant="light" onPress={() => 
                {
                  hapticFeedback.impactOccurred('medium');
                  setLiked(!liked)
                }
              }>
                <HeartIcon
                  fill={liked ? "red" : "none"}
                  stroke={liked ? "red" : "black"}
                  size={25}
                  strokeWidth={1}
                />
              </Button>
              <Button isIconOnly aria-label="Save" variant="light" onPress={() => {
                hapticFeedback?.impactOccurred("medium");
                setSaved(!saved)
                }}>
                <BookmarkIcon
                  fill={saved ? "black" : "none"}
                  stroke="black"
                  size={25}
                  strokeWidth={1}
                />
              </Button>
              <Button isIconOnly aria-label="Share" variant="light" onPress={() => {
                  hapticFeedback?.impactOccurred("medium");
                  shareURL('https://t.me/TheGetTestBot/theget', 'Look! Some cool app here!');
                }}>
                <Share strokeWidth={1}/>
              </Button>
            </div>
          
          

        <div className="w-full md:w-[30%] flex flex-col justify-start mx-[10px]">
          <h1 className="text-[23px] md:text-[27px] my-2 font-bold">Футболка Nike Shine</h1>
                     <div className="flex items-center gap-2 my-[10px]">
            
           <Chip variant="flat" radius="sm" size="lg"
                  classNames={{
                    base: "border-thin",
                    content: "font-bold text-gray-600",
                }}>Adidas</Chip>
            <CountryFlag countryKey="gb" />
              <Chip variant="flat" radius="sm" size="lg" startContent={<ShieldCheck strokeWidth={1}/>}
                  classNames={{
                    base: "border-thin",
                    content: "font-bold text-gray-600",
                }}>Оригинал</Chip>
           
          </div>
                 <div className="bg-gray-100 rounded-md mr-4 mb-[10px] p-4">
                
          
          <div className="mb-4">
           
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                radius="sm"
                  key={size}
                  className={`h-8 w-[30px] text-s font-bold border transition ${
                 selectedSize === size ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                }`}
                  onPress={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

           <div className="flex gap-2">
  {colors.map((color) => {
    const isSelected = selectedColor === color;
    return (
      <Avatar
      isBordered
      fallback={<div className="w-full h-full bg-red-500 rounded-full" />} 
      key={color}
      onClick={() => setSelectedColor(color)}
      color = {isSelected ? "primary" : "default"}
      style={{ backgroundColor: color.toLowerCase() }}
       className={clsx(
                  "w-8 h-8 m-1 rounded-full border-2 transition",
                  isSelected ? "scale-110" : "",
                )}
      />
    );
  })}
</div>
                 </div>
                  
          <div className="mb-4">
           <div className="bg-gray-100 mr-4 p-4 rounded-md text-jusify font-thin text-sm md:text-[14px] space-y-3">
  <p>
    Другие размеры и цвета — под заказ.
   <span className="inline-flex items-center text-justify gap-2">
      Напишите нам, чтобы узнать подробности.
      <br/>Также доставляем любые товары из-за рубежа:
    </span>
<div className="flex items-center justify-between flex-wrap mt-3">
  {/* Флаги */}
  <div className="flex items-center gap-2 flex-wrap">
    <Avatar isBordered className="w-6 h-6" src="https://flagcdn.com/w40/us.png" />
    <Avatar isBordered className="w-6 h-6" src="https://flagcdn.com/w40/eu.png" />
    <Avatar isBordered className="w-6 h-6" src="https://flagcdn.com/w40/gb.png" />
    <Avatar isBordered className="w-6 h-6" src="https://flagcdn.com/w40/de.png" />
    <Avatar isBordered className="w-6 h-6" src="https://flagcdn.com/w40/it.png" />
    <Avatar isBordered className="w-6 h-6" src="https://flagcdn.com/w40/jp.png" />
  </div>

  {/* Кнопка */}
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="shrink-0"
  >
    <Button
    onPress={()=>{
      if (openTelegramLink.isAvailable()) {
        openTelegramLink('https://t.me/getmvp');
        console.log("button link pressed")
      }

    }}
    radius="full"
      endContent={
        <Avatar
          isBordered
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          alt="Telegram"
          className="w-6 h-6"
        />
      }
      className="text-sm pl-4 pr-2 py-1 bg-white shadow-md"
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
    </>
  );
}
