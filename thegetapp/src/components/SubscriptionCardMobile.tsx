import { Card } from "@heroui/react";

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
  href = ""
}: ProductCardProps){
      
    return(
        <Card key={href}
            isPressable
            className="shadow-none ml-[30px] flex flex-col rounded-xl bg-transparent">
    <img
    src={imageSrc}
    alt={title}
      className="w-[80px] object-content rounded h-[80px]"
  />
</Card>

    );
}