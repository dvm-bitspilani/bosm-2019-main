var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var img3 = document.getElementsByClassName("img3")[0];
var play = document.getElementsByClassName("play-btn")[0];
var dots = document.getElementsByClassName("dot");
var navigation = document.getElementsByClassName("navigations");
var tweet_text = document.getElementById("tweet-text");
var count = 0;
var tweet_count = 0;
var text = [
  "#tweetno.1",
  "#tweetno.2",
  "#tweetno.3",
  "#tweetno.4",
  "#tweetno.5"
];

function tweetchange() {
  tweet_count++;
  if (tweet_count > 4) {
    tweet_count = 0;
  }
  tweet_text.innerHTML = text[tweet_count];
}

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
      tweet_text.innerHTML = text[0];
      break;
    case 1:
      img1.style.transform = "translateX(-100%)";
      img2.style.transform = "translateX(-100%)";
      img3.style.transform = "translateX(-100%)";
      dots[0].style.backgroundColor = "transparent";
      dots[1].style.backgroundColor = "#fffffe";
      dots[2].style.backgroundColor = "transparent";
      tweet_text.innerHTML = text[1];
      break;
    case 2:
      img1.style.transform = "translateX(-200%)";
      img2.style.transform = "translateX(-200%)";
      img3.style.transform = "translateX(-200%)";
      dots[0].style.backgroundColor = "transparent";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "#fffffe";
      tweet_text.innerHTML = text[2];
      break;
    default:
      img1.style.transform = "translateX(0)";
      img2.style.transform = "translateX(0)";
      img3.style.transform = "translateX(0)";
      dots[0].style.backgroundColor = "#fffffe";
      dots[1].style.backgroundColor = "transparent";
      dots[2].style.backgroundColor = "transparent";
      tweet_text.innerHTML = text[0];
  }
}

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

var Var = setInterval(slideleft, 5000);
var Var2 = setInterval(tweetchange, 3000);
