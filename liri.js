require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var axios = require("axios")
var fs = require("fs");

var command = process.argv[2];
var arg2 = process.argv[3];

if (!arg2) {
    arg2 = "I want it that way";
}

start(command, arg2);

function start(command, arg2) {
    switch (command) {
        case "spotify-this-song":
            spotifyThisSong(arg2);
            break;

        case "concert-this":
            concertThis(arg2);
            break;

        case "movie-this":
            movieThis(arg2);
            break;

        case "do-what-it-says":
            doWhatItSays();
            break;

        default:
            console.log("Not a recognized command");
    }
}

var spotify = new Spotify(keys.spotify);

function spotifyThisSong(songName) {
    spotify
        .search({
            type: "track",
            query: songName
        })
        .then(function (response) {
            var songs = response.tracks.items;
            for (var a = 0; a < 5; a++) {
                console.log("song name: " + songs[a].name);
                console.log("album: " + songs[a].album.name);
                console.log("preview url : " + songs[a].preview_url);
                console.log("artist name: " + songs[a].artists[0].name);
                console.log("--------------------------------");
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

var concertThis = function (artist) {
    axios.get("https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp&date").then(function (response) {
        var songsData = response.data;
        if (!songsData.length) {
            console.log("Nothing found for " + artist);
            return;
        }
        console.log("Upcoming shows for " + artist + ":");
        for (var a = 0; a < songsData.length; a++) {
            var res = songsData[i];
            console.log("Venue:" + res.venue.name +
                " " + "in " + " " +
                res.venue.city +
                "," +
                (res.venue.region || dat.venue.country) +
                " " +
                moment(res.datetime).format("MM/DD/YYYY"));
            console.log("--------------------------------");
        }
    });
}

var movieThis = function (movieName) {
    if (movieName === undefined) {
        movieName = "Mr. Nobody";
    }
}
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy").then(function (respsone) {
    var res = respsone.data;
    //Title of the movie.
    console.log("Title: " + res.Title);
    //Year the movie came out.
    console.log("Year: " + res.Year);
    //IMDB Rating of the movie.
    console.log("Rated: " + res.Rated);
    //Rotten Tomatoes Rating of the movie.
    console.log("Rotten Tomatoes Rating: " + res.Ratings[1].Value);
    //Country where the movie was produced.
    console.log("Country: " + res.Country);
    //Language of the movie.
    console.log("Language: " + res.Language);
    //Plot of the movie.
    console.log("Plot: " + res.Plot);
    //Actors in the movie.
    console.log("Actors: " + res.Actors);
    console.log("--------------------------------");
});

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        console.log("data: " + data);
        var dataArr = data.split(",");
        console.log(dataArr);
        start(dataArr[0], dataArr[1]);
        console.log("--------------------------------");
    })
}
doWhatItSays();

// var bandsInTown = {
//     provider: "bandsintown",
//     apiKey: "https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp&date=" + date
// }
// bandsInTown
//     .get({
//         artist: "pentatonix",
//         date: "01/01/2020"
//     })
//     .then(function (response) {
//             var songs = response.tracks.items;
//             for (var a = 0; a < 5; a++) {
//                 console.log("song name: " + songs[a].name);
//                 console.log("album: " + songs[a].album.name);
//                 console.log("preview url : " + songs[a].preview_url);
//                 console.log("artist name: " + songs[a].artists[0].name);
//                 console.log(response);
//                 console.log("--------------------------------");
//             });
//     }
// console.log(bandsInTown(artist, date));


// var nodeArgs = process.argv;
// var movieName = "";

// for (var i = 2; i < nodeArgs.length; i++) {

//     if (i > 2 && i < nodeArgs.length) {
//         movieName = movieName + "+" + nodeArgs[i];
//     } else {
//         movieName += nodeArgs[i];
//     }
// }

//     var queryUrl = "https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp&date=" + date;

//     axios.get(queryUrl).then(
//             function (response) {
//                 console.log("Release Year: " + response.data.Year);
//             })
//         .catch(function (error) {
//             if (error.response) {
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 console.log("---------------Data---------------");
//                 console.log(error.response.data);
//                 console.log("---------------Status---------------");
//                 console.log(error.response.status);
//                 console.log("---------------Status---------------");
//                 console.log(error.response.headers);
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 // `error.request` is an object that comes back with details pertaining to the error that occurred.
//                 console.log(error.request);
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 console.log("Error", error.message);
//             }
//             console.log(error.config);
//         });
// }
// movieThis();
// // axios.get(URL).then(function (response) {
// //     var jsonData = response.data;
// //     var showData = [
// //         "Title: " + jsonData.name,
// //         "Year: " + jsonData.year,
// //         "IMDB Rating: " + jsonData.rating.imdb,
// //         "Rotten Tomatoes Rating: " + jsonData.rating.rotten_tomatoes,
// //         "Country: " + jsonData.country,
// //         "Language: " + jsonData.language,
// //         "Plot: " + jsonData.plot,
// //         "Actors: " + jsonData.actors
// //     ].join(`\n\n`);

// //     console.log(showData);
// // });