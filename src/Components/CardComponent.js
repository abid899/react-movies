import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CardComponent = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((result) => {
        setMovies(result.data.results);
      });
  }, []);

  //mengatur panjang title
  const shortenText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <div id="card_container" className="d-flex justify-content-start  pt-3 ">
        {movies.map((result, index) => {
          return (
            <div className="card2 " key={index}>
              <Link to={`/movie/${result.id}`}>
                <img
                  src={`${process.env.REACT_APP_IMG_PATH}${result.poster_path}`}
                  alt="movie"
                />
              </Link>
              <div className="text-light title">
                {shortenText(result.title, 15)}
              </div>
              <div className="infofilm d-flex justify-content-start">
                <div className="releasedate ">
                  {new Date(result.release_date).getFullYear()}
                </div>
                <div className="parent_icon d-flex justify-content-end pl-3">
                  <FontAwesomeIcon icon={faStar} className="icon" />
                  <div className="vote ">{result.vote_average}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardComponent;
