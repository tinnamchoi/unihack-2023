// Setting a cookie. Stores cookie name, cookie value, and number of days after which cookie expires
function setCookie() {
    // const d = new Date();
    // d.setTime(d.getTime() + (exdays*24*60*60*1000));
    // let expires = "expires="+ d.toUTCString();
    // document.cookie 
  }

//Getting a cookie. Returns string value of cookie if cookie found, or "" if not found
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  
source_music = ["https://d1fqjpzwgmzkf8.cloudfront.net/Otis.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"]
var counter = 1

// function to move on to the next music
function changePage(score){
    // keep track of questions answered
    counter++
    console.log(score)

    // change title and song 
    document.getElementsByClassName("title")[0].innerText = counter + ". What do you think of this song?"
    document.getElementById("my-audio").setAttribute('src', source_music[counter-1]);

    // check if user has answered 10 questions
    if (counter > 10){
        getResult()
    }
}

// calculates MBTI score
function getResult(params) {
    // TO-DO: Get MBTI score
    window.location.href = "/result.html"
}