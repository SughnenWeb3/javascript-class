
let movies = [];
let nextId = 1; 
function addMovie(title, genre, year) {
  let movie = {
    id: nextId,
    title: title,
    genre: genre,
    year: year,
    watched: false
  };
  movies.push(movie);
  nextId++;
  console.log("Added movie: " + title);
}


function toggleWatched(id) {
  let foundMovie = null;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      foundMovie = movies[i];
      break;
    }
  }
  if (foundMovie !== null) {
    foundMovie.watched = !foundMovie.watched;
    console.log("Movie '" + foundMovie.title + "' is now " + (foundMovie.watched ? "watched" : "unwatched"));
  } else {
    console.log("Movie not found.");
  }
}


function deleteMovie(id) {
  let newMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id !== id) {
      newMovies.push(movies[i]);
    }
  }
  movies = newMovies;
  console.log("Deleted movie with ID " + id);
}


function listByGenre(genre) {
  let genreList = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.toLowerCase() === genre.toLowerCase()) {
      genreList.push(movies[i]);
    }
  }
  console.log("Movies in genre '" + genre + "':", genreList);
}


function listByWatched(watchedStatus) {
  let filtered = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].watched === watchedStatus) {
      filtered.push(movies[i]);
    }
  }
  console.log(watchedStatus ? "Watched Movies:" : "Unwatched Movies:", filtered);
}


function sortMovies(by) {
  if (by === 'year') {
    movies.sort(function(a, b) {
      return a.year - b.year;
    });
  } else if (by === 'title') {
    movies.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
  }
  console.log("Movies sorted by " + by + ":", movies);
}


addMovie("Contagion", "Medicine", 2011);
addMovie("Breaking Bad", "Crime", 2008);
addMovie("Zero Dark Thirty", "Terror", 2012);
toggleWatched(2);
listByGenre("Crime");
listByWatched(true);
sortMovies("title");
deleteMovie(1);
console.log("All movies:", movies);
