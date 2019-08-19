require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//***/concert-this***
//  node liri.js concert-this <artist/band name here>
//  This will search the Bands in Town Artist Event API ("https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal: 
//(1) Name of the venue
//(2) Venue location
//(3) Date of the Event (use Moment to format as "MM/DD/YYYY")

//***/spotify-this-song***
//  node liri.js spotify-this-song '<song name here>'
//  This will show the following informaiton about the song in your terminal window:
//(1) Artist(s)
//(2) The song's name
//(3) A preview link of the song from Spotify
//(4) The album that the song is from
//  If no song is provided then your program will default to "The Sign" but Ace of Base.
//You will utilize the node-spotify-api packae in order to retrieve song information from the Spotify Api.

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

//***/do-what-it-says***
//  Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//(1) It should run spotify-this-song for "I Want It That Way," as follows the text in random.txt.
//(2) Edit the text in random.txt to test out the feature for movie-this and concert-this.