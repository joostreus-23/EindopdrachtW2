
// Variabele

const radioBtns = document.querySelectorAll("#radio-buttons input");
const radioBtnslengte = radioBtns.length;
const ulMovies = document.querySelector("ul")
const liMovies = document.querySelector("li")
// const databaseLengte = database.length
const newLi = document.createElement("li");
const newA = document.createElement("a")
const parent = document.getElementById("movies")
const cild = document.querySelector("ul")


// const allMovies = movies.forEach(film => {
//     const newLi = document.createElement("li");
//     const poster = document.createElement("img");
//     const newA = document.createElement("a")
//     newA.href = "https://www.imdb.com/title/" + film.imdbID;
//     poster.src = film.Poster;
//     ulMovies.appendChild(newLi);
//     newLi.appendChild(newA);
//     newA.appendChild(poster);
// })


// radio buttons actie's

radioBtns.forEach(button => button.addEventListener('change', event => {
    const selected = event.target.value
    console.log(selected);
    // const delUl = parent.removeChild(cild)
    // const newUl = document.createElement("ul")
    if (selected == "radio-nieuwste") {

        const newMovies = movies.filter(films => films.Year > 2014).forEach(film => {

            const newUl = document.createElement("ul")
            const newLi = document.createElement("li");
            const poster = document.createElement("img");
            const newA = document.createElement("a")
            newA.href = "https://www.imdb.com/title/" + film.imdbID;
            poster.src = film.Poster;
            parent.appendChild(newUl);
            newUl.appendChild(newLi);
            newLi.appendChild(newA);
            newA.appendChild(poster);
        })
    } else if (selected == "avengers") {
        const AvengersFilter = movies.filter(film => film.Title.includes("Avengers"));
        const AvengersList = AvengersFilter.forEach(film => {
            const newUl = document.createElement("ul")
            const newLi = document.createElement("li");
            const poster = document.createElement("img");
            const newA = document.createElement("a")
            newA.href = "https://www.imdb.com/title/" + film.imdbID;
            poster.src = film.Poster;
            parent.appendChild(newUl);
            newUl.appendChild(newLi);
            newLi.appendChild(newA);
            newA.appendChild(poster);
        })
    } else if (selected == "x-men") {
        const xmenFilter = movies.filter(film => film.Title.includes("X-Men"));

        const xmenList = xmenFilter.forEach(film => {
            const newUl = document.createElement("ul")
            const newLi = document.createElement("li");
            const poster = document.createElement("img");
            const newA = document.createElement("a")
            newA.href = "https://www.imdb.com/title/" + film.imdbID;
            poster.src = film.Poster;
            parent.appendChild(newUl);
            newUl.appendChild(newLi);
            newLi.appendChild(newA);
            newA.appendChild(poster);
        }
        )
    } else if (selected == "princess") {
        const princessFilter = movies.filter(film => film.Title.includes("Princess"));

        const princessList = princessFilter.forEach(film => {
            const newUl = document.createElement("ul")
            const newLi = document.createElement("li");
            const poster = document.createElement("img");
            const newA = document.createElement("a")
            newA.href = "https://www.imdb.com/title/" + film.imdbID;
            poster.src = film.Poster;
            parent.appendChild(newUl);
            newUl.appendChild(newLi);
            newLi.appendChild(newA);
            newA.appendChild(poster);
        }
        )
    } else if (selected == "batman") {
        const batmanFilter = movies.filter(film => film.Title.includes("Batman"));

        const batmanList = batmanFilter.forEach(film => {
            const newUl = document.createElement("ul")
            const newLi = document.createElement("li");
            const poster = document.createElement("img");
            const newA = document.createElement("a")
            newA.href = "https://www.imdb.com/title/" + film.imdbID;
            poster.src = film.Poster;
            parent.appendChild(newUl);
            newUl.appendChild(newLi);
            newLi.appendChild(newA);
            newA.appendChild(poster);
        }
        )

    } else {
        const allMovies = movies.forEach(film => {
            const newUl = document.createElement("ul")
            const newLi = document.createElement("li");
            const poster = document.createElement("img");
            const newA = document.createElement("a")
            newA.href = "https://www.imdb.com/title/" + film.imdbID;
            poster.src = film.Poster;
            parent.appendChild(newUl);
            newUl.appendChild(newLi);
            newLi.appendChild(newA);
            newA.appendChild(poster);
        })
    }
}
))
