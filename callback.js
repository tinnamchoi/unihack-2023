var hash = window.location.hash;

var access_token = hash.split('&')[0].split('=')[1];

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.setRequestHeader("Authorization", "Bearer " + access_token);
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

var response = JSON.parse(httpGet("https://api.spotify.com/v1/me"));

document.getElementById("display_name").innerHTML = response.display_name;