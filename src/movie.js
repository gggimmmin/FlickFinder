// 1. 영화 데이터를 가져와서 화면에 나타내기
const sortButtons = document.querySelector(".header-sort");
const cardList = document.querySelector("#card-list");

export const generateMovieCards = async () => {
  let movies = await fetchMovieData();

  if (cardList) {
    function renderMovieCards() {
      cardList.innerHTML = movies
        .map(
          movie => `
            <li class="movie-card" id=${movie.id}>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3 class="movie-title">${movie.title}</h3>
                <p>${movie.overview}</p>
                <p>Rating: ${movie.vote_average}</p>
                <p>popular: ${movie.popularity}</p>
            </li>`
        )
        .join("");
    }

    // 이벤트 위임: 하위요소에서 발생한 이벤트를 상위요소에서 처리
    // 카드클릭시 상세페이지
    function handleClickCard({ target }) {
      // 카드 외 영역 클릭 시 무시
      if (target === cardList) return;
      let movieId;
      if (target.matches(".movie-card")) {
        movieId = target.id;
        alert(`영화 id: ${movieId}`);
      } else {
        movieId = target.parentNode.id;
        // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의 id로 접근
        alert(`영화 id: ${movieId}`);
      }
      if (movieId) {
        window.location.href = `detail.html?id=${movieId}`;
      }
    }
    // 정렬버튼 누르면 정렬되게하기 toprate: vote_average순 popular: popularity순
    function handleSortButtonClick({ target }) {
      const sortBy = target.id;

      if (sortBy === "sorttoprate") {
        // 정렬 기준을 변경하고 화면을 다시 렌더링
        movies.sort((a, b) => b.vote_average - a.vote_average);
      } else if (sortBy === "sortpopular") {
        movies.sort((a, b) => b.popularity - a.popularity);
      }
      renderMovieCards();
    }
    //카드에 클릭이벤트 넣기
    cardList.addEventListener("click", handleClickCard);
    //버튼에 클릭이벤트 넣기

    if (sortButtons) {
      sortButtons.addEventListener("click", handleSortButtonClick);
    }
    // 초기 렌더링
    renderMovieCards();
  }
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM2ZTFkNjQzMTNkMDY1ZjczYjkyYjliNTM4YmJjNSIsInN1YiI6IjY1OTNkMDkyZmMzMWQzNzI4NTQ2YjQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CkZC7SdOdnrzr2YHFLyd94sIAFIYTAK2sOqJHujnVCY"
    }
  };
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&include_adult=false", options);
  const data = await response.json();
  return data.results;
}
