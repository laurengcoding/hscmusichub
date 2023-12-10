// ============================================================================
// URLs
// Replace the ALL_CAPS text (including the square brackets) with your actual
// values.
//
// Search API URL:
// http://omdbapi.com?s=[SEARCH_TERM]&apikey=[YOUR_API_KEY]
// e.g. http://omdbapi.com?s=sharknado&apikey=asdf1234
//
// Movie Details API URL:
// http://omdbapi.com?i=[MOVIE_IMDB_ID]&apikey=[YOUR_API_KEY]
// e.g. http://omdbapi.com?i=tt2724064&apikey=asdf1234
//
// Read more: https://www.omdbapi.com/
// ============================================================================


// ============================================================================
// PART 1
// ============================================================================
// When the user searches for a movie, send the search term to the OMDB search
// API URL and show the poster of each movie in the search results.
//
// - Listen for the form's submit event.
//   [!] Don't forget to prevent its default behaviour of submitting to the
//       server.
//
// - Get the search term the user typed in the text input.
//
// - Use OMDB's search API URL to get search results.
//   [!] Don't forget to make your function `async` so you can use `await`
//       inside of it.
//   [!] Check the JSON value OMDB returns in the console and make note of the
//       structure of the object and the properties you need.
//
// - Loop through the search results and create an <img> element showing the
//   movie's poster.
// - Add the <img> element to the `search-results` section.

const movieSearch = document.querySelector('.movie-search');
const searchTerm = document.querySelector('.search-term');
const submit = document.querySelector('.submit');
const searchResults = document.querySelector('.search-results');





// ============================================================================
// PART 2
// ============================================================================
// When the user clicks on a movie poster, get more details about the movie from
// OMDB and show the details in the modal dialog.

// - Listen for clicks on each movie poster
//   [!] You will need the movie's `imdbID` property. Where in your code do you
//       have access to this property? That's a good place to define your
//       function.
//
// - Get the movie's imdbID property
//
// - Use OMDB's Movie Details API URL to get details about the movie.
//   [!] Don't forget to make your function `async` so you can use `await`
//       inside of it.
//   [!] Check the JSON value OMDB returns in the console and make note of the
//       structure of the object and the properties you need.
//
// - Create new DOM elements for the movie details you want to display and add
//   the elements to the `modal-content` div.
//
// - To show the modal dialog, add a CSS class of `show` to the `.modal` div
//   using JavaScript.
//   [!] You don't need to hide the modal yourself. The `modal-close.js` script
//       takes care of that for you.
