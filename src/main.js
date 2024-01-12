import { generateMovieCards } from "./movie.js";
import { handleSearch } from "./search.js";

const searchInput = document.querySelector("#search-input");
searchInput.focus();

const form = document.querySelector("#search-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  handleSearch(searchInput.value);
});
if (document.querySelector("#card-list")) {
  generateMovieCards();
}
