require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var axios = require("axios")
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

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
            console.log("do what it says")
            doWhatItSays();
            break;

        default:
            console.log("Not a recognized command");
    }
}

function spotifyThisSong(songName) {
    spotify
        .search({
                type: "track",
                query: songName
            },
            function (err, response) {
                var songs = response.tracks.items;
                for (var a = 0; a < 5; a++) {
                    console.log("Song name: " + songs[a].name);
                    console.log("Album: " + songs[a].album.name);
                    console.log("Preview url : " + songs[a].preview_url);
                    console.log("Artist name: " + songs[a].artists[0].name);
                    console.log("--------------------------------");
                }
            }
        )
}

function concertThis(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        var songsData = response.data;
        if (!songsData.length) {
            console.log("Nothing found for " + artist);
            return;
        }
        console.log("Upcoming shows for " + artist + ":");
        for (var a = 0; a < songsData.length; a++) {
            var res = songsData[a];
            console.log("Venue: " + res.venue.name +
                " " + "in" + " " +
                res.venue.city +
                " " +
                (res.venue.region) +
                " " +
                moment(res.datetime).format("MM/DD/YYYY"));
            console.log("----------------------------------------------------------------------------");
            console.log();
        }
    });
}

function movieThis(movieName) {
    if (movieName === undefined) {
        movieName = "Mr. Nobody";
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
        console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        console.log("data: " + data);
        var dataArr = data.split(",");
        console.log(dataArr);
        start(dataArr[0], dataArr[1]);
        console.log("--------------------------------");
    })
}