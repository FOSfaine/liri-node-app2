# liri-node-app2

# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc



------------------------------------

# LIRI - Command Line Assistant
L.I.R.I. stands for Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data from various APIs. 

As the name suggests, LIRI is analagous to the iPhone's SIRI assistant, but rather than using speech, LIRI is controlled through written text.

The LIRI app uses Node.js in the command line of your computer and has dependencies for the `request`, `spotify`, and `twitter` Node packages. It also used the built-in `fs` package to read and write to text files.

The app features 4 different features using the `node liri.js [command-here]` syntax. Below are the command types...
  - `my-tweets` returns your Twitter account's 20 most recent tweets using the Twitter API.
  - `spotify-this-song [song-title-here]` returns the artist, album, and preview URL for a specific song using the Spotify API.
  - `movie-this [movie-title-here]` returns the year, rating, plot summary, reviews of a specific movie using the IMDb API.
  - `do-what-it-says` returns the result of a "random" result by reading the `random.txt` file and performing the command written in that file. This command can be changed to any one of the 3 types listed above.


# Instructions
Unfortunately, since this is a command line application, it **must be cloned down to your machine** to be demoed. After cloning down the repo to your computer, `cd` into the `liri-node-app` folder and run `npm install` to download all the 
node dependencies mentioned above. 

After the node packages, are installed...
  - You will need to set up the Twitter API (if you do not wish to demo the `my-tweets` command, you can skip this part)
    - You will need to get API keys for Twitter. Please refer to the [Twitter Apps page](https://apps.twitter.com/) to get a `consumer_key`, `consumer_secret`, `access_token_key`, and `access_token_secret`. You can also see the [npm page](https://www.npmjs.com/package/twitter) for more information.
    - After you get the API keys, open the `keys.js` file and paste them into the correpsonding locations in the `exports.twitterKeys` object.
    - Finally, you can open the `liri.js` file and change the `myTwitterUserName` variable to your twitter handle.
  - Note that the Spotify API and IMDb do not need special keys, so you can run the app with minimal setup if you wish to skip over the Twitter API functionality.

To run the app, simply use the `node liri.js [command-here]` format discussed above. Please refer to the screenshots for specific examples. Be sure that you `cd` into the `liri-node-app` folder before running the commands.


# Screenshots

### Spotify API
Running the command `node liri.js spotify-this-song My Name Is Jonas` will return the track info from Spotify.
![Spotify Command](/screenshots/spotify.png)  

  - Note that running `node liri.js spotify-this-song "My Name Is Jonas"` will produce the same result.

### OMDB API
Running the command `node liri.js movie-this` will return my 20 most recent tweets.
![Twitter Command](/screenshots/twitter.png)

  - Note that I have only tweeted 3 times ever, so that is why only 3 tweets are shown.

### IMDb API
Running the command `node liri.js movie-this Pulp Fiction` will return the movie info from IMDb.
![IMDb Command](/screenshots/imdb.png)  
   
  - Note that running `node liri.js spotify-this-song "Pulp Fiction"` will produce the same result.


### Node `fs` file reader
Running the command `node liri.js do-what-it-says` will read a command out of the `random.txt` file and perform it.
![Random Command](/screenshots/random.png)  
  
  - Note that in this case, the `log.txt` file contians the command to Spotify the song "I Want It That Way". The `log.txt` file can be changed to perform any of the 3 types of commands listed above.


### Error Handling
If the LIRI inputs are incomplete, the user will be prompted with a list of possible commands.
![Missing Command](/screenshots/error.png