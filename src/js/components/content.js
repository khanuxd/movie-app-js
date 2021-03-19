import { card } from './card';
import { genresDropdownList } from './genres-list';

export const content = (movies, genres) => {

  let moviewish = JSON.parse(localStorage.getItem("wishList")) || []
  const onClickWish = () =>{
    console.log('clicked')
     moviewish = JSON.parse(localStorage.getItem("wishList")) || []
    }
  window.onclick = onClickWish;

  
  try {
    const { trendingMovies, topRatedMovies, arrivalMovies } = movies;

    const contentHtmlString = `  
        <div class="content">

            <nav class="navbar content__navbar">
              <div class="content__navbar__item active">Trending</div>
              <div class="content__navbar__item">Top Rated</div>
              <div class="content__navbar__item">New Arrivals</div>
              <div class="content__navbar__item">Wish List</div>
              <div class="content__navbar__item select--dropdown">${genresDropdownList(
                genres
              )}</div>
            </nav>
            
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
            <section class="section--movies active section--trending-movies">              
              <div class="movies__container onclick = "onClickWish()" >
                ${card(moviewish)}
              </div>
            </section>
        </div>
      `;

    return contentHtmlString;
  } catch (error) {
    console.log(error);
  }
};
