
import ImageGallery from "../components/ImageGallery";
import { Button } from "@heroui/react";
import { useLocation } from "react-router-dom";

import React from "react";
import { HeartIcon, BookmarkIcon } from "lucide-react";


const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Black", "White", "Blue", "Red"];

export default function ProductPage() {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const location = useLocation();
  const product = location.state?.product;
  if (!product) return <p>Продукт не найден</p>;

  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    console.log("Added to cart", { size: selectedSize, color: selectedColor });
  };

  return (
    <div className="px-4 md:px-[140px]">
      <div className="flex flex-col md:flex-row py-8 gap-6 md:gap-12">
        <div className="w-full md:w-[60%]">
          <ImageGallery images={product.imageSrces} />
        </div>

        <div className="w-full md:w-[30%] flex flex-col justify-start">
          <h1 className="text-lg md:text-[18px] font-bold mb-4">Tee × Tee Shirt × Vintage</h1>
          <p className="text-sm md:text-[14px] font-medium mb-2">Категория: Women sneakers</p>
          <p className="text-sm md:text-[14px] mb-2">Brand</p>
          <p className="text-sm md:text-[14px] mb-2">Men's / US S / EU 44-46 / 1</p>
          <p className="text-sm md:text-[14px] mb-2">Used</p>
          <p className="text-sm md:text-[14px] font-thin mb-4">
            Yugioh Tee Shirt Vintage 90s Y2k Joey Wheeler Blue Eyes White Dragon Longsleeve Shirt Size S/XS
          </p>

          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex items-center gap-2">
              <Button isIconOnly aria-label="Like" variant="light" onPress={() => setLiked(!liked)}>
                <HeartIcon
                  fill={liked ? "red" : "none"}
                  stroke={liked ? "red" : "black"}
                  size={25}
                />
              </Button>
              <Button isIconOnly aria-label="Save" variant="light" onPress={() => setSaved(!saved)}>
                <BookmarkIcon
                  fill={saved ? "black" : "none"}
                  stroke="black"
                  size={25}
                />
              </Button>
            </div>
            <p className="text-2xl text-black font-bold text-end">$129.99</p>
          </div>

          {/* Размер */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Выберите размер:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  size="sm"
                  variant={selectedSize === size ? "solid" : "ghost"}
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
