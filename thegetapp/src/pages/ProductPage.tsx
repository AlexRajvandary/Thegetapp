import { Button, Chip } from "@heroui/react";
import React from "react";
import { HeartIcon, BookmarkIcon } from "lucide-react";
import type { Product } from "../components/Product";
import { useNavigate } from "react-router-dom";
import { backButton, mainButton, miniApp } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import CountryFlag from "../components/CountryFlag";
import ImageGallery from "../components/ImageGallery";


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
      <div className="flex flex-col md:flex-row py-8 gap-4 md:gap-12">
     

        <div className="flex items-center justify-between w-full mb-2">
           <p className="font-bold text-[24px] py-[5px] leading-[130%] tracking-[-0.01em]">$129.99</p>
            <div className="flex items-center gap-2">
               
              <Button isIconOnly aria-label="Like" variant="light" onPress={() => setLiked(!liked)}>
                <HeartIcon
                  fill={liked ? "red" : "none"}
                  stroke={liked ? "red" : "black"}
                  size={25}
                  strokeWidth={1}
                />
              </Button>
              <Button isIconOnly aria-label="Save" variant="light" onPress={() => setSaved(!saved)}>
                <BookmarkIcon
                  fill={saved ? "black" : "none"}
                  stroke="black"
                  size={25}
                  strokeWidth={1}
                />
              </Button>
            </div>
          
          </div>

        <div className="w-full md:w-[30%] flex flex-col justify-start">
          <h1 className="text-lg md:text-[18px] mb-4">Футболка Nike Shine</h1>
          <div className="flex items-center gap-2">
            <Chip variant="faded" 
                   classNames={{
                    base: "bg-black bg-opacity-60 border-small border-black/30 shadow-pink-500/30",
                    content: "drop-shadow shadow-black text-white",
                }}>Sneakers</Chip>
            <Chip variant="faded"
            classNames={{
                    base: "bg-black bg-opacity-60 border-small border-black/30 shadow-pink-500/30",
                    content: "drop-shadow shadow-black text-white",
                }}>Adidas</Chip>
            <CountryFlag countryKey="gb" />
          </div>

          <p className="text-sm md:text-[14px] font-thin my-4">
            Yugioh Tee Shirt Vintage 90s Y2k Joey Wheeler Blue Eyes White Dragon Longsleeve Shirt Size S/XS
          </p>

          {/* Размер */}
          <div className="mb-4">
            <p className="font-thin mb-2">Размер:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  size="sm"
                  variant={selectedSize === size ? "solid" : "ghost"}
                  color={selectedSize === size ? "primary" : "default"}
                  className="rounded-md border-gray-200"
                  onPress={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Цвет */}
          <div className="mb-4">
            <p className="font-thin mb-2">Цвет:</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Button
  key={color}
  size="sm"
  variant={selectedColor === color ? "solid" : "ghost"}
  color={selectedColor === color ? "primary" : "default"}
  className="rounded-md capitalize flex items-center gap-2 border-gray-200"
  onPress={() => setSelectedColor(color)}
>
  <span
    className="w-4 h-4 rounded-full border border-gray-300"
    style={{ backgroundColor: color.toLowerCase() }}
  ></span>
  {color}
</Button>
              ))}
            </div>
            <div className="bg-gray-200 my-4 p-4 rounded-md text-left font-thin">
              Другие размеры и цвета— под заказ.
⚡️Напишите нам, чтобы узнать подробности.

Так же, доставляем любые товары из-за рубежа.
Америка, Европа, Англия и другие страны.
👉 Нажмите, чтобы уточнить подробности.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
