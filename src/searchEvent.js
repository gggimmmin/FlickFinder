import { handleSearch } from "./searchFunction.js";

const searchInput = document.querySelector("#search-input");
searchInput.focus();

const form = document.querySelector("#search-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  handleSearch(searchInput.value);
});
