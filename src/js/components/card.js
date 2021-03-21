import { starsRating } from '../utils/starsRating';

export const card = (movies) => {
  let cardsHtmlString = '';
  movies.forEach(
    ({ id, title, image, rating, releaseDate, genresString, chosen }) => {
      cardsHtmlString += `          
            <div class="movie">
                <div class="movie__heart-icon ${
                  chosen ? 'chosen' : ''
                }" data-id="${id}" data-title="${title}" data-image="${image}" data-rating="${rating}" data-release-date="${releaseDate}" data-genres-string="${genresString}" data-chosen="${true}">
                    <i class="far fa-heart"></i>
                </div>     

                <div class="movie__img__container">
                    <img class="movie__img" src=${image} alt="${title} poster" />
                </div>
                
                <div class="movie__footer">
                    <div class="movie__title">${title}</div>                    
                    <div class="movie__rating__stars">
                        ${starsRating(rating)}
                    </div>                 
                    <div class="movie__genres">${genresString}</div>
                    <div class="movie__date">${releaseDate}</div>
                </div>
            </div>       
        `;
    }
  );

  return cardsHtmlString;
};
