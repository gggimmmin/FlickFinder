# Team Project - " FlickFinder "

### 프로젝트 소개
---
- **프로젝트 명** : FlickFinder - Movie search web
- **개발기간** : 2024.01.10 ~ 2024.01.15 (4일)
- **프로젝트 소개** : TMDB api 를 이용하여 현재 상영중인 영화, 최고 평점 영화, 인기있는 영화의 상세 정보와 평점을 보여주는 사이트입니다.
- **프로젝트 목표** : Javascript 문법 활용 능력, Vanila JS로 결과물 제작

### 팀원 소개

---
|                            김승희                            |                            조성준                           |                            김예린                            |                            김지민                            |   
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                          [@HuaHuaChiChi](https://github.com/HuaHuaChiChi)                           |                          [@tjdwns335](https://github.com/tjdwns335)                           |                          [@yeriniii](https://github.com/yeriniii)                           |                          [@gggimmmin](https://github.com/gggimmmin)                         |
|                           FlickFinder 팀장                           |                           FlickFinder 팀원                           |                           FlickFinder 팀원                           |                           FlickFinder 팀원                           | 
|                           FrontEnd                           |                           FrontEnd                           |                           FrontEnd                           |                           FrontEnd                           | 

### 🚦Project Rules

#### 개발환경
- **Environment** : Visual Sudio Code, git, github
- **Development** : HTML5, CSS3, Javascript
- **DB** : Local storage
- **Communication** : Slack, Notion, Figma, Zep

#### Github rules
- commit message : 구현 상태 상세하게 기록 남기기
- main branch 와 dev branch 분리

## 시작 가이드


### Installation

```bash
$ git clone 
$ cd
```

<br />

## 와이어 프레임

![15조 팀 프로젝트 와이어 프레임](https://github.com/HuaHuaChiChi/sparta_week2_teampjt/assets/142903244/6e553b3e-fb27-410c-8e7a-81e218231ba9)

## 프로젝트 화면 구성 및 기능

<br />

### 1. 기능 필수 구현 사항  

- TMDB api를 이용하기
- 영화 카드 클릭시 상세정보 페이지 구현
- 상세 페이지에서 영화 리뷰 작성 기능 구현
- Github PR 사용한 협업
- UX를 고려한 유효성 검사 구현

 <br /> 

 ### 2. 기능 선택 구현 사항 

 - CSS flex, grid 사용, 반응형 UI 구성
 - 상세페이지 리뷰 수정 및 삭제 기능 구현
 - 각 페이지 영화 카드 리스트 정렬 기능 (평점순, 인기도순)
 - Top rated, Popular, Now playing API 추가

<br />

### 3. 화면 구성

<br /> 

#### 🚩 메인 페이지

![main](https://github.com/HuaHuaChiChi/sparta_week2_teampjt/assets/142903244/87c0556b-8469-438c-8f7c-c00418425499)

#### 🚩 카테고리별 페이지 및 정렬 버튼

![pages](https://github.com/HuaHuaChiChi/sparta_week2_teampjt/assets/142903244/6c6a7f79-8155-4480-b61d-827f8b3af495)

#### 🚩 상세 페이지 및 리뷰 작성 기능

![reviews](https://github.com/HuaHuaChiChi/sparta_week2_teampjt/assets/142903244/693aa729-7558-42f4-be43-e7cc4f495dd7)




---

### 기능 담당


| 기능                               | 담당자 |
| ---------------------------------- | ------ |
| Localstorage를 통한 CRUD 구현<br/> 스크롤 이벤트 최적화 | 김승희 |
| 데이터 정렬, 스크롤 이벤트(정렬버튼 고정)<br/> 리뷰 디자인 초안            | 조성준 |
| 영화별 상세페이지 디자인 및 구현   | 김예린 |
| 영화 API 추가<br/> 메인페이지 및 검색 헤더 구현                            | 김지민 |


### 기능 소개

- **메인페이지** 

  - Navigationbar 상단 고정

  - 상단 Navbar를 통한 영화 검색 기능
 
  - 상단 Navbar를 통한 카테고리별 목록 이동
 

- **검색창** 

  - 영화 api id 값을 통한 영화 검색 기능

  - 입력한 문자를 포함하는 모든 결과 내역 제공
 
  - 검색어 자동 공백 제거, 소문자 변환 기능
 
  - 검색 기록 표시
 

- **카드 리스트 정렬** 

  - 평점순, 인기도순으로 구분해 내림차순으로 정렬


- **상세페이지** 

  - 클릭 한 영화 api id 값을 통한 상세페이지 이동
 
  - api 값에 안에 포함된 영화 제목, 별점, 인기투표, 개봉연도, 장르, 감독, 등장인물, 줄거리 표시
 
 
- **리뷰 작성** 

  - 영화 id 별로 상세 페이지 안에 리뷰 작성 가능

  - 로컬 스토리지를 활용한 리뷰 작성 기능 구현
 
  - 비밀번호 유효성 검사를 통한 리뷰 수정 및 삭제 기능
 
  - 리뷰 내용 스크롤 기능
