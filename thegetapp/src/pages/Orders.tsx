import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";
import { Button } from "@heroui/react";
import { Star } from "lucide-react";

type OrderItem = {
  id: string;
  name: string;
  image: string;
};

type Order = {
  id: string;
  createdAt: string;
  status: "Оплачен" | "В пути" | "Доставлен";
  total: number;
  items: OrderItem[];
};

const orders: Order[] = [
  {
    id: "ORD-001",
    createdAt: "2025-07-06T10:30:00Z",
    status: "Оплачен",
    total: 2999,
    items: [
      { id: "1", name: "Spotify Premium", image: "/spotify.webp" },
      { id: "2", name: "Nike Air Force", image: "/youtube.webp" },
      { id: "2", name: "Nike Air Force", image: "/disney.webp" },
      { id: "2", name: "Nike Air Force", image: "/discord.webp" },
      { id: "2", name: "Nike Air Force", image: "/airforce.webp" },
      { id: "2", name: "Nike Air Force", image: "/airforce.webp" },
      { id: "2", name: "Nike Air Force", image: "/airforce.webp" },
      { id: "2", name: "Nike Air Force", image: "/airforce.webp" },
    ]
  },
  {
    id: "ORD-002",
    createdAt: "2025-07-04T15:00:00Z",
    status: "В пути",
    total: 8999,
    items: [
      { id: "3", name: "Adidas Campus", image: "/labubu.jpg" }
    ]
  },
  {
    id: "ORD-003",
    createdAt: "2025-06-30T12:00:00Z",
    status: "Доставлен",
    total: 5999,
    items: [
      { id: "4", name: "YouTube Premium", image: "/youtube.webp" }
    ]
  }
];

export default function OrdersPage() {
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
    <div className="bg-[#f5f5f5] min-h-screen pt-[110px] px-4">
      <h1 className="font-extrabold text-[24px] mx-4 lg:mx-auto lg:max-w-[1440px] py-[5px] leading-[130%] tracking-[-0.01em] mb-4">Мои заказы</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-lg p-4 mb-3 shadow-sm"
          onClick={()=>navigate("/order")}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-500">Заказ #{order.id}</div>
            <div className={`text-sm font-medium ${
              order.status === "Доставлен" ? "text-green-600" :
              order.status === "В пути" ? "text-yellow-600" :
              "text-blue-600"
            }`}>
              {order.status}
            </div>
          </div>

          <div className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleString("ru-RU")}
          </div>

          <div className="flex mt-2 space-x-2 overflow-x-auto">
            {order.items.slice(0, 4).map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
            ))}
            {order.items.length > 4 && (
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded text-xs text-gray-600">
                +{order.items.length - 4}
              </div>
            )}
          </div>

          <div className="mt-3 text-right text-base font-semibold">
            {order.total.toLocaleString("ru-RU")} ₽
          </div>

          <Button
            startContent={<Star size={18} strokeWidth={1}/>}
            className="w-full mt-4 bg-gray-900 text-white hover:bg-black"
            onPress={() => navigate(`/review`)}
          >
            Оставить отзыв
          </Button>
        </div>
      ))}
    </div>
  );
}
