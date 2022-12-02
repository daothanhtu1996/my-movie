import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { useViewport } from "../hooks";
import { getSearchMovies, setMovieDetail } from "../store/actions";
import "./styles.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMovies(props) {
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [dispatch, keywords]);

  console.log(SearchMovies);

  return (
    <div className="searchPane">
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
         
          {SearchMovies.map((movie, i) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  onClick={() => dispatch(setMovieDetail(movie))}
                  className="movieItem"
                  key={i}
                >
                  <img
                    src={imageUrl ||<Skeleton inline={true}  count={15} /> }
                    alt=""
                  />
                  <span> {movie.name|| movie.title}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="notFound">
          <h2>Not Found "keyword"</h2>
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
