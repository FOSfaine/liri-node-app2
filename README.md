# liri-node-app2

# Project Title

This app is a "Siri"-type computer assistant programmed to return information for three types of queries: music (songs) from Spotify, concerts from Bandsintown, and movies from OMDB.

Using the `node liri.js [command-here]` command-line syntax, the user is able to make requests for information from the Spotify, Bandsintown, and Omdb api's.
 - `spotify-this-song [song-title-here]` returns information about artist, album, and preview URL for the song requested.
 - `concert-this [concert-title-here]` returns the concert information (venue, location, and dates) for the artist requested.
 - `movie-this [movie-title-here]` returns the year, ratings, plot summary, and reviews for the movie requested.
 - `do-what-it-says` goes to the `random.txt` file, grabs the commands found therein, and executes one of the four command functions (whichever is found written in the random.txt file). This command can be changed to any one of the 3 types listed above.

The LIRI app uses Node.js in the command line of your terminal and contains dependencies for `request`, `spotify`, `axios`, `fs`, and `moment.js` packages.


### Installing

To run this app, clone this app from the repo to your computer, go into the liri-node-app2 file from your terminal, and run `npm install` to download all the node dependencies mentioned above. 

To start the app, type commands in `node liri.js [command-here]` as referenced above. 


# Screenshots

### Spotify API
Running the command `node liri.js spotify-this-song "Shallow" ` will return the track info from Spotify.
![Spotify Command](/assets/SpotifyThisShallow.png)

### Bandsintown API
Running the command `node liri.js concert-this "Jason Mraz" ` will return the movie info from Bandsintown.
![ConcertThis Command](/assets/ConcertThisJasonMraz.png)

### OMDB API
Running the command `node liri.js movie-this "Top Gun" ` will return the movie info from OMDB.
![MovieThis Command](/assets/MovieThisTopGun.png)

### Node `fs` file reader
Running the command `node liri.js do-what-it-says` will read a command out of the `random.txt` file and perform it.  
![DoWhatItSays Command](/assets/DoWhatItSays.png)  

The `random.txt` file contians the command to Spotify the song "I Want It That Way". 
The `random.txt` file can be changed to perform any of the 3 commands listed above.
![RandomText Command](/assets/RandomText.png)

The site for ths app is published at: https://fosfaine.github.io/liri-node-app2/