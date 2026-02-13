import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import Movie from "../components/Movie";
import GlitchText from "../components/GlitchText";
const Fav = () => {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <Movie movie={movie} key={movie.id}></Movie>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Start adding favorites</p>
      </div>
    );
  }
};

export default Fav;
