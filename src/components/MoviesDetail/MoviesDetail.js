import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setMovieDetail } from "../store/actions";

import "./styles.scss";

// const showModal =false;

function MoviesDetail(props) {
  const { movie, showModal } = props;

  const dispath = useDispatch();
  const handleCloseModal = () => {
    dispath(setMovieDetail(null));
  };
  return (
    <MovieDetailsModal className="movieDetailsModal">
      <div
        onClick={handleCloseModal}
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
      >
      </div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">
              {movie && (movie.title || movie.name)}
            </h1>
            <p className="statistical">
              <span className="rating">Rating :
                {movie && movie.vote_average * 10}%
              </span>
              <span className="popularity">Popularity: {movie && movie.popularity}</span>
            </p>
            <p className="releaseDate">
            Release Date :
              {movie &&
                (moment(movie.release_date).format("DD/MM/YY") ||
                  moment(movie.first_air_date).format("DD/MM/YY"))}
            </p>
            <p className="runtime">
              Runtime:
              {movie && (movie.runtime || movie.episode_run_time)}
            </p>
            <p className="overview"> {movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MovieDetailsModal>
  );
}

export default MoviesDetail;
const fadeIn = keyframes`
0%: {background:rgba(0,0,0,0)}
100%: {background:rgba(0,0,0,0.6)}

`;
const MovieDetailsModal = styled.div`
  .backdrop {
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }
`;
