import React, { useEffect, useRef, useState } from "react";

import "./styles.scss";
import { SmoothHorizontalScrolling } from "../../components/utils";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useViewport } from "../hooks";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
import Skeleton from "react-loading-skeleton";


function MovieRow(props) {

  const dispatch = useDispatch();
  
  const handelSetMovie = (movie) =>{
    dispatch(setMovieDetail(movie))
  }
  
  const sliderRef = useRef();
  const movieRef = useRef();
  const { movies, title, isBaner, idSection } = props;
  const [windowWidth] = useViewport();

  const [dragDown, setdragDown] = useState(0);
  const [dragMove, setdragMove] = useState(0);
  const [isDrag, setIsdrag] = useState(false);



  const handelScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handelScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handelScrollRight();
      if (dragMove > dragDown) handelScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);
  const onDragStart = (e) => {
    setIsdrag(true);
    setdragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsdrag(false);
  };

  const onDragEnter = (e) => {
    setdragMove(e.screenX);
  };

  return (
    <div className="movieRowContainer" id={idSection} draggable="false">
      <h1 className="heading">{title}</h1>
      <div
        ref={sliderRef}
        className="movieSider"
        draggable="true"
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onDragStart={onDragStart}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
                    ${
                      windowWidth > 1200
                        ? "360px"
                        : windowWidth > 992
                        ? "300px"
                        : windowWidth > 768
                        ? "250px"
                        : "200px"
                    }
                    )`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, i) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isBaner
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

              return (
                <div
                  key={i}
                  className="movieItem"
                  ref={movieRef}
                  draggable="false"
                  onClick={() =>handelSetMovie(movie)}
                >
                  <img src={imageUrl ||<Skeleton inline={true}  count={15} />} alt="" draggable="false" />
                  <div className="movieName">{movie.title || movie.name}</div>
                </div>
              );
            }
          })}
      </div>
      <div
        className={`btnRight ${isBaner && "inBaner"}`}
        onClick={handelScrollRight}
      >
        <GoChevronRight />
      </div>
      <div
        className={`btnLeft ${isBaner && "inBaner"}`}
        onClick={handelScrollLeft}
      >
        <GoChevronLeft />
      </div>
    </div>
  );
}

export default MovieRow;

