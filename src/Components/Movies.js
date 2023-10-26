import CardComponent from "../Components/CardComponent";
import "../style/movies.css";
const Movies = () => {
  return (
    <>
      <div className="movies_container" id="movie">
        <div className="shadow"></div>
        <div className="moviesTitle">Movies</div>
        <div id="" className=" ">
          <div className="categori">Special & lates Movie</div>
          <div className="movies">
            <CardComponent />
          </div>
          <div className="categori">Multiplex Movie</div>
          <div className="movies">
            <CardComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
