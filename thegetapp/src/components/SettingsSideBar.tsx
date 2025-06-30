
import { NavLink } from "react-router-dom";

function SidebarItem({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-2 px-2 py-2 transition-all duration-200
           hover:text-black hover:font-semibold ${isActive ? "font-semibold text-black" : "text-gray-700"}`
        }
      >
        {({ isActive }) => (
          <>
           {isActive ? <span className="text-black">●</span> : <span className="w-3" />}
            <span>{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default function SettingsSidebar() {
  return (
   <div className="w-40">
   <h2 className="text-xl font-semibold mb-8">Settings</h2>
  <ul className="space-y-1 px-2 py-[2px]">
    <SidebarItem to="profile" label="Profile"/>
    <SidebarItem to="security" label="Security"/>
    <SidebarItem to="notifications" label="Notifications"/>
    <SidebarItem to="my_sizes" label="My Sizes"/>
    <SidebarItem to="payments" label="Payments"/>
    <SidebarItem to="devices" label="Devices"/>
  </ul>
</div>
  );
}