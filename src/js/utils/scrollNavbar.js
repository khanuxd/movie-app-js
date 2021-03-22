export const scrollFunction = (headerNav) => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    headerNav.classList.add('scroll');
    headerNav.querySelector('.button--dark').classList.add('scroll');
    headerNav.querySelector('.button--light').classList.add('scroll');
    headerNav.querySelector('.header__search--input').classList.add('scroll');
  } else {
    headerNav.classList.remove('scroll');
    headerNav.querySelector('.button--dark').classList.remove('scroll');
    headerNav.querySelector('.button--light').classList.remove('scroll');
    headerNav
      .querySelector('.header__search--input')
      .classList.remove('scroll');
  }
};
