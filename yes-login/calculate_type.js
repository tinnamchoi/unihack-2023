var hash = window.location.hash;

if (hash != "") {
  window.location.hash = "";

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

  var n_genre = 14;
  var genres = ["punk", "jazz", "classical", "alternative rock", "rock", "reggae", "ambient", "pop", "metal", "hip hop", "electronic", "blues", "country", "soul"];
  var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < response.items.length; i++) {
    for (var j = 0; j < response.items[i].genres.length; j++) {
      for (var k = 0; k < n_genre; k++) {
        if (response.items[i].genres[j].includes(genres[k])) {
          count[k]++;
          break;
        }
      }
    }
  }

  for (var i = 0; i < n_genre; i++) {
    console.log(genres[i] + ": " + count[i]);
  }

  var data = [[11, 8, 9, 12, 8, 11, 11, 8],
              [6, 7, 7, 7, 6, 7, 7, 7],
              [5, 3, 3, 4, 3, 4, 3, 3],
              [1, 1, 1, 1, 2, 1, 1, 1],
              [2, 2, 2, 3, 1, 2, 2, 2],
              [13, 14, 14, 13, 14, 14, 14, 14],
              [7, 6, 6, 6, 7, 6, 6, 6],
              [3, 4, 4, 2, 5, 3, 4, 4],
              [14, 12, 12, 14, 10, 13, 13, 12],
              [8, 11, 8, 9, 9, 9, 9, 9],
              [4, 5, 5, 5, 4, 5, 5, 5],
              [10, 10, 11, 11, 11, 10, 10, 11],
              [12, 13, 13, 10, 13, 12, 12, 13],
              [9, 9, 10, 8, 12, 8, 8, 10]];

  var sum = [0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < n_genre; i++) {
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

  document.getElementById("MBTI_type").innerHTML = type;
  // set the values of id E_val, I_val etc to the percentages rounded to 2 decimal places
  document.getElementById("E_val").innerHTML = Math.round(sum[0] / (sum[0] + sum[1]) * 10000) / 100 + "%";
  document.getElementById("I_val").innerHTML = Math.round(sum[1] / (sum[0] + sum[1]) * 10000) / 100 + "%";
  document.getElementById("N_val").innerHTML = Math.round(sum[2] / (sum[2] + sum[3]) * 10000) / 100 + "%";
  document.getElementById("S_val").innerHTML = Math.round(sum[3] / (sum[2] + sum[3]) * 10000) / 100 + "%";
  document.getElementById("T_val").innerHTML = Math.round(sum[4] / (sum[4] + sum[5]) * 10000) / 100 + "%";
  document.getElementById("F_val").innerHTML = Math.round(sum[5] / (sum[4] + sum[5]) * 10000) / 100 + "%";
  document.getElementById("J_val").innerHTML = Math.round(sum[6] / (sum[6] + sum[7]) * 10000) / 100 + "%";
  document.getElementById("P_val").innerHTML = Math.round(sum[7] / (sum[6] + sum[7]) * 10000) / 100 + "%";
  document.getElementById("logged_in").style.display = "table";
  document.getElementById("logged_out").style.display = "none";
}
