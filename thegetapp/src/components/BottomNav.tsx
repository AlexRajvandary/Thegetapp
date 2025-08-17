import { Home, ShoppingCart, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar, Badge } from "@heroui/react";
import { MotionDiv } from "../components/common/motion";
import { useCartStore } from "../store/cartStore"; // путь проверь

const tabs = [
  { name: "Главная", path: "/", icon: Home },
  { name: "Корзина", path: "/cart", icon: ShoppingCart },
  { name: "Профиль", path: "/user", icon: User },
];

export default function MobileBottomNav() {
  const location = useLocation();
  const avatarUrl = localStorage.getItem("avatarUrl");

  // Общее количество товаров в корзине
  const cartCount = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div
      className="fixed pb-[10px] bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center h-[90px] z-50"
      style={{ paddingBottom: "calc(30px + env(safe-area-inset-bottom))" }}
    >
      {tabs.map(({ name, path, icon: Icon }) => {
        const isActive = location.pathname === path;

        const renderIcon = () => {
          if (name === "Профиль") {
            return <Avatar className="w-6 h-6" src={avatarUrl || undefined} />;
          }

          const iconElement = (
            <Icon
              className={`w-6 h-6 transition-colors duration-300 ${
                isActive ? "text-blue-600" : "text-gray-400"
              }`}
            />
          );

          // Только для корзины добавляем Badge
          if (name === "Корзина" && cartCount > 0) {
            return (
              <Badge
                content={cartCount > 9 ? "9+" : cartCount}
                shape="circle"
                size="md"
                className="absolute -top-1 -right-2 bg-red-500 text-white"
              >
                {iconElement}
              </Badge>
            );
          }

          return iconElement;
        };

        return (
          <NavLink
            key={name}
            to={path}
            className="relative flex flex-1 flex-col items-center justify-center text-[8px] h-full"
          >
            <div className="relative">
              {renderIcon()}
            </div>

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
