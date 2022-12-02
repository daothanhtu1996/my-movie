import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "./MovieRow";
import * as ACTION from "../store/actions";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import "./styles.scss";

function Contents(props) {
  const dispatch = useDispatch();
  const [scrollY, setScollY] = useState(0);

  const handelScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScollY(scrollY);
  };

  useEffect(() => {
    handelScrollY();
    window.addEventListener("scroll", handelScrollY);
    return () => {
      window.removeEventListener("scroll", handelScrollY);
    };
  }, []);
  const {
    NetflixOriginals,
    TrendingMovie,
    TopRatedMovies,
    ActionMovies,

    HorrorMovies,
    RomanceMovies,
    ComedyMovies,
    DocumenttariesMovies,
  } = useSelector((state) => state.infoMovies);

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    dispatch(ACTION.getNetflixOriginals());
    dispatch(ACTION.getTrendingMovies());
    dispatch(ACTION.getTopRatedMovies());
    dispatch(ACTION.getActionMovies());
    dispatch(ACTION.getComedyMovies());
    dispatch(ACTION.getHorrorMovies());
    dispatch(ACTION.getRomanceMovies());
    dispatch(ACTION.getDocumenttariesMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieRow
        movies={NetflixOriginals}
        title="NetflixOriginals"
        isBaner={true}
        idSection="new"
      />
      <MovieRow
        idSection="trending"
        movies={TrendingMovie}
        title="TrendingMovie"
      />
      <MovieRow
        idSection="topRated"
        movies={TopRatedMovies}
        title="TopRatedMovies"
      />
      <MovieRow idSection="action" movies={ActionMovies} title="ActionMovies" />
      <MovieRow idSection="comedy" movies={ComedyMovies} title="ComedyMovies" />
      <MovieRow idSection="horor" movies={HorrorMovies} title="HorrorMovies" />
      <MovieRow
        idSection="romance"
        movies={RomanceMovies}
        title="RomanceMovies"
      />
      <MovieRow
        idSection="documentaries"
        movies={DocumenttariesMovies}
        title="DocumenttariesMovies"
      />
      <div
        className="goTotop"
        onClick={() => ScrollToTop()}
        style={{ visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}
      >
        <BsFillArrowUpCircleFill />
      </div>
    </div>
  );
}

export default Contents;
