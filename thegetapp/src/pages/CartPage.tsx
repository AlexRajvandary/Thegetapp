import { ShoppingBag, Trash2 } from "lucide-react";
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
    <div className="bg-[#f5f5f5]">
    <div className="p-2 pb-5 pt-[110px]">
      <h1 className="text-xl font-semibold mb-4 pl-4">Корзина</h1>

     {cartItems.map((item) => (
  <div
  key={item.id}
  className="flex mb-2 mx-4 rounded-md bg-white h-[200px]"
>
  <div className="w-[200px]">
    <img
      src={item.image}
      alt={item.name}
      className={`rounded-l ${
        item.isSubscription
          ? 'w-[100px] h-[100px] ml-[50px] mt-[50px] object-contain'
          : 'w-[190px] h-[200px]'
      }`}
    />
  </div>

  {/* Правая колонка */}
  <div className="flex flex-col justify-between flex-1 p-1">
    <div>
      <h2 className="text-[16px] font-normal">{item.name}</h2>
      <div>Sizes</div>
    </div>
       <div className="mt-auto flex items-center justify-between">
    <div className="text-[18px] font-medium text-black">
      {item.price.toLocaleString("ru-RU")} ₽
    </div>
    
    <Button
      variant="light"
      isIconOnly
      className="ml-2"
    >
      <Trash2 size={20} />
    </Button>
  </div>
    
  </div>
</div>
))}
    </div>
       <div className="sticky bottom-[90px] z-50 py-4 px-8 pt-2 bg-white">
         <div className=" flex justify-between items-center text-lg font-semibold">
        <span>Итого:</span>
        <span>{total.toLocaleString("ru-RU")} ₽</span>
      </div>

      <Button startContent={<ShoppingBag strokeWidth={1}/>} className="w-full mt-4 p-2 bg-gray-900 text-white hover:bg-black">
        Оформить заказ
      </Button>
      </div>
      </div>
  );
}
