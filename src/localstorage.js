const reviewCountText = document.getElementById("commentCount");
const detailContainer = document.getElementById("details-container");
const commentForm = document.getElementById("reviewInput");
const usernameElement = document.getElementById("username");
const commentList = document.getElementById("commentList");
const userPasswordElement = document.getElementById("password");

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");
console.log(movieId);

function submitReview() {
  const reviewContent = commentForm.value.trim();
  const username = usernameElement.value.trim();
  const userPassword = userPasswordElement.value.trim();
  if (reviewContent !== "" && username !== "" && userPassword !== "") {
    const reviewData = {
      id: new Date().getTime(),
      name: username,
      content: reviewContent,
      movieId: movieId,
      Password: userPassword
    };
    // console.log(reviewData);
    saveReview(reviewData);
    loadReviews(); // 리뷰 목록 갱신
  }
}
function loadReviews() {
  //폼 제출시 폼 비우기
  commentForm.value = "";
  usernameElement.value = "";
  userPasswordElement.value = "";
  commentList.innerHTML = ""; // 기존 댓글 목록 비우기
  const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const idFilterReviews = existingReviews.filter(review => review.movieId === movieId);
  if (idFilterReviews.length > 0) {
    idFilterReviews.forEach(review => {
      if (review.movieId === movieId) {
        const reviewItem = document.createElement("div");
        reviewItem.className = "reviewItem";
        reviewItem.innerHTML = `
        <p class="username">${review.name}</p>
        <input type="password" class="passwordval" data-review-id="${review.id}" placeholder="비밀번호">
        <button class = "deleteButton" data-review-id="${review.id}">삭제 </button>
        <button class = "updateButton" data-review-id="${review.id}">수정 </button>
        <p class="comment-content">${review.content}</p>`;

        commentList.appendChild(reviewItem);
      }
    });
    const reviewCountText = document.createElement("p");
    reviewCountText.className = "reviewCountText";
    reviewCountText.textContent = `REVIEW ${idFilterReviews.length}개`;
    commentList.insertBefore(reviewCountText, commentList.firstChild);
    //삭제버튼 이벤트 리스너 추가 삭제버튼에 data- 값을 주고 this.dataset.reviewid 삭제버튼을 누르면
    //삭제버튼의 데이터 값 ${review.id}를 가져옴
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(button => {
      button.addEventListener("click", function () {
        const reviewId = parseInt(this.dataset.reviewId);
        const inputPassword = document.querySelector(`.passwordval[data-review-id="${reviewId}"]`);
        const review = existingReviews.find(review => review.id === reviewId);
        if (inputPassword && inputPassword.value.trim() === review.Password) {
          deleteReview(reviewId);
          loadReviews();
        } else if (inputPassword.value.trim() === "") {
          alert("비밀번호를 입력해주세요!");
        } else {
          alert("비번번호를 확인해주세요");
        }
      });
    });
    const updateButton = document.querySelectorAll(".updateButton");
    updateButton.forEach(button => {
      button.addEventListener("click", function () {
        const reviewId = parseInt(this.dataset.reviewId);
        const inputPassword = document.querySelector(`.passwordval[data-review-id="${reviewId}"]`);
        const review = existingReviews.find(review => review.id === reviewId);
        if (inputPassword && inputPassword.value.trim() === review.Password) {
          updateReview(reviewId);
          loadReviews();
        } else if (inputPassword.value.trim() === "") {
          alert("비밀번호를 입력해주세요!");
        } else {
          alert("비번번호를 확인해주세요!");
        }
      });
    });
  } else {
    commentList.innerHTML = `<p class="noreview">아직 리뷰가 없습니다.</p>`;
  }
}
function updateReview(reviewId) {
  const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  // 특정 id의 리뷰 찾기
  const reviewToUpdate = existingReviews.find(review => review.id === reviewId); //파인드로 리뷰에 부여된 아이디값과
  //리뷰에 저장된 데이터 아이디값 (시간) 이 같은 객체를 가져옴
  console.log(reviewToUpdate);
  if (reviewToUpdate) {
    const updatedContent = prompt("수정할 내용을 입력하세요:", reviewToUpdate.content); //local storage의 value
    if (updatedContent !== null) {
      reviewToUpdate.content = updatedContent;
      localStorage.setItem("reviews", JSON.stringify(existingReviews));
      loadReviews();
    }
  }
}
function deleteReview(reviewId) {
  const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const updatedReviews = existingReviews.filter(review => review.id !== reviewId);
  console.log(updatedReviews);
  localStorage.setItem("reviews", JSON.stringify(updatedReviews));
}
//filter를 통해 reviewid와 다른 값만 남기고 저장
function saveReview(reviewData) {
  const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  existingReviews.push(reviewData);
  localStorage.setItem("reviews", JSON.stringify(existingReviews));
}
const form = document.querySelector("#inputForm");
// console.log(form);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitReview();
});
loadReviews(); // 페이지 로드 시 리뷰 목록 불러오기
