import { Avatar } from "@heroui/react";
import { ChevronRight, Clock, Heart, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();

  const settings = [
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
        <div
          className="absolute inset-0 opacity-30 bg-blue-200"
          style={{
            backgroundImage: "url('bg.svg')",
            backgroundSize: "300px auto",
            pointerEvents: "none", // чтобы не блокировал клики
          }}
        />

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

      <div className="px-4">
        <div className="bg-white divide-y rounded-md mx-4 shadow-sm">
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
              <ChevronRight className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
