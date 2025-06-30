import { Card, Skeleton } from "@heroui/react";
import { HeartIcon } from "./HeartIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  imageSrc?: string;
  title?: string;
  label?: string;
  category?: string;
  price?: string;
  href?: string;
  isLoading?: boolean; // 👈 добавляем флаг
}

export default function ProductCardMobile({
  imageSrc = "",
  title = "",
  label = "",
  category = "",
  price = "",
  href = "",
  isLoading = false,
}: ProductCardProps){
      const [liked, setLiked] = useState(false);
      const navigate = useNavigate();
    return(
        <Card key={href}
            className="bg-white rounded flex flex-col p-1">
    <img
    src={imageSrc}
    alt={title}
    className="w-full h-[180px] object-cover rounded"
  />
  <div className="p-3 flex flex-col gap-1 text-left bg-white">
        <span className="text-[10px] text-primary font-semibold uppercase">
          {isLoading ? <Skeleton className="w-1/3 h-[10px]" /> : label}
        </span>

        <h2 className="text-sm font-semibold text-foreground line-clamp-2" onClick={() => !isLoading && navigate(href)}>
          {isLoading ? <Skeleton className="h-[16px] w-4/5 rounded-md" /> : title}
        </h2>

        <p className="text-xs text-foreground/70" onClick={() => !isLoading && navigate(href)}>
          {isLoading ? <Skeleton className="h-[12px] w-3/5 rounded-md" /> : category}
        </p>

        <div className="flex items-center justify-between pt-2">
          <p className="text-md font-bold" onClick={() => !isLoading && navigate(href)}>
            {isLoading ? <Skeleton className="h-[16px] w-[60px] rounded-md" /> : price}
          </p>
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
        </div>
      </div>
</Card>

    );
}