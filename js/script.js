
'use strict';

document.addEventListener(`DOMContentLoaded`, () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll(".promo__adv"),
        image = document.querySelector('.promo__bg'),
        genre = document.querySelector(".promo__genre"),
        moviesList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(`form.add`),
        addInput = addForm.querySelector(`.adding__input`),
        checkbox = addForm.querySelector(`[type = 'checkbox']`);

        addForm.addEventListener(`submit`, (e) => {
            e.preventDefault();
            let newFilm = addInput.value;
            const favorit = checkbox.checked;

            if (newFilm) {
                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }

                if (favorit) {
                    console.log("Добавлен любимый фильм");
                }

            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            createMovieList(movieDB.movies, moviesList);
            e.target.reset();
            }
        });


        function deleteAdv(arr) {
    arr.forEach(item => {
        item.remove();
    });}
    deleteAdv(adv);


function changeStyle() {
    genre.textContent = "Драма";
    image.style.backgroundImage = `url('img/bg.jpg')`;
}
    changeStyle();

function sortAr(ar) {
    ar.sort();
}
 
function createMovieList(films, parent) {

    parent.innerHTML = "";
    sortAr(films);
    films.forEach((film, i) => {
     parent.innerHTML += `<li class="promo__interactive-item">${i+1} ${film}
     <div class="delete"></div>
 </li>`;
 });

document.querySelectorAll(`.delete`).forEach((btn, i) => {
    btn.addEventListener(`click`, () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(movieDB.movies, moviesList);
    });
});

}
createMovieList(movieDB.movies, moviesList);










});
