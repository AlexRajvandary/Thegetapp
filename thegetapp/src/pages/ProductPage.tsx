import { Button, Chip } from "@heroui/react";
import React from "react";
import { HeartIcon, BookmarkIcon } from "lucide-react";
import type { Product } from "../components/Product";
import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import CountryFlag from "../components/CountryFlag";
import CarouselDefault from "../components/CarouselDefault";


const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Black", "White", "Blue", "Red"];

const exampleProduct: Product = {
  imageSrc: "https://media-assets.grailed.com/prd/listing/temp/e8efcd3b5d0b49909fffd2c1cbc42ab0?w=800",
  imageSrces: [
    "https://media-assets.grailed.com/prd/listing/temp/b8427be4143c4ce4b06150d9192e1f92?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/776526df19b641a3ad40f99a78b58986?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/960958b1240a48ed8fecc220b32cfd4d?w=800",
     "https://media-assets.grailed.com/prd/listing/temp/b8427be4143c4ce4b06150d9192e1f92?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/776526df19b641a3ad40f99a78b58986?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/960958b1240a48ed8fecc220b32cfd4d?w=800",
     "https://media-assets.grailed.com/prd/listing/temp/b8427be4143c4ce4b06150d9192e1f92?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/776526df19b641a3ad40f99a78b58986?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/960958b1240a48ed8fecc220b32cfd4d?w=800"
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

      const handler = () => {
        navigate(-1);
    if (backButton.hide.isAvailable()) backButton.hide();
  };
    if (backButton.onClick.isAvailable()) backButton.onClick(handler);

    return () => {
      if(backButton.offClick.isAvailable()){
        backButton.offClick(handler);
      }
      
      if (backButton.hide.isAvailable()) backButton.hide();
    };
  }, [navigate]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    console.log("Added to cart", { size: selectedSize, color: selectedColor });
  };

  return (
    <div className="px-2 pt-[100px] md:px-[140px]">
      <div className="flex flex-col md:flex-row py-8 gap-4 md:gap-12">
        <div className="w-full md:w-[60%]">
          <CarouselDefault visibleSlides={1} items={exampleProduct.imageSrces.map(imageSrc =>  
            <img src={imageSrc}
                 alt={exampleProduct.title}
                 loading="lazy"
              />)}/>
        </div>

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
          <h1 className="text-lg md:text-[18px] font-bold mb-4">Tee × Tee Shirt × Vintage</h1>
          <div className="flex items-center gap-2">
            <Chip variant="faded">Sneakers</Chip>
            <Chip variant="faded">Adidas</Chip>
            <CountryFlag countryKey="gb" />
          </div>

          <p className="text-sm md:text-[14px] font-thin my-4">
            Yugioh Tee Shirt Vintage 90s Y2k Joey Wheeler Blue Eyes White Dragon Longsleeve Shirt Size S/XS
          </p>

          {/* Размер */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Выберите размер:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  size="sm"
                  variant={selectedSize === size ? "solid" : "ghost"}
                  color={selectedSize === size ? "primary" : "default"}
                  className="rounded-md"
                  onPress={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Цвет */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Выберите цвет:</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Button
  key={color}
  size="sm"
  variant={selectedColor === color ? "solid" : "ghost"}
  color={selectedColor === color ? "primary" : "default"}
  className="rounded-md capitalize flex items-center gap-2"
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
          </div>

          {/* Кнопка Добавить в корзину */}
          <Button
            onPress={handleAddToCart}
            color="success"
            size="lg"
            className="w-full bg-gradient-to-tr my-2 from-pink-500 to-yellow-500 text-white shadow-lg rounded-none"
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
}
