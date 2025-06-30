import Header from "../components/Header";
import Footer from "../components/Footer";
import { OrderTimeline, type StepDetails } from "../components/OrderTimeline";
import ImageGallery from "../components/ImageGallery";
import { Avatar, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Star } from "lucide-react";

const mockOrder = {
  id: "ORD123456",
  pictures: [
    "https://media-assets.grailed.com/prd/listing/temp/39c1ffcf7ec242dda0c4c589b7c6f5f6?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/39c1ffcf7ec242dda0c4c589b7c6f5f6?w=800",
    "https://media-assets.grailed.com/prd/listing/temp/39c1ffcf7ec242dda0c4c589b7c6f5f6?w=800",
  ],
  seller: {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  price: "$99.99",
  status: "Shipped",
  quantity: 2,
  createdAt: "2025-06-24T14:30:00Z",
  paymentMethod: "Credit Card",
  deliveryAddress: "123 Main Street, London, UK",
  trackingNumber: "TRACK123456789",
  estimatedDelivery: "2025-06-29",
  total: "$109.99",
};

export const orderSteps: StepDetails[] = [
  {
    title: "Создан",
    datetime: "2025-06-25 10:34",
  },
  {
    title: "Оплачен",
    datetime: "2025-06-25 10:40",
    extra: (
      <div>
        <p>Способ оплаты: Картой (Visa **** 1234)</p>
        <a href="/receipt-123.pdf" className="text-purple-600 underline">
          Скачать чек
        </a>
      </div>
    ),
  },
  {
    title: "Собран",
    datetime: "2025-06-25 15:20",
    extra: <p>Склад: Москва, ул. Складская 12</p>,
  },
  {
    title: "Отправлен",
    datetime: "2025-06-26 09:10",
    extra: (
      <div>
        <p>Трек-номер: RU1234567890</p>
        <p>Курьерская служба: СДЭК</p>
      </div>
    ),
  },
  {
    title: "Доставлен",
    datetime: "2025-06-26 18:45",
    extra: (
      <div>
        <p>Получено в пункте выдачи</p>
        <img
          src="https://th.bing.com/th/id/OIP.IVMZ6kzUJPi_lAJYJkQCFwHaE9?w=286&h=191&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
          alt="Доставленная коробка"
          className="w-48 h-auto mt-2 rounded shadow"
        />
      </div>
    ),
  },
];

export default function OrderPage() {
  const order = mockOrder;

  return (
    <>
      <Header />

      <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Order #{order.id}</h1>

        {/* Блок с карточкой и продавцом */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <ImageGallery images={order.pictures} />

          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={order.seller.avatar}
                alt={order.seller.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-lg font-semibold">{order.seller.name}</p>
            </div>
            <p className="text-gray-500">
              Status: <span className="font-medium">{order.status}</span>
            </p>
            <p className="text-gray-500">Quantity: {order.quantity}</p>
            <p className="text-gray-500">Price per unit: {order.price}</p>
            <p className="text-gray-500">Total: {order.total}</p>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="space-y-2 text-sm mb-8">
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(order.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Payment Method:</strong> {order.paymentMethod}
          </p>
          <p>
            <strong>Delivery Address:</strong> {order.deliveryAddress}
          </p>
          <p>
            <strong>Tracking Number:</strong> {order.trackingNumber}
          </p>
          <p>
            <strong>Estimated Delivery:</strong> {order.estimatedDelivery}
          </p>
        </div>
        <Card className="max-w-[380px] bg-white hover:bg-slate-200 transition-colors duration-300 rounded-none mt-[40px] shadow-none">
      <CardHeader className="flex justify-between items-center">
        {/* Левая часть: аватар + инфо */}
        <div className="flex gap-4 items-center">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            src="https://heroui.com/avatars/avatar-1.png"
          />
          <div className="flex flex-col items-start">
            <h4 className="text-medium font-semibold text-black">Zoey Lang</h4>
            <p className="text-sm text-default-400">128 отзывов</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#eab308" stroke="#eab308" />
              ))}
              <span className="text-xs text-default-500 ml-1">(5.0)</span>
            </div>
          </div>
        </div>
        <div>
        
        </div>
        
        
      </CardHeader>

      <CardBody className="px-4 py-2 text-sm text-black">
        <p>Seller description</p>
      </CardBody>

      <CardFooter className="flex gap-4 px-4 py-4">
       
      </CardFooter>
    </Card>
        {/* Кнопки */}
        <div className="flex gap-4 mb-10">
          <button className="bg-black text-white px-4 py-2 rounded">
            Contact Seller
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded">
            Download Invoice
          </button>
        </div>

        {/* Таймлайн */}
        <h2 className="text-2xl font-bold mb-4">Order Progress</h2>
          <OrderTimeline steps={orderSteps} />
      </div>

      <Footer />
    </>
  );
}
