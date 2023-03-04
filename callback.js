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
for (var i = 0; i < 13; i++) {
  console.log(genres[i] + ": " + count[i]);
}

var data = [[40.19, 44.47, 44.86, 34.04, 44.41, 42.57, 37.01, 47.78], 
            [59.36, 50.94, 54.35, 45.71, 52.94, 53.29, 51.22, 54.48], 
            [70.63, 72.49, 73.71, 61.46, 74.13, 70.43, 74.16, 70.5], 
            [76.69, 78.87, 79.98, 67.96, 79.26, 77.59, 74.48, 80.96], 
            [80.5,  81.49, 82.3,  74.68, 78.41, 83.3,  77.78, 83.63], 
            [36.91, 28.37, 30.67, 30.19, 27.33, 33.03, 27.68, 32.64], 
            [57.48, 54.85, 56.4,  50.25, 51.85, 58.26, 51.97, 58.02], 
            [73.58, 63.6,  65.11, 72.95, 57.26, 72.79, 66.11, 66.28], 
            [30.73, 39.32, 38.61, 27.57, 42.47, 33.1,  32.12, 40.53], 
            [54.84, 41.32, 45.11, 43.41, 43.66, 45.76, 41.84, 46.97], 
            [70.54, 61.32, 64.33, 60.48, 61.5,  65.47, 60.71, 65.92], 
            [48.83, 41.43, 44.57, 35.99, 41.21, 44.97, 41.26, 44.84],
            [53.74, 41.5,  44.59, 45.44, 37.25, 50.22, 43.09, 45.83]];

// create size 8 array of 0s
var sum = [0, 0, 0, 0, 0, 0, 0, 0];

for (var i = 0; i < 13; i++) {
  for (var j = 0; j < 8; j++) {
    sum[j] += data[i][j] * count[i];
  }
}

for (var i = 0; i < 8; i++) {
  console.log(sum[i]);
}

var type = "";

if (sum[0] > sum[1]) {
  type += "E";
} else if (sum[0] < sum[1]) {
  type += "I";
} else {
  type += "?";
}

if (sum[2] > sum[3]) {
  type += "N";
} else if (sum[2] < sum[3]) {
  type += "S";
} else {
  type += "?";
}

if (sum[4] > sum[5]) {
  type += "T";
} else if (sum[4] < sum[5]) {
  type += "F";
} else {
  type += "?";
}

if (sum[6] > sum[7]) {
  type += "J";
} else if (sum[6] < sum[7]) {
  type += "P";
} else {
  type += "?";
}

console.log(type);