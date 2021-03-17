import '../css/main.css';
import { header } from './components/header';
import { content } from './components/content';
import { footer } from './components/footer';
import { fetchTrendingMovies } from './data/data';

window.addEventListener('load', async function () {
  try {
    const trendingMovies = await fetchTrendingMovies();
    const movies = { trendingMovies };
    const mostPopularMovie = trendingMovies[0];

    const root = document.querySelector('#root');
    const rootHtmlString = `
      ${header(mostPopularMovie)}
      ${content(movies)}   
      ${footer()}
    `;

    root.innerHTML += rootHtmlString;
  } catch (error) {
    console.log(error);
  }
});


