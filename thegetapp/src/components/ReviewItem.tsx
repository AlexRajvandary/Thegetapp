import {
  Card,
  CardBody
} from "@heroui/react";
import { Star } from "lucide-react";

type ReviewItemProps = {
  date: string;
  rating: number;
  text: string;
  productName: string;
  imageSrc: string;
};

export default function ReviewItem({
  date,
  rating,
  text,
  productName,
  imageSrc,
}: ReviewItemProps) {
  return (
    <Card className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-md">
      <CardBody className="flex flex-row gap-20 p-6 h-[200px]">
        {/* Левая колонка */}
        <div className="flex flex-col justify-between flex-1">
          <div className="text-sm text-gray-500">{date}</div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < rating ? "#facc15" : "transparent"}
                stroke="#facc15"
              />
            ))}
            <span className="text-sm text-gray-700 ml-2">({rating}.0)</span>
          </div>

          <p className="text-gray-800 text-sm leading-snug">{text}</p>

          <p className="text-gray-500 text-xs italic mt-2">Товар: {productName}</p>
        </div>

        {/* Правая колонка: Фото */}
        <div className="flex-shrink-0">
          <img
            src={imageSrc}
            alt={productName}
            className="h-full object-contain"
          />
        </div>
      </CardBody>
    </Card>
  );
}
