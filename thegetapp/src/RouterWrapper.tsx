import { HeroUIProvider } from "@heroui/react";
import { useNavigate, useHref, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import App from "./pages/App";
import UserPage from "./pages/UserPage";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import MainLayout from "./components/Mainlayout";
import SearchPage from "./pages/SearchPage";
import DeliverySettingsPage from "./pages/DeliverySettings";
import SavedItemsPage from "./pages/SavedItemsPage";
import HistoryPage from "./pages/History";
import CheckoutPage from "./pages/CheckoutPage";
import ReviewPage from "./pages/ReviewPage";

export default function RouterWrapper() {
  const navigate = useNavigate();
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/user">
              <Route index element={<UserPage />} />
              <Route path="delivery" element={<DeliverySettingsPage />} />
              <Route path="saved" element={<SavedItemsPage />} />
              <Route path="history" element={<HistoryPage />} />
            </Route>
          </Route>

          <Route path="/review" element={<ReviewPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </AnimatePresence>
    </HeroUIProvider>
  );
}
