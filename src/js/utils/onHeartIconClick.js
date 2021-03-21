import { wishListMoviesComponent } from '../components/wishListMovies.component';

export const onHeartIconClick = (heartIcon) => {
  //1) getting movie data from heartIcon
  const {
    id,
    title,
    image,
    rating,
    releaseDate,
    genresString,
    chosen,
  } = heartIcon.dataset;
  const movie = { id, title, image, rating, releaseDate, genresString, chosen };
  //2) set movie into localStorage when get clicked
  let wishListMovies = JSON.parse(localStorage.getItem('wishListMovies')) || [];
  //2a) if there is no such movie, add it to the localStorage
  if (!wishListMovies.find((item) => item.id === movie.id)) {
    wishListMovies.push(movie);
    heartIcon.classList.add('chosen');
  } else {
    //2b) if the movie is already in the local storage, get rid of it and remove class chosen
    wishListMovies = wishListMovies.filter((item) => item.id !== movie.id);
    heartIcon.classList.remove('chosen');
  }

  localStorage.setItem('wishListMovies', JSON.stringify(wishListMovies));

  //3) re-render the wishlist section
  const contentElement = heartIcon.parentNode.parentNode.parentNode.parentNode;
  const wishListMoviesSection = contentElement.querySelector(
    '.section--wishlist-movies'
  );
  wishListMoviesSection.innerHTML = wishListMoviesComponent(wishListMovies);

  //4) grab heartIcons in wishList section which are just rendered and remove the movie if heart icon gets clicked
  const newWishListHeartIcons = wishListMoviesSection.querySelectorAll(
    '.movie__heart-icon'
  );
  newWishListHeartIcons.forEach((heartIcon) =>
    heartIcon.addEventListener('click', function () {
      onHeartIconClick(heartIcon);
    })
  );
};
