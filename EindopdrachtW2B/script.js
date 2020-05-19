
// Variabele

const radioBtns = document.querySelectorAll("#radio-buttons input");
const movieUL = document.getElementById("dom-movies")

// Filter voor vanaf 2014

const newMovies = movies.filter(films => films.Year > 2014);

// Functie films naar de DOM

const MoviesToDom = filter => filter.forEach(film => {
    const newLi = document.createElement("li");
    const poster = document.createElement("img");
    const newA = document.createElement("a")
    newA.href = "https://www.imdb.com/title/" + film.imdbID;
    newA.target = '_blank';
    poster.src = film.Poster;
    movieUL.appendChild(newLi);
    newLi.appendChild(newA);
    newA.appendChild(poster);
})

// alle films naar de DOM
MoviesToDom(movies)

// // radio buttons actie's

radioBtns.forEach(button => button.addEventListener('change', event => {
    const selected = event.target.value

    // Filter voor de film namen moet in de radio buttons actie ivm filteren selected 
    const nameFilter = movies.filter(film => film.Title.includes(selected));
    // vorige selectie verwijderen
    movieUL.innerHTML = "";

    // Films met de juiste filter naar de DOM 
    if (selected == "radio-nieuwste") {
        MoviesToDom(newMovies);
    } else {
        MoviesToDom(nameFilter);
    }
}))



