import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { SearchBar } from "./components/Searchbar";
import { newMovies } from "./data/data";
import "./styles/style.css";

function App() {
  const [openSearchBar, setOpenSeachBar] = useState(false);
  const closeModal = () => {
    setOpenSeachBar(false);
  };
  const openModal = () => {
    setOpenSeachBar(true);
  };
  return (
    <main className="w-full">
      <section className="w-full min-h-screen dark:text-green-100 dark:bg-slate-800 duration-100">
        <Header openModal={openModal} />
        <Navbar />
        {openSearchBar ? (
          <SearchBar
            setOpenSeachBar={setOpenSeachBar}
            closeModal={closeModal}
          />
        ) : null}
        <div className="container mx-auto">
          <div className="holder w-full mx-auto">
            {newMovies?.map((newMovie) => (
              <div
                className="min-h-[310px] min-w-[200px] mx-1 overflow-hidden rounded"
                key={newMovie.id}
                style={{
                  backgroundImage: `url(${newMovie.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="pt-2 hidden text-center">{newMovie.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
