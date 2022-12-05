const numberOfFiles = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMoviesDB = {
	count: numberOfFiles,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

const a = prompt('Один из последних просмотренных фильмов ?', '');
const b = prompt('На сколько очениваете его ?', '');
const c = prompt('Один из последних просмотренных фильмов ?', '');
const d = prompt('На сколько очениваете его ?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);

