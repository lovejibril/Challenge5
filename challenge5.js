





var movieTitle = [" Nausicaä of the Valley of the Wind ", " Castle in the Sky ", " My Neighbor Totoro ", " Kiki's Delivery Service ", " Porco Rosso ", " Princess Mononoke"]
var FilmName = document.querySelector(".FilmName")
// movieTitle.forEach(function(element){
//     var space = "      "
//     FilmName.innerHTML += `<p>${element},</p> `
    
// });

let movieLink = ["https://m.media-amazon.com/images/M/MV5BZWFkN2ZhODAtYTNkZS00Y2NjLWIzNDYtNzJjNDNlMzAyNTIyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg", "https://images-na.ssl-images-amazon.com/images/I/91DoU3%2BT-6L._SL1500_.jpg", "https://i.ebayimg.com/images/g/d1oAAOSw-EBZsUPm/s-l500.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg/220px-Porco_Rosso_%28Movie_Poster%29.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOcGXTzSzoKyVwjNcLMlnGIPOrpH8VSo-XA&usqp=CAU" ]
movieLink.forEach(function(element, index){
    var display = document.querySelector(".display")
    display.innerHTML += `<div class="movie-title"><center>${movieTitle[index]}</center><img src="${element}"></div>`
    // display.innerHTML += `<img src="${element}">`
    
    // display.innerHTML += `<p class="movie-title">${movieTitle[index]}</p>`
});
function submit(){
    var newMovieTitle = document.querySelector("#MovieTitle").value;
    var newMovieLink = document.querySelector("#MovieLink").value;
    var display = document.querySelector(".display")

    movieTitle.unshift(newMovieTitle)
    movieLink.unshift(newMovieLink)
    movieTitle.pop()
    movieLink.pop()

    // erase existing content in display
    display.innerHTML = ""
    
    // document.write(movieTitle)
    movieLink.forEach(function(element, index){
        var display = document.querySelector(".display")
        display.innerHTML += `<div class="movie-title"><center>${movieTitle[index]}</center><img src="${element}"></div>`
    });
   
}



