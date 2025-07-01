import { Card, Skeleton } from "@heroui/react";
import { HeartIcon } from "./HeartIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  imageSrc?: string;
  title?: string;
  label?: string;
  category?: string;
  price?: string;
  href?: string;
  isLoading?: boolean;
  singleColumn?: boolean;  // новый проп
};

export default function ProductCardMobile({
  imageSrc = "",
  title = "",
  label = "",
  price = "",
  href = "",
  isLoading = false,
  singleColumn = false
}: ProductCardProps){
      const [liked, setLiked] = useState(false);
      const navigate = useNavigate();
    return(
        <Card key={href}
            isPressable
            className="bg-white shadow-none flex flex-col p-1">
    <img
    src={imageSrc}
    alt={title}
      className={`w-full object-cover rounded ${
          singleColumn ? "h-[280px]" : "h-[180px]"
        }`}
  />
  <div className="py-3 px-1 flex flex-col gap-1 text-left bg-white">
        <p className="text-md font-bold" onClick={() => !isLoading && navigate(href)}>
            {isLoading ? <Skeleton className="h-[16px] w-[60px] rounded-md" /> : price}
        </p>
        
        <h2 className="text-sm font-semibold text-foreground line-clamp-2" onClick={() => !isLoading && navigate(href)}>
          {isLoading ? <Skeleton className="h-[16px] w-4/5 rounded-md" /> : title}
        </h2>

        
        <div className="flex items-center justify-between pt-2">
        

        <span className="text-[10px] text-primary font-semibold uppercase">
          {isLoading ? <Skeleton className="w-1/3 h-[10px]" /> : label}
        </span>

          <button onClick={() => !isLoading && setLiked(!liked)} disabled={isLoading}>
            {isLoading ? (
              <Skeleton className="h-[22px] w-[22px] rounded-full" />
            ) : (
              <HeartIcon
                isFilled={liked}
                filledColor="red"
                strokeColor={liked ? "red" : "black"}
                size={22}
              />
            )}
          </button>
           <button disabled={isLoading}>
            {isLoading ? (
              <Skeleton className="h-[22px] w-[22px] rounded-full" />
            ) : (
              <ShoppingCart
                strokeWidth={1}
              />
            )}
          </button>
        </div>
      </div>
</Card>

    );
}