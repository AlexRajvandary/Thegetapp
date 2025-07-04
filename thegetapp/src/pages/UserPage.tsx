import { Avatar} from "@heroui/react";

import CustomTabs from "../components/CustomTabs";

export default function UserPage() {
 

  const avatarUrl = localStorage.getItem("avatarUrl");
  const first_name = localStorage.getItem("first_name") ?? "Пользователь";
  const last_name = localStorage.getItem("last_name") ?? "Фамилия";
  const username = localStorage.getItem("user_name") ?? "Логин";

  return (<>
  
    <div className="flex flex-col items-center pt-[70px] pb-8 ">
        <Avatar className="w-24 h-24 mb-4" src={avatarUrl ?? undefined} />
        <h1 className="text-2xl font-semibold">{first_name} {last_name}</h1>
        <h1 className="text-gray-500">@{username}</h1>
      </div>

    <div className="p-4 pt-6">
     <CustomTabs/>
    
    </div>
    </>
  );
}
