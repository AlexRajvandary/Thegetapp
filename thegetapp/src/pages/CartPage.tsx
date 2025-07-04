import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@heroui/react";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Nike Air Force 1",
    image: "https://via.placeholder.com/100",
    price: 12999,
    quantity: 1,
  },
  {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://via.placeholder.com/100",
    price: 8999,
    quantity: 2,
  },
];

export default function CartPage() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 pb-20">
      <h1 className="text-xl font-semibold mb-4">Корзина</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 mb-4 border-b pb-4"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="text-md font-medium">{item.name}</h2>
            <div className="text-sm text-gray-500">
              {item.price.toLocaleString("ru-RU")} ₽
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Button isIconOnly>
                <Minus size={16} />
              </Button>
              <span className="w-6 text-center">{item.quantity}</span>
              <Button isIconOnly>
                <Plus size={16} />
              </Button>
            </div>
          </div>
          <Button variant="ghost" isIconOnly className="text-red-500">
            <Trash2 size={20} />
          </Button>
        </div>
      ))}

      <div className="mt-6 flex justify-between items-center text-lg font-semibold">
        <span>Итого:</span>
        <span>{total.toLocaleString("ru-RU")} ₽</span>
      </div>

      <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
        Оформить заказ
      </Button>
    </div>
  );
}
