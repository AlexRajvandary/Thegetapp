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
            className="shadow-none flex flex-col p-1 bg-transparent">
    <img
    src={imageSrc}
    alt={title}
      className="w-full object-cover rounded h-[160px]"
  />
</Card>

    );
}