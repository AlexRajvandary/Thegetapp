import { Outlet } from "react-router-dom";
import MobileBottomNav from "../components/BottomNav"

export default function MainLayout() {
  return (
    <div className="pb-20"> {/* отступ под навигацию */}
      <Outlet />
      <MobileBottomNav />
    </div>
  );
}
