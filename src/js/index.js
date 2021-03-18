import '../css/main.css';
import { header } from './components/header';
import { content } from './components/content';
import { footer } from './components/footer';
import { loader } from './components/loader';
import { scrollFunction } from './utils/scrollNavbar';
import { onContentClick } from './utils/onContentClick';
import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchArrivalMovies,
  fetchGenres,
  getGenresString,
} from './data/data';
window.addEventListener('load', async function () {
  const root = document.querySelector('#root');
  let rootHtmlString;
  let movies;
  //Showing the loader when the document start loading
  rootHtmlString = loader();
  root.innerHTML = rootHtmlString;
  try {
    //fetching data from API
    const trendingMovies = await fetchTrendingMovies();
    const topRatedMovies = await fetchTopRatedMovies();
    const arrivalMovies = await fetchArrivalMovies();
    const genres = await fetchGenres();
    movies = {
      trendingMovies,
      topRatedMovies,
      arrivalMovies
    };
    movies = getGenresString(movies, genres);
    const mostPopularMovie = movies.trendingMovies[0];
    //I did not know how to check whether the data is ready to show up so I used a little trick with setTimeout :)))
    setTimeout(() => {
      rootHtmlString = `      
    ${header(mostPopularMovie)}
    ${content(movies)}   
    ${footer()}
  `;
      //replace the loader with the populated data
      root.innerHTML = rootHtmlString;
      //Adding events on DOM elements
      //1) on content navbar to show the current movie section
      const contentNavItems = document.querySelectorAll(
        '.content__navbar__item'
      );
      contentNavItems.forEach((navItem, index) =>
        navItem.addEventListener('click', function () {
          onContentClick(this, index);
        })
      );
      //2) Navbar scrolling effect
      const headerNav = document.querySelector('.header__navbar');
      console.log(headerNav);
      window.addEventListener('scroll', function () {
        scrollFunction(headerNav);
      });
    }, 1500);
  } catch (error) {
    console.log(error);
  }
});