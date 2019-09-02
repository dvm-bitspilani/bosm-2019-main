var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var img3 = document.getElementsByClassName("img3")[0];
var play = document.getElementsByClassName("play-btn")[0];
var tweettext = document.getElementsByClassName('tweet-text');
var dots = document.getElementsByClassName("dot");
var navigation = document.getElementsByClassName("navigations");
var tweet_text = document.getElementById("tweet-text");
var count = 0;
var tweet = 0;
var tweet_count = 0;
var text = [
  "#tweetno.1",
  "#tweetno.2",
  "#tweetno.3",
  "#tweetno.4",
  "#tweetno.5"
];

function setvalue(i) {
  count = i;
  switch (count) {
    case 0:
      img1.style.transform = "translateX(0)";
      img2.style.transform = "translateX(0)";
      img3.style.transform = "translateX(0)";
      dots[0].style.backgroundColor = "#fffffe";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "transparent";
      break;
    case 1:
      img1.style.transform = "translateX(-100%)";
      img2.style.transform = "translateX(-100%)";
      img3.style.transform = "translateX(-100%)";
      dots[0].style.backgroundColor = "transparent";
      dots[1].style.backgroundColor = "#fffffe";
      dots[2].style.backgroundColor = "transparent";
      break;
    case 2:
      img1.style.transform = "translateX(-200%)";
      img2.style.transform = "translateX(-200%)";
      img3.style.transform = "translateX(-200%)";
      dots[0].style.backgroundColor = "transparent";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "#fffffe";
      break;
    default:
      img1.style.transform = "translateX(0)";
      img2.style.transform = "translateX(0)";
      img3.style.transform = "translateX(0)";
      dots[0].style.backgroundColor = "#fffffe";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "transparent";
  }
}

function slideleft() {
  count++;
  if (count > 2) {
    count = 0;
  }
  switch (count) {
    case 0:
      img1.style.transform = "translateX(0)";
      img2.style.transform = "translateX(0)";
      img3.style.transform = "translateX(0)";
      dots[0].style.backgroundColor = "#fffffe";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "transparent";
      break;
    case 1:
      img1.style.transform = "translateX(-100%)";
      img2.style.transform = "translateX(-100%)";
      img3.style.transform = "translateX(-100%)";
      dots[0].style.backgroundColor = "transparent";
      dots[1].style.backgroundColor = "#fffffe";
      dots[2].style.backgroundColor = "transparent";
      break;
    case 2:
      img1.style.transform = "translateX(-200%)";
      img2.style.transform = "translateX(-200%)";
      img3.style.transform = "translateX(-200%)";
      dots[0].style.backgroundColor = "transparent";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "#fffffe";
      break;
    default:
      img1.style.transform = "translateX(0)";
      img2.style.transform = "translateX(0)";
      img3.style.transform = "translateX(0)";
      dots[0].style.backgroundColor = "#fffffe";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "transparent";
  }
}

function slidetweet() {
  tweet++;
  if (tweet > 5) {
    tweet = 0;
  }
  switch (tweet) {
    case 0:
      tweettext[0].style.transform = "translateX(0)";
      tweettext[1].style.transform = "translateX(0)";
      tweettext[2].style.transform = "translateX(0)";
      tweettext[3].style.transform = "translateX(0)";
      tweettext[4].style.transform = "translateX(0)";
      break;
    case 1:
      tweettext[0].style.transform = "translateX(-100%)";
      tweettext[1].style.transform = "translateX(-100%)";
      tweettext[2].style.transform = "translateX(-100%)";
      tweettext[3].style.transform = "translateX(-100%)";
      tweettext[4].style.transform = "translateX(-100%)";
      break;
    case 2:
      tweettext[0].style.transform = "translateX(-200%)";
      tweettext[1].style.transform = "translateX(-200%)";
      tweettext[2].style.transform = "translateX(-200%)";
      tweettext[3].style.transform = "translateX(-200%)";
      tweettext[4].style.transform = "translateX(-200%)";
      break;
    case 3:
      tweettext[0].style.transform = "translateX(-300%)";
      tweettext[1].style.transform = "translateX(-300%)";
      tweettext[2].style.transform = "translateX(-300%)";
      tweettext[3].style.transform = "translateX(-300%)";
      tweettext[4].style.transform = "translateX(-300%)";
      break;
    case 4:
      tweettext[0].style.transform = "translateX(-400%)";
      tweettext[1].style.transform = "translateX(-400%)";
      tweettext[2].style.transform = "translateX(-400%)";
      tweettext[3].style.transform = "translateX(-400%)";
      tweettext[4].style.transform = "translateX(-400%)";
      break;
    default:
      tweettext[0].style.transform = "translateX(0)";
      tweettext[1].style.transform = "translateX(0)";
      tweettext[2].style.transform = "translateX(0)";
      tweettext[3].style.transform = "translateX(0)";
      tweettext[4].style.transform = "translateX(0)";
  }
}

var Var;

function ytpage(i, e) {
  switch (i) {
    case 0:
      window.location.href = "https://www.youtube.com/watch?v=4lv-Ji3W9oU";
      break;
    case 1:
      window.location.href = "https://www.youtube.com/watch?v=3lbRUfKTwWc";
      break;
    case 2:
      window.location.href = "https://www.youtube.com/watch?v=5sH7FRg-7_Q";
      break;
    default:
      window.location.href = "https://www.youtube.com/watch?v=4lv-Ji3W9oU";
  }
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var player2;
var player3;
function onYouTubePlayerAPIReady() {
  // console.log('script loaded')
  player = new YT.Player('play1', {
    height: '100%',
    width: '100%',
    videoId: '4lv-Ji3W9oU',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('play2', {
    height: '100%',
    width: '100%',
    videoId: '3lbRUfKTwWc',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  player3 = new YT.Player('play3', {
    height: '100%',
    width: '100%',
    videoId: '5sH7FRg-7_Q',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // console.log('ready')
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    clearInterval(Var)
    done = true;
  }
  myPlayerState = event.data;

  if (myPlayerState == 1 || myPlayerState == 3) {
    console.log('paused')
    clearInterval(Var)
    // PAUSE SLIDER
  }
  else if (myPlayerState == 2 || myPlayerState == 0) {
    console.log('play');
    Var = setInterval(slideleft, 5000)
  }
}
function stopVideo() {
  player.stopVideo();
}

Var = setInterval(slideleft, 5000);
var Var3 = setInterval(slidetweet, 3000);
// var Var2 = setInterval(tweetchange, 3000);

console.log('%c Made With Love By DVM','color: #bada55;font-size:40px');