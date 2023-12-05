import { useState, useEffect } from "react";
import { movies } from "../data/data";
import "../styles/style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [greeting, setGreeting] = useState("");
  let movieCount = 0;

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
    <article className="red mx-auto my-20">
      <h1 className="font-serif font-bold text-5xl text-center">{greeting}</h1>
      <p className="text-center">
        <i>Wellcome to Flix Nomad</i>
      </p>
      <div className=" w-full">
        <hr className=" mx-auto w-[90%] my-4" />
      </div>
      <div className="holder w-[95%] mx-auto">
        {movies?.map((newMovie) => {
          if (movieCount < 10) {
            movieCount++;
            return (
              <>
                <Link key={newMovie.id} to={`/movies/${newMovie.id}`}>
                  <div
                    className="tooltip cursor-pointer overflow-hidden border-4 border-black rounded-lg"
                    title={newMovie.name}
                    style={{
                      backgroundImage: `url(${newMovie.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </Link>
              </>
            );
          }
          return null;
        })}
      </div>
      <div className=" w-full">
        <hr className=" mx-auto w-[90%] my-4" />
      </div>
      <section className=" ml-5 mt-20">
        {movies?.slice(movieCount).map((movie) => (
          <>
            <div key={movie.id} className="flex">
              <div>
                <div
                  className="w-[200px] h-[300px] cursor-pointer"
                  title={movie.name}
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co/q05szzS/IMG-20230825-213957-122.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="ml-2">
                <h1 className="text-4xl font-bold">{movie.name}</h1>
                <br />
                <p>{movie.details}</p>
              </div>
            </div>
            <div className=" w-full">
              <hr className=" mx-auto w-[90%] my-4" />
            </div>
          </>
        ))}
      </section>
    </article>
  );
};

export default Home;
