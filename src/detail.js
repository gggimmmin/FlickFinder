// detail.js
//영화 상세 정보 가져옴
async function fetchMovieDetails(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjRkY2E3YzRhYjRjOGY3Zjc5NjA0ZWRkNTQwMjE2NiIsInN1YiI6IjY1OTNiNzljZWJiOTlkNWUxN2EwMTRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BzYyp6rUTuS2MYX8KCIEgGrkns1anoyP2yhoqvkXv-Q"
    }
  };
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KO`, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch movie details. Status: ${response.status}`);
  }
  const data = await response.json();
  console.log("Fetched movie details:", data);
  return data;
}

//영화 credits 가져옴
async function fetchMovieCredits(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjRkY2E3YzRhYjRjOGY3Zjc5NjA0ZWRkNTQwMjE2NiIsInN1YiI6IjY1OTNiNzljZWJiOTlkNWUxN2EwMTRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BzYyp6rUTuS2MYX8KCIEgGrkns1anoyP2yhoqvkXv-Q"
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KO`, options);
  const data = await response.json();
  console.log("Fetched movie Cast:", data);
  return data;
}

document.addEventListener("DOMContentLoaded", async () => {
  // URL에서 'id'라는 query parameter의 값을 가져옵니다.
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  console.log(movieId);
  if (movieId) {
    try {
      // 영화 상세 정보를 가져옵니다. detail과 credit정보를 한번에 함께 가져오려고 promise.all썻다.. 뭐라는지모르겟다..
      const [movieDetails, movieCredits] = await Promise.all([fetchMovieDetails(movieId), fetchMovieCredits(movieId)]);
      // 가져온 상세 정보를 표시합니다.
      displayDetail(movieDetails, movieCredits);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
});

const displayDetail = async (movieDetails, movieCredits) => {
  const containerDetail = document.querySelector("#details-container");
  let movieDetail = await createMovieDetail(movieDetails, movieCredits);
  containerDetail.innerHTML = movieDetail;
};

const createMovieDetail = (detail, credits) => {
  const genres = detail.genres.map(genres => genres.name).join(",");
  const director = credits.crew.find(person => person.job === "Director").name;
  const majorCast = credits.cast
    .slice(0, 5)
    .map(person => person.name)
    .join(",");
  let detail_html = `
  <div class="movie-detail-container">
    <img src="https://image.tmdb.org/t/p/w500/${detail.poster_path}" alt="영화 이미지" class="movie-img"/>
    <div class="movie-info">
      <h2 class="movie-title">${detail.original_title}</h2>
      <div class="movie-ratings">
        <h4 class="movie-rate">⭐ ${detail.vote_average}</h4>
        <span class="movie-vote">(${detail.vote_count}명)</span>
      </div>
      <div class="movie-detail">
        <span class="movie-date">개봉연도: ${detail.release_date}</span>
        <h3 class="movie-genres">장르: ${genres}</h3>
        <h3 class="movie-director">감독: ${director ? director : "N/A"}</h3>
        <h3 class="movie-cast">등장인물: ${majorCast}</h3>
      </div>
      <p class="movie-desc">${detail.overview}</p>
    </div>
  </div>`;
  return detail_html;
};
