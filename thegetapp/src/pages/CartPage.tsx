import { ShoppingBag, Trash2 } from "lucide-react";
import { Avatar, Button } from "@heroui/react";
import { backButton } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCartStore } from "../store/cartStore"; // путь проверь

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, ""), 10);
    return sum + numericPrice * item.quantity;
  }, 0);

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
      if (backButton.offClick.isAvailable()) backButton.offClick(handler);
      if (backButton.hide.isAvailable()) backButton.hide();
    };
  }, [navigate]);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="p-2 pb-5 pt-[110px]">
        <h1 className="text-xl font-semibold mb-4 pl-4">Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="text-center mt-10 text-gray-500">Корзина пуста</div>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={`${item.id}-${item.size}-${item.color}-${index}`}
              className="flex mb-2 mx-4 rounded-md bg-white h-[200px]"
            >
              <div className="w-[160px] flex items-center justify-center">
                <img
                  src="https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800"
                  alt={item.title}
                  className="w-[160px] h-[200px] object-cover rounded-l"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 p-3 pt-2">
                <div>
                  <h2 className="text-[16px] font-normal">{item.title}</h2>
                  <div className="text-sm text-gray-600 mt-5 w-[110px] py-4 px-2 bg-gray-100 rounded-lg">
                    <div>Размер: {item.size}</div>
                    <div className="flex items-center mt-1">
                      Цвет:
                      <Avatar
                        isBordered
                        fallback={
                          <div className="w-full h-full bg-gray-300 rounded-full" />
                        }
                        style={{ backgroundColor: item.color.toLowerCase() }}
                        className="w-5 h-5 ml-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-[18px] font-medium text-black">
                    {item.price} × {item.quantity}
                  </div>
                  <Button
                    variant="light"
                    isIconOnly
                    className="ml-2"
                    onPress={() =>
                      removeItem(item.id, item.size, item.color)
                    }
                  >
                    <Trash2 size={20} />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="sticky bottom-[90px] z-50 py-4 px-8 pt-2 bg-white">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Итого:</span>
            <span>{total.toLocaleString("ru-RU")} ₽</span>
          </div>

          <Button
            startContent={<ShoppingBag strokeWidth={1} />}
            className="w-full mt-4 p-2 bg-gray-900 text-white hover:bg-black"
            onPress={() => navigate("/checkout")}
          >
            Оформить заказ
          </Button>
        </div>
      )}
    </div>
  );
}
