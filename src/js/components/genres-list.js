export const genresDropdownList = (genres) => {
  const genresArray = genres.map((genreObj) => genreObj.name);

  const genresHtmlString = `        
        <select class="genres__list--dropdown" name="movie genres" id="movie-genres">
            ${getGenresName(genresArray)}
        </select>    
    `;
  return genresHtmlString;
};

const getGenresName = (genresArray) => {
  let genreOptions = `
    <option id="select__label" class="select__item selected">
    Genres
    </option>
  `;
  genresArray.forEach((genreName) => {
    genreOptions += `
    <option class="select__item" value="${genreName}">${genreName}</option>
    `;
  });
  return genreOptions;
};
