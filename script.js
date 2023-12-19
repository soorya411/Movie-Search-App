function searchMovie() {
    let moviename = document.getElementById("input").value
    if (moviename == '') {
        alert("Enter Movie name")
    }
    
    else {


        console.log(moviename);
        fetch(`https://www.omdbapi.com/?apikey=ddd5e7b5&t=${moviename}`)
            .then(data => data.json())
            .then(data => {
                displaymovie(data);

            })
    }

}
function displaymovie(data) {
    console.log(data);
    let result = document.getElementById("result")

    let output = ` <div style="background-color: black;padding-top: 50px;">
    <img style="object-fit:cover;" width="300px" height="300px" src="${data.Poster}">
    <h3 id="title" class="text-warning mt-3 mb-3"> ${data.Title} (${data.Year})</h3>
    <p style="width: 300px,align-items:center" id="plot" class="text-white">${data.Plot}</p>
    <p id="director" class="text-white">Director : ${data.Director}</p>
    <p id="actor" class="text-white">Actors : ${data.Actors}</p>
    <p id="rating" class="text-white">Internet Movie Database : ${data.imdbRating}</p>
    </div>

    `

    result.innerHTML = output;

}