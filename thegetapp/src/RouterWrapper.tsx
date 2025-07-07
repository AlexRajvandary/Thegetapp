import {
  HeroUIProvider
} from "@heroui/react";
import {
  useNavigate,
  useHref,
  Routes,
  Route
} from 'react-router-dom';

import App from './pages/App';
import UserPage from "./pages/UserPage";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./components/Mainlayout";
import SearchPage from "./pages/SearchPage";

export default function RouterWrapper() {
  const navigate = useNavigate();
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <Routes>
          {/* Страницы с нижней навигацией */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartPage />} />
           <Route path="/orders" element={<Orders />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
    
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </HeroUIProvider>
  );
}