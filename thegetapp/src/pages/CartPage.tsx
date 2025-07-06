import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@heroui/react";
import { backButton } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  isSubscription?: boolean;
};

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Spotify Premium",
    image: "/spotify.webp",
    price: 1299,
    quantity: 1,
    isSubscription: true
  },
  {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
    isSubscription: false
  },
   {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
    isSubscription: false
  },
   {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
     isSubscription: false
  },
   {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
     isSubscription: false
  },
   {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
     isSubscription: false
  },
   {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
     isSubscription: false
  },
   {
    id: "2",
    name: "Adidas Campus 00s",
    image: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    price: 8999,
    quantity: 2,
     isSubscription: false
  },
];

export default function CartPage() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

useEffect(() => {
      if (backButton.mount.isAvailable()) backButton.mount();
      if (backButton.show.isAvailable()) backButton.show();

      const handler = () => {
        navigate(-1);
        if (backButton.hide.isAvailable()){ 
        backButton.hide();
      }
    };
      if (backButton.onClick.isAvailable()) backButton.onClick(handler);
  
      return () => {
        if(backButton.offClick.isAvailable()){
          backButton.offClick(handler);
        }
        
        if (backButton.hide.isAvailable())
          {
             backButton.hide();
            
            }
      };
    }, [navigate]);


  return (
    <>
    <div className="p-2 pb-5 mt-[110px]">
      <h1 className="text-xl font-semibold mb-4 pl-4">Корзина</h1>

     {cartItems.map((item) => (
  <div
    key={item.id}
    className="flex mb-4 border-b pb-4"
  >
    <img
      src={item.image}
      alt={item.name}
      className={`object-contain rounded ${
        item.isSubscription
          ? 'w-[100px] h-[100px] ml-[50px]'   // для подписок — маленькое изображение
          : 'w-[250px] h-[250px]' // для обычных товаров — больше
      }`}
    />
    <div className="flex-1">
      <h2 className="text-sm font-medium">{item.name}</h2>
      <div className="text-sm text-gray-500">
        {item.price.toLocaleString("ru-RU")} ₽
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Button isIconOnly variant="light" >
          <Minus size={12} />
        </Button>
        <span className="w-6 text-center">{item.quantity}</span>
        <Button isIconOnly variant="light" >
          <Plus size={12} />
        </Button>
      </div>
    </div>
    <Button variant="light" isIconOnly>
      <Trash2 size={20} />
    </Button>
  </div>
))}

   
     
    </div>
       <div className="sticky bottom-[90px] z-50 p-4 pt-2 bg-white">
         <div className=" flex justify-between items-center text-lg font-semibold">
        <span>Итого:</span>
        <span>{total.toLocaleString("ru-RU")} ₽</span>
      </div>

      <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
        Оформить заказ
      </Button>
      </div>
      </>
  );
}
