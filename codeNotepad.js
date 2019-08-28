var showConcertInfo = function (artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        var jsonData = response.data;
        if (!jsonData.length) {
            console.log("Nothing found for " + artist);
            return;
        }
        console.log("Upcoming shows for " + artist + ":");
        for (var i = 0; i < jsonData.length; i++) {
            var dat = jsonData[i];
            console.log(
                dat.venue.name +
                " " + "in " + " " +
                dat.venue.city +
                "," +
                (dat.venue.region || dat.venue.country) +
                " " +
                moment(dat.datetime).format("MM/DD/YYYY")
            );
        }
    });
};

//output for LIRI-MOVIES
var showMovieInfo = function (movieName) {
    if (movieName === undefined) {
        movieName = "Mr Nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy").then(function (respsone) {
        var jsonData = respsone.data;
        // * Title of the movie.
        console.log("Title: " + jsonData.Title);
        // * Year the movie came out.
        console.log("Year: " + jsonData.Year);
        // * IMDB Rating of the movie.
        console.log("Rated: " + jsonData.Rated);
        // * Rotten Tomatoes Rating of the movie.
        console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        // * Country where the movie was produced.
        console.log("Country: " + jsonData.Country);
        // * Language of the movie.
        console.log("Language: " + jsonData.Language);
        // * Plot of the movie.
        console.log("Plot: " + jsonData.Plot);
        // * Actors in the movie.
        console.log("Actors: " + jsonData.Actors);
    });
}