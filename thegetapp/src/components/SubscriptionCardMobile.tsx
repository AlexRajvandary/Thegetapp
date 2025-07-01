import { Card, Chip, Skeleton } from "@heroui/react";
import { useNavigate } from "react-router-dom";

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

export default function SubscriptionCardMobile({
  imageSrc = "",
  title = "",
  href = "",
  isLoading = false
}: ProductCardProps){
      const navigate = useNavigate();
    return(
        <Card key={href}
            isPressable
            className="shadow-none flex flex-col p-1 bg-transparent">
    <img
    src={imageSrc}
    alt={title}
      className="w-full object-cover rounded h-[160px]"
  />
  <div className="px-1 flex flex-col gap-1 text-center"> 
        <h2 className="text-sm font-semibold text-foreground line-clamp-2" onClick={() => !isLoading && navigate(href)}>
          {isLoading ? <Skeleton className="h-[16px] w-4/5 rounded-md" /> : <Chip>title</Chip>}
        </h2>
      </div>
</Card>

    );
}