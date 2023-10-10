const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    if()
    const { info, ...otherProps } = movie;
    console.log(...otherProps);
    // const { title: movieTitle } = info;
    const {getFormattedTitle} = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = movie.getFormattedTitle().call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const filteredMovies = !filter
  ? movies
  : movies.filter((movie) => {
      movie.includes(filter);
    });

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (extraName === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
        set title(val) {
            if(val.trim() === ''){
                this._title = 'DEFAULT';
            } else {
                this._title = val;
            }
        },
        get title () {},
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle(){
        return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
