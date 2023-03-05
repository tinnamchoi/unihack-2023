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

/*
19.63	30.70	27.93	14.46	33.23	19.60	19.25	30.10
57.37	42.64	45.95	38.74	49.33	40.50	47.05	42.98
79.57	82.40	82.70	71.50	89.32	73.91	91.92	73.76
99.00	99.00	99.00	99.00	97.40	99.00	99.00	99.00
91.50	94.17	94.60	85.02	99.00	87.87	92.54	93.87
13.17	1.00	1.00	6.45	1.00	1.00	1.00	1.00
53.67	49.85	49.84	48.18	47.27	50.19	48.51	49.78
85.37	66.00	66.37	95.40	57.48	78.51	76.17	65.65
1.00	21.20	16.07	1.00	29.57	1.14	9.69	16.16
48.47	24.89	28.41	33.95	31.82	25.82	28.70	28.54
79.80	61.79	64.89	69.46	65.48	64.24	65.61	64.96
36.64	25.09	27.38	18.52	27.19	24.28	27.56	24.45
17.54	8.10	5.21	29.00	3.76	10.47	14.44	2.98
46.31	25.22	27.42	38.17	19.72	34.51	31.14	26.35
*/
  var data = [[19.63, 30.70, 27.93, 14.46, 33.23, 19.60, 19.25, 30.10],
              [57.37, 42.64, 45.95, 38.74, 49.33, 40.50, 47.05, 42.98],
              [79.57, 82.40, 82.70, 71.50, 89.32, 73.91, 91.92, 73.76],
              [99.00, 99.00, 99.00, 99.00, 97.40, 99.00, 99.00, 99.00],
              [91.50, 94.17, 94.60, 85.02, 99.00, 87.87, 92.54, 93.87],
              [13.17, 1.00, 1.00, 6.45, 1.00, 1.00, 1.00, 1.00],
              [53.67, 49.85, 49.84, 48.18, 47.27, 50.19, 48.51, 49.78],
              [85.37, 66.00, 66.37, 95.40, 57.48, 78.51, 76.17, 65.65],
              [1.00, 21.20, 16.07, 1.00, 29.57, 1.14, 9.69, 16.16],
              [48.47, 24.89, 28.41, 33.95, 31.82, 25.82, 28.70, 28.54],
              [79.80, 61.79, 64.89, 69.46, 65.48, 64.24, 65.61, 64.96],
              [36.64, 25.09, 27.38, 18.52, 27.19, 24.28, 27.56, 24.45],
              [17.54, 8.10, 5.21, 29.00, 3.76, 10.47, 14.44, 2.98],
              [46.31, 25.22, 27.42, 38.17, 19.72, 34.51, 31.14, 26.35]];

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
  document.getElementById("E_I").innerHTML = "E: " + Math.round(sum[0] / (sum[0] + sum[1]) * 100) + "%, I: " + Math.round(sum[1] / (sum[0] + sum[1]) * 100) + "%";
  document.getElementById("N_S").innerHTML = "N: " + Math.round(sum[2] / (sum[2] + sum[3]) * 100) + "%, S: " + Math.round(sum[3] / (sum[2] + sum[3]) * 100) + "%";
  document.getElementById("T_F").innerHTML = "T: " + Math.round(sum[4] / (sum[4] + sum[5]) * 100) + "%, F: " + Math.round(sum[5] / (sum[4] + sum[5]) * 100) + "%";
  document.getElementById("J_P").innerHTML = "J: " + Math.round(sum[6] / (sum[6] + sum[7]) * 100) + "%, P: " + Math.round(sum[7] / (sum[6] + sum[7]) * 100) + "%";
  document.getElementById("logged_in").style.display = "block";
  document.getElementById("logged_out").style.display = "none";
}
