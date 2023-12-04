/* eslint-disable react/prop-types */
import CloseButton from "../assets/icons/close-svgrepo-com.svg";
import { Sidebar } from "./Sidebar";

const MobileMenu = ({ openSidebar, setOpenSidebar }) => {
  return (
    <>
      <aside
        id="separator-sidebar"
        className="fixed md:hidden top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto h-screen bg-gray-200 dark:bg-gray-950">
          <img
            src={CloseButton}
            className="cursor-pointer hover:scale-125 w-[30px] h-[30px] absolute right-4"
            title="Close Menu"
            alt="Close"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
          <Sidebar />
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
