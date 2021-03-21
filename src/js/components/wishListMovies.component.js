import { card } from './card';

export const wishListMoviesComponent = (wishlistMovies) => {
  const wishListMoviesHtmlString = `
           
              <div class="movies__container">
                ${card(wishlistMovies)}
              </div>
          
    `;

  return wishListMoviesHtmlString;
};
