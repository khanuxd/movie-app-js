import { fetchSingleMovie, config } from '../data/data';
import { loader } from '../components/loader';
import { singleMovieContent } from './single-movie-content';
import { header } from './header';
import { footer } from './footer';

export const singleMoviePage = async (movieImage) => {
  const root = movieImage.parentNode.parentNode.parentNode.parentNode;

  let rootHtmlString;
  //Showing the loader when the document start loading
  rootHtmlString = loader();
  root.innerHTML = rootHtmlString;

  try {
    //fetching data from API
    const { id, genresString } = movieImage.dataset;
    const movie = await fetchSingleMovie(id, config);
    movie['genresString'] = genresString;
    console.log(movie);

    setTimeout(() => {
      rootHtmlString = `      
        ${header(movie)}
         ${singleMovieContent(movie)}
        ${footer()}
      `;
      //replace the loader with the populated data
      root.innerHTML = rootHtmlString;
    }, 1500);
  } catch (error) {
    console.log(error);
  }
};
