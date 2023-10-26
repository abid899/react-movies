import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../style/moviedetail.css";
// import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
import Footer from "./Footer";
import gambar from "../asset/images/notfound_image.jpg";
import poster from "../asset/images/notfound_backdroup_image.jpg";
import { Nav, Container, Row, Col, NavbarBrand } from "react-bootstrap";
import logo from "../asset/images/logo.png";
import "../style/NavigationbarDetailPage.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [moviedetail, setMoviedetail] = useState({});
  const [recomendedMovie, setRecomendedMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((results) => {
        setMoviedetail(results.data);
      });
  }, [id]);

  //recomended movie
  const getRecomendedMovie = async () => {
    const movie = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    setPopularMovie(movie.data.results);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/recommendations`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((results) => {
        setRecomendedMovie(results.data.results);
      });
  }, [id]);

  // //search
  const getMovie = async () => {
    const movie = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    return movie;
  };

  useEffect(() => {
    getMovie().then((result) => {
      setPopularMovie(result.data.results);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 0) {
      const query = searchMovie(q);
    } else {
      getRecomendedMovie();
    }
  };

  const searchMovie = (q) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/search/movie?query=${q}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((results) => {
        setPopularMovie(results.data.results);
      });
  };

  //mengatur panjang title
  const shortenText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  //runtime error

  return (
    <>
      <Nav
        id="navbar-detail"
        className="d-flex justify-content-center fixed-top "
      >
        <Container className="nav_con">
          <Row>
            <Col>
              <NavbarBrand
                id="navbrand-detail"
                className=" d-flex justify-content-start "
              >
                <Nav.Link href="/react-movies">
                  <img src={logo} className="logo_img" />
                </Nav.Link>
              </NavbarBrand>
            </Col>
            <Col ariant="6" className="d-flex justify-content-end ">
              <Nav.Item className="mt-2">
                <input
                  className="search_input ml-3 border"
                  type="text"
                  placeholder="Search..."
                  role="textbox"
                  onChange={({ target }) => search(target.value)}
                />
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </Nav>

      <div className="contaner ">
        <div
          className="parentcontainer "
          style={{
            backgroundImage:
              moviedetail.poster_path !== null
                ? `url(${process.env.REACT_APP_IMG_PATH}${moviedetail.backdrop_path})`
                : `url(${poster})`,
          }}
        >
          <div className="containerdata ">
            <div className="container data_film d-flex justify-content-start ">
              <div className="image ">
                <img
                  src={
                    moviedetail.poster_path !== null
                      ? `${process.env.REACT_APP_IMG_PATH}${moviedetail.poster_path}`
                      : `${gambar}`
                  }
                  alt=""
                />
              </div>
              <div className="info_film ">
                <div className="movie_title">{moviedetail.title}</div>
                <div className="rating_info d-flex justify-content-start ">
                  <div className="vote_info d-flex">
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <div className="vote-average">8.7</div>
                  </div>
                  <div className="tahun">
                    {new Date(moviedetail.release_date).getFullYear()}
                  </div>
                  <div className="grafik_info  text-light border">
                    4k ultra HD
                  </div>
                </div>
                <div className="tentang_film ">{moviedetail.overview}</div>
                <div className="play_button ">
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faPlay} id="icon" />
                    play
                  </button>
                  <button className="btn border btn_addlist">
                    <FontAwesomeIcon icon={faPlus} id="icon" />
                    add list
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recomended movie list */}
      {recomendedMovie.length !== 0 ? (
        <div>
          <div className="detail-movie-title ">Recomended Movie</div>
          <div className="movielist">
            <div className="list-recomended-movie d-flex justify-content-start mt-3">
              {recomendedMovie.map((result, index) => {
                return (
                  <div className="card2 " key={index}>
                    <Link to={`/movie/${result.id}`}>
                      <img
                        src={
                          result.poster_path !== null
                            ? `${process.env.REACT_APP_IMG_PATH}${result.poster_path}`
                            : `${gambar}`
                        }
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
          </div>
        </div>
      ) : null}

      <div className="detail-movie-title">Popular Movie</div>
      <div className="movielist">
        <div className="list-recomended-movie d-flex justify-content-start mt-3">
          {popularMovie.length > 0 ? (
            popularMovie.map((result, index) => {
              return (
                <div className="card2 " key={index}>
                  <Link to={`/movie/${result.id}`}>
                    <img
                      src={
                        result.poster_path !== null
                          ? `${process.env.REACT_APP_IMG_PATH}${result.poster_path}`
                          : `${gambar}`
                      }
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
            })
          ) : (
            <div id="not_found_search" className=" text-">
              Movie Not Available
            </div>
          )}
        </div>
      </div>
      <div className="detail-movie-title ">Trending Movie</div>
      <div className="movielist">
        <div className="list-recomended-movie d-flex justify-content-start">
          <CardComponent />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
