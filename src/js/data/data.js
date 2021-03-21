const config = {
  apiKey: 'd62e25cc965456f2bfb986baf6380cbf',
  host: `https://api.themoviedb.org/3/`,
  imagePath: 'https://image.tmdb.org/t/p/w500/',
  getUrl: function (queryStr1, queryStr2) {
    return `${this.host}${queryStr1}${this.apiKey}${queryStr2}`;
  },
};

export const fetchTrendingMovies = async () => {
  const url = config.getUrl(
    'discover/movie?api_key=',
    '&language=en-US&sort_by=popularity.desc'
  );

  try {
    const response = await fetch(url);
    const { results } = await response.json();

    const trendingMovies = results.map(
      ({
        id,
        title,
        poster_path,
        vote_average,
        release_date,
        vote_count,
        genre_ids,
      }) => ({
        id,
        title,
        image: `${config.imagePath}${poster_path}`,
        rating: vote_average,
        voteCount: vote_count,
        releaseDate: release_date,
        genre_ids,
      })
    );

    return trendingMovies;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopRatedMovies = async () => {
  const url = config.getUrl(
    'discover/movie?api_key=',
    '&/discover/movie/sort_by=vote_average.desc&vote_average.gte=8&page=1'
  );

  try {
    const response = await fetch(url);
    const { results } = await response.json();

    const topRatedMovies = results.map(
      ({
        id,
        title,
        poster_path,
        vote_average,
        release_date,
        vote_count,
        genre_ids,
      }) => ({
        id,
        title,
        image: `${config.imagePath}${poster_path}`,
        rating: vote_average,
        voteCount: vote_count,
        releaseDate: release_date,
        genre_ids,
      })
    );

    return topRatedMovies;
  } catch (error) {
    console.log(error);
  }
};

export const fetchArrivalMovies = async () => {
  const url = config.getUrl(
    'discover/movie?api_key=',
    '&language=en-US&sort_by=release_date.desc&vote_average.gte=1&page=1'
  );

  try {
    const response = await fetch(url);
    const { results } = await response.json();

    const arrivalMovies = results.map(
      ({
        id,
        title,
        poster_path,
        vote_average,
        release_date,
        vote_count,
        genre_ids,
      }) => ({
        id,
        title,
        image: `${config.imagePath}${poster_path}`,
        rating: vote_average,
        voteCount: vote_count,
        releaseDate: release_date,
        genre_ids,
      })
    );

    return arrivalMovies;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenres = async () => {
  const url = config.getUrl('genre/movie/list?api_key=', '&language=en-US');
  try {
    const response = await fetch(url);
    const { genres } = await response.json();
    return genres;
  } catch (error) {
    console.log(error);
  }
};

export const getGenresString = (movies, genres) => {
  for (let movieKey in movies) {
    movies[movieKey].forEach((movie) => {
      movie.genresString = movie.genre_ids
        .map((id) => {
          for (let genreObj of genres) {
            if (id === genreObj.id) {
              return genreObj.name;
            }
          }
        })
        .join(' - ');
    });
  }
  return movies;
};

export const fetchWishlistMovies = () => {
  let wishListMovies = JSON.parse(localStorage.getItem('wishListMovies')) || [];
  wishListMovies = wishListMovies.map((movie) => ({ ...movie, chosen: true }));
  console.log(wishListMovies);
  return wishListMovies;
};

export const checkChosenMovies = (movies, wishListMovies) => {
  const { trendingMovies, topRatedMovies, arrivalMovies } = movies;
  checkIdenticalMovies(trendingMovies, wishListMovies);
  checkIdenticalMovies(topRatedMovies, wishListMovies);
  checkIdenticalMovies(arrivalMovies, wishListMovies);
  return movies;
};

const checkIdenticalMovies = (moviesFromAPI, moviesFromLocalStorage) => {
  for (let i = 0; i < moviesFromAPI.length; i++) {
    for (let j = 0; j < moviesFromLocalStorage.length; j++) {
      if (moviesFromAPI[i].id == moviesFromLocalStorage[j].id) {
        moviesFromAPI[i].chosen = true;
      }
    }
  }
};
