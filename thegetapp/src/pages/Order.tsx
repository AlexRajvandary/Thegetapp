import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";
import { Button } from "@heroui/react";
import { Download, Star } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  isSubscription?: boolean;
};

const orderItems: CartItem[] = [
  {
    id: "1",
    name: "Spotify Premium",
    image: "/spotify.webp",
    price: 1299,
    quantity: 1,
    isSubscription: true,
  },
  {
    id: "2",
    name: "Adidas Campus 00s",
    image:
      "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
    isSubscription: false,
  },
];

const orderInfo = {
  id: "ORD-20250707-001",
  status: "Оплачен",
  createdAt: "2025-07-07T12:45:00Z",
};

export default function OrderPage() {
  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (backButton.mount.isAvailable()) backButton.mount();
    if (backButton.show.isAvailable()) backButton.show();

    const handler = () => {
      navigate(-1);
      if (backButton.hide.isAvailable()) {
        backButton.hide();
      }
    };

    if (backButton.onClick.isAvailable()) backButton.onClick(handler);

    return () => {
      if (backButton.offClick.isAvailable()) {
        backButton.offClick(handler);
      }
      if (backButton.hide.isAvailable()) {
        backButton.hide();
      }
    };
  }, [navigate]);

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="p-4 pt-[110px]">
        <h1 className="text-xl font-semibold mb-4">Заказ</h1>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="text-sm text-gray-500">Номер заказа:</div>
          <div className="text-md font-medium mb-2">{orderInfo.id}</div>

          <div className="text-sm text-gray-500">Статус:</div>
          <div className="text-md font-medium mb-2 text-green-600">
            {orderInfo.status}
          </div>

          <div className="text-sm text-gray-500">Создан:</div>
          <div className="text-md font-medium">
            {new Date(orderInfo.createdAt).toLocaleString("ru-RU")}
          </div>
        </div>

        {orderItems.map((item) => (
          <div
            key={item.id}
            className="flex mb-2 mx-0 rounded-md bg-white h-[200px]"
          >
            <div className="w-[200px]">
              <img
                src={item.image}
                alt={item.name}
                className={`rounded-l ${
                  item.isSubscription
                    ? "w-[100px] h-[100px] ml-[50px] mt-[50px] object-contain"
                    : "w-[190px] h-[200px]"
                }`}
              />
            </div>

            <div className="flex flex-col justify-between flex-1 p-1 pt-3">
              <div>
                <h2 className="text-[16px] font-normal">{item.name}</h2>
                <div>Sizes</div>
                <div className="text-sm text-gray-500 mt-1">
                  Кол-во: {item.quantity}
                </div>
              </div>
              <div className="mt-auto text-[18px] font-medium text-black">
                {item.price.toLocaleString("ru-RU")} ₽
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 z-50 py-4 pb-10 px-4 pt-2 bg-white">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Итого:</span>
          <span>{total.toLocaleString("ru-RU")} ₽</span>
        </div>
        <div className="flex gap-2">
          <Button className="w-1/2 bg-gray-800 text-white" startContent={<Download strokeWidth={1}/>}>Сохранить чек</Button>
          <Button className="w-1/2 text-white" color="primary" startContent={<Star strokeWidth={1}/>}>Оставить отзыв</Button>
        </div>
      </div>
    </div>
  );
}
