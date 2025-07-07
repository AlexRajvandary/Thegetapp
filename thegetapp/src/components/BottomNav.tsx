import { Home, ShoppingCart, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar } from "@heroui/react";
import { MotionDiv } from "../components/common/motion";

const tabs = [
  { name: "Главная", path: "/", icon: Home },
  { name: "Корзина", path: "/cart", icon: ShoppingCart },
  { name: "Заказы", path: "/orders", icon: ShoppingCart },
  { name: "Профиль", path: "/user", icon: User },
];

export default function MobileBottomNav() {
  const location = useLocation();
  const avatarUrl = localStorage.getItem("avatarUrl");

  return (
    <div
      className="fixed pb-[10px] bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center h-[90px] z-50"
      style={{ paddingBottom: "calc(30px + env(safe-area-inset-bottom))" }}
    >
      {tabs.map(({ name, path, icon: Icon }) => {
        const isActive = location.pathname === path;

        const renderIcon = () =>
          name === "Профиль" ? (
            <Avatar className="w-6 h-6" src={avatarUrl || undefined} />
          ) : (
            <Icon
              className={`w-6 h-6 transition-colors duration-300 ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`}
            />
          );

        return (
          <NavLink
            key={name}
            to={path}
            className="relative flex flex-1 flex-col items-center justify-center text-[8px] h-full"
          >
            {renderIcon()}
            <span
              className={`mt-1 text-[10px] ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {name}
            </span>

            {isActive && (
              <MotionDiv
                layoutId="active-tab-indicator"
                className="absolute top-0 left-0 w-full h-[2px] rounded-full bg-blue-600"
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
              />
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
