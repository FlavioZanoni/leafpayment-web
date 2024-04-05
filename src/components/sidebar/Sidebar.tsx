import SidebarButton from "./SidebarButton";
import { sidebarMenus } from "./menus";
import Logo from "./Logo";
import { Router, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Logo />
          <ul className="space-y-2 font-medium">
            {sidebarMenus.map((menu) => {
              return (
                <SidebarButton
                  title={menu.title}
                  icon={menu.icon}
                  onClick={() => {
                    if (menu.link) navigate(menu.link);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
