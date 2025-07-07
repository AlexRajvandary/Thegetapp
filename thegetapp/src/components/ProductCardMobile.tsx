import { Card, Skeleton } from "@heroui/react";
import { HeartIcon } from "./HeartIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "./Product";
import { hapticFeedback } from "@telegram-apps/sdk-react";

type ProductCardProps = {
  product: Product;
  isLoading?: boolean;
  singleColumn?: boolean;  // новый проп
};

export default function ProductCardMobile({
  product,
  isLoading = false,
  singleColumn = false
}: ProductCardProps){
      const [liked, setLiked] = useState(false);
      const navigate = useNavigate();
    return(
        <Card key={product.title}
            isPressable
            className="bg-white shadow-none flex flex-col p-1">
    <img
    onClick={() => navigate(product.href)}
    src={product.imageSrc}
    alt={product.title}
      className={`w-full object-cover rounded-t-md ${
          singleColumn ? "h-[400px]" : "h-[280px] lg:h-[350px]"
        }`}
  />
  <div className="py-3 flex flex-col gap-1 text-left bg-white shadow-md rounded-b-md  h-[100px]">
   
  {isLoading ? (
    <Skeleton className="h-[16px] w-[60px] rounded-md" />
  ) : (
    <div className="grid grid-cols-[auto_auto_1fr_auto] items-center p-1 w-full gap-2">
      {/* Цена */}
      <p className="text-md font-bold text-black whitespace-nowrap">
        {product.price}
      </p>

      {/* Перечёркнутая цена */}
      <span className="text-gray-400 line-through text-sm whitespace-nowrap">
        $200
      </span>

      <div/>

      <button
        onClick={() => {
          if (!isLoading) {
            hapticFeedback?.impactOccurred?.("medium");
            setLiked(!liked);
          }
        }}
        disabled={isLoading}
      >
        <HeartIcon
          isFilled={liked}
          filledColor="red"
          strokeColor={liked ? "red" : "black"}
          strokeWidth={1}
          size={25}
        />
      </button>
    </div>
  )}        
        <h2 className="text-[13px] text-foreground  line-clamp-2 p-1">
          {isLoading ? <Skeleton className="h-[16px] w-4/5 rounded-md" /> : product.title}
        </h2>

        
        <div className="flex items-center justify-between pt-2">
 

</div>

      </div>
</Card>

    );
}