import { movies } from "../data/data";
import "../styles/style.css";

const Movies = () => {
  return (
    <article className="red mx-auto my-20">
      <h1 className="font-serif font-bold text-5xl text-center">Movies</h1>
      <p className="text-center">
        <i>Discover Latest and Trending Movies</i>
      </p>
      <div className=" w-full">
        <hr className=" mx-auto w-[90%] my-4" />
      </div>
      <div className="holder w-[95%] mx-auto">
        {movies?.map((newMovie) => (
          <>
            <div
              className="tooltip cursor-pointer overflow-hidden border-4 border-black rounded-lg"
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
                <h1 className="text-4xl font-bold">
                  Fucking is good for the health
                </h1>
                <br />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error eum reprehenderit nostrum non et fugiat autem quae neque
                  tenetur eaque voluptas nobis aliquam velit esse in, tempore
                  quos nihil cumque.
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
  );
};

export default Movies;
