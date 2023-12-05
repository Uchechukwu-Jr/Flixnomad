import "../styles/style.css";
import { useParams } from "react-router-dom";
import { movies } from "../data/data";

const MoviePage = () => {
  const { id } = useParams();
  const movie = movies?.find((movie) => movie.id === id);

  if (!movie) {
    return (
      <article className="red mx-auto my-20">
        <h1 className="font-serif font-bold text-5xl text-center">
          Movie not Found
        </h1>
      </article>
    );
  }
  return (
    <article className="red mx-auto my-20">
      <h1 className="font-serif font-bold text-5xl text-center">
        {movie.name}
      </h1>
      <p className="text-center mx-1 text-xl">
        <i>{movie.details}</i>
      </p>
      <div className=" w-full">
        <hr className=" mx-auto w-[90%] my-4" />
      </div>
      <div className="w-full ">
        <img
          src="https://i.ibb.co/q05szzS/IMG-20230825-213957-122.jpg"
          alt={movie.name}
          className=" w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto rounded-lg"
        />
      </div>
    </article>
  );
};

export default MoviePage;
