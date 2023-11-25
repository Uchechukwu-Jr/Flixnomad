const Navbar = () => {
  const options = [
    {
      icon: "home",
      text: "./",
    },
    {
      icon: "film",
      text: "film",
    },
    {
      icon: "tv",
      text: "series",
    },
    {
      icon: "list",
      text: "menu",
    },
  ];
  return (
    <nav className="w-full fixed bottom-0 bg-slate-200 text-black dark:bg-slate-950 dark:text-white">
      <div className=" text-center whitespace-nowrap">
        {options?.map((opt) => (
          <button
            key={opt.text}
            className="px-3 py-1 leading-9 text-2xl duration-100 dark:bg-slate-800 bg-gray-100 rounded my-1 mx-3"
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
