import { genresDropdownList } from './genres-list';

export const contentNavbar = (genres) => {
  const contentNavbarHtmlString = `
            <nav class="content__navbar">
              <div class="content__navbar__item active">Trending</div>
              <div class="content__navbar__item">Top Rated</div>
              <div class="content__navbar__item">New Arrivals</div>
              <div class="content__navbar__item">Wish List</div>
              <div class="content__navbar__item select--dropdown">${genresDropdownList(
                genres
              )}</div>
            </nav>    
    `;

  return contentNavbarHtmlString;
};
