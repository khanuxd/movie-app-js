export const header = ({ title, image, rating, releaseDate, voteCount }) => {
    image = image.replace('w500', 'original');

    const headerHtmlString = `       
            <header class="header">
                <div class="header__navbar">
                    <div class="header__logo">
                        <a href="#">MOVIEBOX</a>
                    </div>
                    <div class="header__movie">
                        <nav class="header__movie--cat">
                            <ul>
                                <li>
                                    <a href="#">Trending</a>
                                </li>
                                <li>
                                <a href="#">Top Rated</a>
                                </li>
                                <li>
                                <a href="#">New Arrivals</a>
                                </li>
                                <li class="header__nav--dropdown">
                                <a href="#">Genre
                                    <i class="fas fa-chevron-down"></i>
                                    <ul class="header__dropdown--content">
                                        <li>
                                            <a href="#">Genre One</a>
                                        </li>
                                        <li>
                                            <a href="#">Genre Two</a>
                                        </li>
                                        <li>
                                            <a href="#">Genre Three</a>
                                        </li>
                                    </ul>
                                </li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                    <div class="header_button">
                        <div class="header__search">
                            <input type="text" placeholder="What are you looking?" id="header__search--input">
                            <i class="fas fa-search"></i>
                        </div>
                        <a href="#" class="button button--dark">SIGN UP</a>
                    </div>
                </div>
                <div class="header__movie--container">
                    <div class="header__movie--cover">
                        <img src=${image} alt="${title} poster" class="header__movie__img" />
                    </div>
                    <div class="header__movie--content">
                        <div class="header__movie--title--cta">
                            <div class="header__movie__title">
                                ${title}
                            </div>
                            <div class="header__movie-cta">
                                <button type="button" class="button--dark">Watch Trailer</button>
                                <button type="button" class="button--light">View Info</button>
                                <button type="button" class="button--light">+ Add to wishlist</button>
                            </div>
                        </div>
                        <div class="header__movie__rating--box">
                            <div class="header__rating--val">
                                <div>
                                    Rating<span> (${voteCount} reviews)</span>
                                </div>
                                <div class="stars--box">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
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


// // onScroll background for Header Nav

// import "../css/main.css"

/* let headerNav = document.querySelector('.header__navbar');

// onScroll effect for Header Top

window.onscroll = function () {
    scrollFunction();
};

const scrollFunction = () => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        headerNav.classList.add('bg');
    } else {
        headerNav.classList.remove('bg');
    }
} */