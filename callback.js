var hash = window.location.hash;

var access_token = hash.split('&')[0].split('=')[1];

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.setRequestHeader("Authorization", "Bearer " + access_token);
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

var response = JSON.parse(httpGet("https://api.spotify.com/v1/me/top/artists?limit=50"));

console.log(response);

// create string array of const genres
var genres = ["punk", "jazz", "classical", "alternative rock", "rock", "reggae", "ambient", "pop", "metal", "hip-hop", "edm", "blues", "country", "soul"];
var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// in each item, count each genre by checking if string containing one of the genres array element
for (var i = 0; i < response.items.length; i++) {
  for (var j = 0; j < response.items[i].genres.length; j++) {
    for (var k = 0; k < genres.length; k++) {
      if (response.items[i].genres[j].includes(genres[k])) {
        count[k]++;
        break;
      }
    }
  }
}

// print out the count array
for (var i = 0; i < count.length; i++) {
  console.log(genres[i] + ": " + count[i]);
}