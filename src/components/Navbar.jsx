import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Navbar = ({ openSidebar, setOpenSidebar }) => {
  const options = [
    {
      icon: "home",
      text: "./",
      title: "Home",
    },
    {
      icon: "film",
      text: "movies",
      title: "Movies",
    },
    {
      icon: "tv",
      text: "series",
      title: "Series",
    },
  ];
  return (
    <nav className="w-full z-10 fixed bottom-0 bg-slate-200 text-black dark:bg-slate-950 dark:text-white">
      <div className=" text-center whitespace-nowrap">
        {options?.map((opt) => (
          <NavLink
            key={opt.text}
            to={opt.text}
            style={({ isActive }) => (isActive ? { color: "blue" } : {})}
          >
            <button
              className=" hover:opacity-70 px-3 py-1 leading-9 text-2xl duration-100 dark:bg-slate-800 bg-gray-100 rounded my-1 mx-3"
              title={opt.title}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          </NavLink>
        ))}
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="md:hidden hover:text-red-300 px-3 py-1 leading-9 text-2xl duration-100 dark:bg-slate-800 bg-gray-100 rounded my-1 mx-3"
          title={openSidebar ? "Close Menu" : "Open Menu"}
        >
          {openSidebar ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
