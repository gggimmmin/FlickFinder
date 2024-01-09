// 2. 영화 검색
export const handleSearch = searchKeyword => {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach(card => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    const searchedValue = searchKeyword.replace(/\s/g, "").toLowerCase();
    const titleWithoutSpaces = title.replace(/\s/g, "");

    if (titleWithoutSpaces.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
