export const singleMovieContent = ({
  backdropImage,
  genresString,
  homepage,
  overview,
  rating,
  title,
  voteCount,
  release_date,
  countries,
  videoKey,
}) => {
  const movieHtmlString = `
    
    <div class="single-movie__content">
        <div class="single-movie__img__container">
            <img src="${backdropImage}" />
        </div>
        <div class="movie__details__container">
            <h2 class="heading heading--sub movie__title">${title}</h2>
            <div class="movie__details__container">
                <span>${genresString}</span>
                <span>${release_date}</span>
                <span>${countries}</span>
            </div>
            <div class="header__movie-cta">
                <a href="https://www.youtube.com/watch?v=${videoKey}" class="button button--dark" target="_blank">Watch Trailer</a>                
                <button type="button" class="button button--light">+ Add to wishlist</button>
            </div>
            <div class="movie__overview">${overview}</div>
            <div class="movie__table table">
                <div class="row__heading">Rating:</div>
                <div class="row__content">${rating} (Based on ${voteCount} Reviews)</div>
                <div class="row__heading">Actor:</div>
                <div class="row__content">ActorName1, ActorName 2</div>
                <div class="row__heading">Director:</div>
                <div class="row__content">Director Name</div>
            </div>
        </div>
    </div>
    
    
    `;
  return movieHtmlString;
};
