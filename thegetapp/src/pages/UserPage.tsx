import { Avatar, Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();

  const avatarUrl = localStorage.getItem("avatarUrl");
  const first_name = localStorage.getItem("first_name") ?? "Пользователь";
  const last_name = localStorage.getItem("last_name") ?? "";

  return (
    <div className="p-4 pt-10 mt-[70px]">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-24 h-24 mb-4" src={avatarUrl ?? undefined} />
        <h1 className="text-2xl font-semibold">{first_name}</h1>
        <p className="text-gray-500">{last_name}</p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <h2 className="text-xl font-semibold mb-4">Мой профиль</h2>

        <Button
          className="w-full justify-start"
          onPress={() => navigate("/favorites")}
        >
          ❤️ Избранные товары
        </Button>

          <Button
          className="w-full justify-start"
          onPress={() => navigate("/orders")}
        >
          🎧 Мои подписки
        </Button>

        <Button
          className="w-full justify-start"
          onPress={() => navigate("/orders")}
        >
          📦 Мои заказы
        </Button>

        <Button
          className="w-full justify-start"
          onPress={() => navigate("/delivery")}
        >
          🚚 Данные доставки
        </Button>
      </div>
    </div>
  );
}
