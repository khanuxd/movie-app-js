import { starsRating } from '../utils/starsRating';

export const header = ({
  title,
  image,
  rating,
  releaseDate,
  voteCount,
  genresString,
  videoKey,
}) => {
  image = image.replace('w500', 'original');

  const headerHtmlString = `       
            <header class="header" id="header">
                <div class="header__navbar">
                    <div class="header__logo">
                        <a class="header__link" href="./index.html">MOVIEBOX</a>
                    </div>
                    <div class="header__button">
                        <div class="header__search">
                            <input type="text" placeholder="Mitä sinä looking for?" class="header__search--input">
                            <i class="fas fa-search header__search-icon"></i>
                        </div>
                        <a href="#" class="button button--light header__link">Log In</a>
                        <a href="#" class="button button--dark header__link">Sign Up</a>
                    </div>
                </div>
                <div class="header__movie--container">
                    <div class="header__movie--cover">
                        <img src=${image} alt="${title} poster" class="header__movie__img"/>
                    </div>
                    <div class="header__movie--content">
                        <div class="header__movie--title--cta">
                            <div class="header__movie__title">
                                ${title}
                            </div>
                            <div class="header__movie__genres">${genresString}</div>
                            <div class="header__movie-cta">
                                <a href="https://www.youtube.com/watch?v=${videoKey}" class="button button--dark" target="_blank">Watch Trailer</a>
                                <button type="button" class="button button--light">View Info</button>
                                <button type="button" class="button button--light">+ Add to wishlist</button>
                            </div>
                        </div>
                        <div class="header__movie__rating--box">
                            <div class="header__rating--val">
                                <div>
                                    Rating<span> (${voteCount} reviews)</span>
                                </div>
                                <div class="stars--box">
                                    ${starsRating(rating)}
                                </div>
                            </div>
                            <div class="header__movie__rating">
                                    ${rating}
                            </div>
                        </div>
                    </div>
                </div>
            </header>       
    `;

  return headerHtmlString;
};
