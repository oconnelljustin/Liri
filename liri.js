var keys = require('keys.js');

var Twitter = require('twitter');

var getMyTweets = function(){

var client = new Twitter (keys.twitterKeys);

var params = {screen_name: 'XMLBlockchain'};
client.get('statuses/user_timeline', params, function(error,tweets,response) {
    if(!error){
        console.log(tweets);

        for(var i=0; i<tweets.length; i++){
            console.log(tweets[i].created_at);
            console.log('');
            console.log(tweets[i].text);
        }
    }
});

}

var getMeSpotify = function(songName) {
    spotify.search({type: 'track', query: 'dancing in the moonlight'}, function(err, data) {
        if (err) {
            console.log('Error occured: ' + err);
            return
        }

        var songs = data.tracks.items;
        for (var i=0; i<songs.length; i++){
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(getArtistsNames));
            console.log('song name: '+songs[i].name);
            console.log('album: '+songs[i].album.name);
        }

        });

    }

   requestAnimationFrame('', function(error, response, body) {
       
   }

        console.log(data.tracks.items[0]);
    });
}

var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'my-tweets' :
        getMyTweets();
        break;
        case 'spotify-this-song':
        getMeSpotify(functionData);
        default:
        console.log('LIRI does not understand')
    }
}

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

