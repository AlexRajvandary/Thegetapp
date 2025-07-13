import { Avatar } from "@heroui/react";
import { backButton, requestContact } from "@telegram-apps/sdk-react";
import { ChevronRight, CirclePlus, Clock, Heart, Phone, Truck } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
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


  const settings = [
    {
      label: "Добавить номер телефона",
      icon: <Phone size={20} />,
      onClick: async () => {
        if (requestContact.isAvailable()) {
          const contact = await requestContact();
          localStorage.setItem("contact", contact.contact.phone_number);
          console.log(contact.contact.phone_number);
        }
      },
    },
    {
      label: "Способ доставки",
      icon: <Truck size={20} />,
      onClick: () => navigate("/user/delivery"),
    },
    {
      label: "Сохранённые товары",
      icon: <Heart size={20} />,
      onClick: () => navigate("/user/saved"),
    },
    {
      label: "История просмотров",
      icon: <Clock size={20} />,
      onClick: () => navigate("/user/history"),
    },
  ];

  const avatarUrl = localStorage.getItem("avatarUrl");
  const first_name = localStorage.getItem("first_name") ?? "Пользователь";
  const last_name = localStorage.getItem("last_name") ?? "Фамилия";
  const username = localStorage.getItem("user_name") ?? "Логин";

  return (
    <>
      <div className="relative flex flex-col items-center pt-[70px] pb-8 w-full overflow-hidden">
        {/* Фоновое изображение с прозрачностью */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-400" />

        {/* Контент поверх */}
        <Avatar
          className="w-24 h-24 mb-4 z-10"
          isBordered
          src={avatarUrl ?? undefined}
        />
        <div className="bg-white rounded-xl px-4 py-2 text-center backdrop-blur-sm shadow-sm z-10">
          <h1 className="text-2xl font-semibold">
            {first_name} {last_name}
          </h1>
          <h1 className="text-gray-500">@{username}</h1>
        </div>
      </div>
      <div className="bg-white divide-y rounded-md shadow-sm">
        {settings.map((item, idx) => (
          <button
            key={idx}
            onClick={item.onClick}
            className="w-full flex items-center justify-between px-4 py-4 text-left text-sm hover:bg-gray-100"
          >
            <div className="flex items-center gap-3 text-gray-800">
              {item.icon}
              {item.label}
            </div>

            {/* Меняем иконку только для первого элемента */}
            {idx === 0 ? (
              <CirclePlus className="text-gray-400" />
            ) : (
              <ChevronRight className="text-gray-400" />
            )}
          </button>
        ))}
      </div>

    </>
  );
}
