import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { SearchBar } from "./components/Searchbar";
import { movies } from "./data/data";
import "./styles/style.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [greeting, setGreeting] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSearchBar, setOpenSeachBar] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const closeModal = () => {
    setOpenSeachBar(false);
  };
  const openModal = () => {
    setOpenSeachBar(true);
  };
  return (
    <main className="w-full">
      <section className="w-full min-h-screen">
        <Header openModal={openModal} />
        <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        {openSearchBar ? (
          <SearchBar
            setOpenSeachBar={setOpenSeachBar}
            closeModal={closeModal}
          />
        ) : null}
        {openSidebar && <Sidebar />}
        <div className="container mx-auto mt-20">
          <h1 className="font-serif font-bold text-5xl text-center">
            {greeting}
          </h1>
          <p className="text-center">
            <i>Wellcome to Flix Nomad</i>
          </p>
          <div className=" w-full">
            <hr className=" mx-auto w-[90%] my-4" />
          </div>
          <div className="holder w-full mx-auto">
            {movies?.map((newMovie) => (
              <div
                className="overflow-hidden border-4 border-black rounded-lg"
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
