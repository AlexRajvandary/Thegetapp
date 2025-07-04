import { Home, ShoppingCart, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar } from "@heroui/react";

const tabs = [
  { name: "Главная", path: "/", icon: Home },
  { name: "Корзина", path: "/cart", icon: ShoppingCart },
  { name: "Профиль", path: "/user", icon: User },
];

const MotionDiv = motion.div as React.FC<React.HTMLAttributes<HTMLDivElement>>;

export default function MobileBottomNav() {
  const location = useLocation();
  const avatarUrl = localStorage.getItem("avatarUrl");

  return (
    <div className="fixed pb-[10px] mb-[10px] bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center h-[70px] z-50">
      {tabs.map(({ name, path, icon: Icon }) => {
        const isActive = location.pathname === path;

           const renderIcon = () => {
          if (name === "Профиль") {
            return (
              <Avatar className="w-6 h-6" src={avatarUrl!}/>
            );
          }
          return (
            <Icon
              className={`w-6 h-6 transition-colors duration-300 ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`}
            />
          );
        };

        return (
          <NavLink
            key={name}
            to={path}
            className="relative flex flex-col items-center justify-center text-[8px]"
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
                className="absolute -top-[10px] w-14 h-[2px] rounded-full bg-blue-600"
              />
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
