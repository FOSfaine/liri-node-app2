require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

var command = process.argv[2];
var arg2 = process.argv[3]

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

//***/concert-this***
//  node liri.js concert-this <artist/band name here>
//  This will search the Bands in Town Artist Event API ("https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal: 
//(1) Name of the venue
//(2) Venue location
//(3) Date of the Event (use Moment to format as "MM/DD/YYYY")
function concertThis() {

}

//***/movie-this***
//  node liri.js movie-this "<movie name here>"
//  This will output the following information to your terminal window:
//(1) Title of the movie
//(2) Year the movie came out
//(3) IMDB Rating of the movie
//(4) Rotten Tomatoes Rating of the movie
//(5) Country where the movie was produced
//(6) Language of the movie
//(7) Plot of the movie
//(8) Acctors in the movie
//  If the user doesn't type in a movie, the program will output data for the movie 'Mr. Nobody.'
//  You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
function concertThis() {

}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        console.log("data: " + data);
        var dataArr = data.split(",");
        console.log(dataArr);
        start(dataArr[0], dataArr[1]);

    })
}