import { Avatar, Button } from "@heroui/react";

type User = {
  name: string;
  email: string;
  avatarUrl?: string;
};

const mockUser: User = {
  name: "Алексей Иванов",
  email: "alex@example.com",
  avatarUrl: "https://i.pravatar.cc/150?u=alex",
};

export default function UserPage() {
  // В реальном приложении user берётся из контекста/глобального состояния
  const user = mockUser;

  const handleLogout = () => {
    // TODO: добавить логику выхода, очистки сессии и редиректа
    alert("Выход из аккаунта");
  };
  const avatarUrl = localStorage.getItem("avatarUrl");
   const first_name = localStorage.getItem("first_name");
    const last_name = localStorage.getItem("last_name");
  return (
    <div className="p-4 pt-10">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-24 h-24 mb-4" src={avatarUrl!}/>
        <h1 className="text-2xl font-semibold">{first_name}</h1>
        <p className="text-gray-500">{last_name}</p>
      </div>

      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Настройки профиля</h2>

        {/* Пример полей для редактирования — можно заменить на настоящие input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Имя</label>
          <input
            type="text"
            defaultValue={user.name}
            className="w-full border rounded px-3 py-2"
            disabled
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            defaultValue={user.email}
            className="w-full border rounded px-3 py-2"
            disabled
          />
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white" onClick={handleLogout}>
          Выйти из аккаунта
        </Button>
      </div>
    </div>
  );
}
