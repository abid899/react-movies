import { useEffect, useState } from "react";
import "../style/trending.css";

import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((result) => {
        setMovies(result.data.results);
      });
  }, []);
  return (
    <>
      <div className="trendingTitle" id="trending_title">
        TRENDING
      </div>
      <div id="trending" className="trending d-flex">
        {movies.map((result, index) => {
          return (
            <div
              id="card_container"
              className=" justify-content-start  pt-3"
              key={index}
            >
              <div className="card2">
                <a href="">
                  <img
                    src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`}
                    alt="movie"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Trending;
