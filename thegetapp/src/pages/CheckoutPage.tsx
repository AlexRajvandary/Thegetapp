import { useCartStore } from "../store/cartStore";
import {
  Input,
  Button,
  Textarea,
  Autocomplete,
  AutocompleteItem,
} from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RowSteps from "../components/row-steps";

const pickupOptions = [
  "Boxberry, Москва, ул. Ленина 10",
  "СДЭК, Санкт-Петербург, Невский проспект 15",
  "DPD, Казань, ул. Баумана 3",
  "Почта России, Екатеринбург, ул. Мира 25",
  "PickPoint, Новосибирск, Красный проспект 50",
];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart } = useCartStore();
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [pickupPoint, setPickupPoint] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  // Имитация получения данных из профиля
  const fillFromProfile = () => {
     const firstName = localStorage.getItem("first_name") || null;
    const lastName = localStorage.getItem("last_name") || null;
    const name = firstName + " " + lastName;
    const profileName = name;
    setFullName(profileName);
  };

  const total = cart.reduce(
    (sum, item) => sum + parseInt(item.price) * item.quantity,
    0
  );

  return (
    <div className="p-4 pt-[110px] bg-[#f5f5f5] min-h-screen">
      <h1 className="font-extrabold text-[24px] mx-4 lg:mx-auto lg:max-w-[1440px] py-[5px] leading-[130%] tracking-[-0.01em]">Оформление заказа</h1>

      {/* Товары */}
      <div className="space-y-2 mb-6">
        {cart.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-3 rounded-md flex justify-between items-center"
          >
            <div>
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-xs text-gray-500">
                Размер: {item.size}, Цвет: {item.color}
              </div>
              <div className="text-sm">x{item.quantity}</div>
            </div>
            <div className="text-sm font-semibold">
              {(parseInt(item.price) * item.quantity).toLocaleString("ru-RU")} ₽
            </div>
          </div>
        ))}
      </div>

      {/* Форма */}
      <div className="space-y-4 bg-white p-4 rounded-md">
          <RowSteps
      defaultStep={2}
      steps={[
        {
          title: "ФИО",
        },
        {
          title: "Доставка",
        },
        {
          title: "Оплата",
        },
      ]}
    />
        <div className="flex items-center gap-2">
          <Input
            required
            label="Ваше ФИО"
            placeholder="Введите ФИО"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-1"
          />
          <Button onPress={fillFromProfile}>Из профиля</Button>
        </div>

        <Input
          label="Город"
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Autocomplete
          label="Пункт получения"
          placeholder="Начните вводить адрес"
          selectedKey={pickupPoint}
          onSelectionChange={(key) => setPickupPoint(key as string)}
        >
          {pickupOptions.map((address) => (
            <AutocompleteItem key={address}>{address}</AutocompleteItem>
          ))}
        </Autocomplete>
        <Input
          label="Получатель"
          placeholder="ФИО получателя"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        >
          {" "}
          <Button onPress={fillFromProfile}>Из профиля</Button>
        </Input>
        <Input
          label="Email"
          placeholder="Email для получения уведомлений"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          label="Комментарий к заказу"
          placeholder="Например, позвонить заранее"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <div className="bg-white mt-6 p-4 rounded-md">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Итого:</span>
          <span>{total.toLocaleString("ru-RU")} ₽</span>
        </div>

        <div className="flex justify-between gap-3">
          <Button className="w-1/2" onPress={() => {navigate(-1)}}>Отмена</Button>
          <Button className="w-1/2 bg-black text-white hover:bg-gray-900">
            Подтвердить заказ
          </Button>
        </div>
      </div>
    </div>
  );
}
