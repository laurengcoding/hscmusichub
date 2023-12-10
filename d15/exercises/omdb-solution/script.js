const apikey = 'da588dca';
const searchForm = document.querySelector('.movie-search');
const searchInput = document.querySelector('.search-term');
const searchResults = document.querySelector('.search-results');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

function createMovieElement(movie) {
  const poster = document.createElement('img');
  poster.src = movie.Poster;

  async function getMovie() {
    const id = movie.imdbID;
    const res = await fetch(`http://omdbapi.com?i=${id}&apikey=${apikey}`);
    const data = await res.json();
    modalContent.innerHTML = `
      <h3>${data.Title}</h3>
      <p>${data.Genre}</p>
      <p>${data.Plot}</p>
      <img src="${data.Poster}">
    `;
    modal.classList.add('show');
  }
  poster.addEventListener('click', getMovie);

  return poster;
}

async function getMovies(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    return
  }

  const res = await fetch(`http://omdbapi.com?s=${searchTerm}&apikey=${apikey}`);
  const data = await res.json();
  searchResults.innerHTML = '';
  const results = data.Search;
  if (results) {
    results.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      searchResults.append(movieElement);
    })
  } else {
    searchResults.innerHTML = '<p>No results</p>';
  }
}

searchForm.addEventListener('submit', getMovies);
