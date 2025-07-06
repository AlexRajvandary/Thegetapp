import { Avatar, Card } from "@heroui/react";

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

export default function AbroadOrderExample({
  imageSrc = "",
  title = "",
  href = ""
}: ProductCardProps){
      
    return(
        <Card key={href}
            isPressable
            className="ml-[20px] my-[20px] w-[320px] flex flex-col shadow-xl rounded-md bg-gray-200">
   <div className="flex gap-4">
  <img 
    src={imageSrc}
    alt={title}
    className="w-[220px] h-[240px] object-cover"
  />
   <div className="flex flex-col">
    <div className="text-[14px] font-semibold text-left pt-5">
      Хрупкий товар из Европы? Легко!
    </div>
    <div className="text-[12px] font-thin text-black text-left pt-3">
      Недавно у нас оформили выкуп и доставку чашек ручной работы из Хорватии — хрупкий товар, но мы умеем с таким работать.
    </div>
    <div className="py-4">
          <Avatar isBordered className="w-6 h-6" src="https://flagcdn.com/w40/cr.png" />
    </div>
  </div>
</div>
</Card>

    );
}