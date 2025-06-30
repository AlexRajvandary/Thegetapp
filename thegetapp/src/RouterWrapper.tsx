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
import About from './pages/About';
import Catalog from './pages/Catalog';
import Product from './pages/ProductPage';
import UserPage from "./pages/UserPage";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Order from "./pages/Order";

export default function RouterWrapper() {
  const navigate = useNavigate();
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:orderId" element={<Order/>} />
      </Routes>
    </HeroUIProvider>
  );
}