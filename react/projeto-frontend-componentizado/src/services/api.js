import axios from "axios";

export const api = axios.create({
  baseURL: "https://search-celebrity-biography.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "28287e0b04mshd345577db422f35p1bfe9fjsnd9dda821acc9",
    "X-RapidAPI-Host": "search-celebrity-biography.p.rapidapi.com",
  },
});

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
});

//export default api;
