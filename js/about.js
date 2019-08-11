var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var img3 = document.getElementsByClassName("img3")[0];
var dots = document.getElementsByClassName("dot");
var navigation = document.getElementsByClassName("navigations");
var tweet_text = document.getElementById("tweet-text");
var count = 0;
var text = ["#tweetno.1", "#tweetno.2", "#tweetno.3"];

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
  console.log("works");
}

var myVar = setInterval(slideleft, 5000);
