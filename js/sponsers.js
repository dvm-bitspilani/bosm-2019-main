var url = "./img/sponsers/";
var url2 = "./img/foodspons/";

var spons = [
  "9stacksLogos02.png",
  "AxisBankLogo.png",
  "BingoComedyAddalogo.jpg",
  "CocacolaLogo.png",
  "FistoLogo.jpg",
  "Fundoogadgetslogo.png",
  "GrabOnLogo.png",
  "IconSalonLogo.jpg",
  "InsightoneLogo.png",
  "IxigoLogo.png",
  "Libertylogo.png",
  "LogoParamountDealz.png",
  "OhCampusNewLogo.png",
  "OnePlusLogo.jpg",
  "ONGC_logo_.jpg",
  "PathakCreationslogo.jpg",
  "RefreshMattressLogo.jpg",
  "SportstarLogo.png",
  "TheSouledStoreLogo.png",
  "TheCollegeFeverLogo.png",
  "vishu-money-logo.png",
  "YouthIncorporatedLogo.png",
  "Zebronicslogovertical.jpg"
];

var food = [
  "MrCrushLogo.jpg",
  "BiryaniHouseLogo.jpg",
  "CCDLogo.jpg",
  "ChaayosLogo.png",
  "HoKoFoLogo.jpg",
  "KeventerLogo.png",
  "KingofCuisine.jpg",
  "QuickMealLogo.jpg",
  "RollPointLogo.jpg",
  "ShawarmaCornerLogo.jpg"
];

var pic = document.getElementsByClassName("spons-div");
for (var i = 0; i < 23; i++) {
  pic[i].style.backgroundImage = "url(" + url + spons[i] + ")";
}

var foodpic = document.getElementsByClassName("food-spons");
for (var i = 0; i < 10; i++) {
  foodpic[i].style.backgroundImage = "url(" + url2 + food[i] + ")";
}
