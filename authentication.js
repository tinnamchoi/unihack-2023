var client_id = 'f92fd28be38945ba94229da71cd26566';
var redirect_uri = 'http://localhost:8080/';
var scope = 'playlist-read-private user-top-read';
var url = 'https://accounts.spotify.com/authorize';

url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
