import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import * as Types from "../types";

const API_KEY = "ba3f75f852b3a396276a63f8443d6676";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("cannot get API:", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("cannot get trending API:", error);
  }
};

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&original_language=en-us`
    );
    dispatch({
      type: Types.GET_TOP_RATED_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("cannot get top API:", error);
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&genres_ids=28`
    );
    dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("cannot get acction API:", error);
  }
};

export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("cannot get comedy API:", error);
  }
};

export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("cannot get horror API:", error);
  }
};

export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("cannot get ROMANCE API:", error);
  }
};

export const getDocumenttariesMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&genres_ids=99`
    );
    dispatch({
      type: Types.GET_DOCUMENTTARIES_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("cannot get documentaries API:", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};

export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&&include_adult=false&query=${keywords}`
    );
    dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Search movie error:", error);
  }
};
