import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import { SearchBar } from "./components/Searchbar";
import { Sidebar } from "./components/Sidebar";
import { movies } from "./data/data";
import "./styles/style.css";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSearchBar, setOpenSeachBar] = useState(false);
  const [greeting, setGreeting] = useState("");

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
          <article className="red mx-auto my-20">
            <h1 className="font-serif font-bold text-5xl text-center">
              {greeting}
            </h1>
            <p className="text-center">
              <i>Wellcome to Flix Nomad</i>
            </p>
            <div className=" w-full">
              <hr className=" mx-auto w-[90%] my-4" />
            </div>
            <div className="holder w-[95%] mx-auto">
              {movies?.map((newMovie) => (
                <>
                  <div
                    className="cursor-pointer overflow-hidden border-4 border-black rounded-lg"
                    key={newMovie.id}
                    title={newMovie.name}
                    style={{
                      backgroundImage: `url(${newMovie.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </>
              ))}
            </div>
            <div className=" w-full">
              <hr className=" mx-auto w-[90%] my-4" />
            </div>
            <section className=" ml-5 mt-20">
              {movies?.map((movie) => (
                <>
                  <div className="flex">
                    <div>
                      <div
                        className="w-[200px] h-[300px]"
                        style={{
                          backgroundImage:
                            "url('https://i.ibb.co/q05szzS/IMG-20230825-213957-122.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    <div className="ml-2">
                      <h1 className="text-4xl font-bold">
                        Fucking is good for the health
                      </h1>
                      <br />
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Error eum reprehenderit nostrum non et fugiat
                        autem quae neque tenetur eaque voluptas nobis aliquam
                        velit esse in, tempore quos nihil cumque.
                      </p>
                    </div>
                  </div>
                  <div className=" w-full">
                    <hr className=" mx-auto w-[90%] my-4" />
                  </div>
                </>
              ))}
            </section>
          </article>
          <article className="green text-center mb-20">
            <div className=" lg:mt-20"></div>
            <h1 className="text-4xl font-bold">Movies by Genre</h1>
            <br />
            <div className="ml-2">
              <h1 className="text-2xl font-bold underline">Action</h1>
              <ol className="mb-2 mt-1 ">
                {movies?.map((movie) => (
                  <>
                    <li>{`${movie.name} ${movie.year}`}</li>
                  </>
                ))}
              </ol>
            </div>
            <div className="ml-2">
              <h1 className="text-2xl font-bold underline">Romance</h1>
              <ol className=" mb-2 mt-1">
                {movies?.map((movie) => (
                  <>
                    <li>{`${movie.name} ${movie.year}`}</li>
                  </>
                ))}
              </ol>
            </div>
            <div className="ml-2">
              <h1 className="text-2xl font-bold underline">Thriller</h1>
              <ol className=" mb-2 mt-1">
                {movies?.map((movie) => (
                  <>
                    <li>{`${movie.name} ${movie.year}`}</li>
                  </>
                ))}
              </ol>
            </div>
            <div className="ml-2">
              <h1 className="text-2xl font-bold underline">Crime</h1>
              <ol className="mb-2 mt-1 ">
                {movies?.map((movie) => (
                  <>
                    <li>{`${movie.name} ${movie.year}`}</li>
                  </>
                ))}
              </ol>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default App;
