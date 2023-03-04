var hash = window.location.hash;

var access_token = hash.split('&')[0].split('=')[1];

console.log(access_token);
