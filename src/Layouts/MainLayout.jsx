import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import { SearchBar } from "../components/Searchbar";
import { Sidebar } from "../components/Sidebar";
import { movies } from "../data/data";
import "../styles/style.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSearchBar, setOpenSeachBar] = useState(false);

  return (
    <main>
      <Header openSearchBar={openSearchBar} setOpenSeachBar={setOpenSeachBar} />
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      {openSidebar && (
        <MobileMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
      {openSearchBar && (
        <SearchBar
          setOpenSeachBar={setOpenSeachBar}
          openSearchBar={openSearchBar}
        />
      )}
      <div className="box">
        <aside className="blue bg-gray-200 dark:bg-gray-950">
          <div className="mt-10 px-3 py-4 overflow-y-auto">
            <Sidebar />
          </div>
        </aside>
        <section className="redGreenWrapper">
          <Outlet />
          <article className="green bg-gray-200 dark:bg-gray-950 text-center mb-20">
            <div className=" lg:mt-20"></div>
            <h1 className="text-4xl font-bold">Genres</h1>
            <br />
            <div className="ml-2 bg-slate-50 dark:bg-slate-800 rounded">
              <h1 className="text-2xl font-bold underline">Action</h1>
              <ol className="mb-2 mt-1 ">
                {movies?.map((movie) => (
                  <li key={movie.id}>{`${movie.name} ${movie.year}`}</li>
                ))}
              </ol>
            </div>
            <div className="ml-2 bg-slate-50 dark:bg-slate-800 rounded">
              <h1 className="text-2xl font-bold underline">Action</h1>
              <ol className="mb-2 mt-1 ">
                {movies?.map((movie) => (
                  <li key={movie.id}>{`${movie.name} ${movie.year}`}</li>
                ))}
              </ol>
            </div>
            <div className="ml-2 bg-slate-50 dark:bg-slate-800 rounded">
              <h1 className="text-2xl font-bold underline">Action</h1>
              <ol className="mb-2 mt-1 ">
                {movies?.map((movie) => (
                  <li key={movie.id}>{`${movie.name} ${movie.year}`}</li>
                ))}
              </ol>
            </div>
            <div className="ml-2 bg-slate-50 dark:bg-slate-800 rounded">
              <h1 className="text-2xl font-bold underline">Action</h1>
              <ol className="mb-2 mt-1 ">
                {movies?.map((movie) => (
                  <li key={movie.id}>{`${movie.name} ${movie.year}`}</li>
                ))}
              </ol>
            </div>
            <div className="ml-2 bg-slate-50 dark:bg-slate-800 rounded">
              <h1 className="text-2xl font-bold underline">Action</h1>
              <ol className="mb-2 mt-1 ">
                {movies?.map((movie) => (
                  <li key={movie.id}>{`${movie.name} ${movie.year}`}</li>
                ))}
              </ol>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default MainLayout;
