import { card } from './card';
import { genresDropdownList } from './genres-list';
import { contentNavbar } from './content-navbar';
import { wishListMoviesComponent } from './wishListMovies.component';

export const content = (movies, genres, wishlistMovies) => {
  try {
    const { trendingMovies, topRatedMovies, arrivalMovies } = movies;

    const contentHtmlString = `  
        <div class="content">
        ${contentNavbar(genres)}            
            <section class="section--movies active section--trending-movies">              
              <div class="movies__container">
                ${card(trendingMovies)}
              </div>
            </section>
            
            <section class="section--movies section--top-rated-movies">              
              <div class="movies__container">
                ${card(topRatedMovies)}
              </div>
            </section>
            
            <section class="section--movies section--new-arrival-movies">              
              <div class="movies__container">
                ${card(arrivalMovies)}
              </div>
            </section>

            <section class="section--movies section--wishlist-movies">
              ${wishListMoviesComponent(wishlistMovies)}
            </section>

        </div>
      `;

    return contentHtmlString;
  } catch (error) {
    console.log(error);
  }
};
