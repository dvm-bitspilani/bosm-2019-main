var noOfContacts = 8;
var inView = 4;
var widthOfContact = document.getElementsByClassName('cards-container')[0].offsetWidth;
var currentGroup = 1;
var noOfGroups= 2;
function setLayout(){
    widthOfContact = document.getElementsByClassName('cards-container')[0].offsetWidth;
    var cards = document.getElementsByClassName('cards')[0].offsetWidth;
    var inView = Math.floor(widthOfContact/(2*cards));
    console.log(inView);
}

function navigate(id){
    // currentGroup++;
    var cardsContainer = document.getElementsByClassName('cards-container')[0];
    var dots = document.getElementsByClassName('contact-nav-dot');
    if( id == 2){   
        cardsContainer.style.transform="translate(-800px)";
        dots[id-1].style.background = "white";
        dots[0].style.background = "none";
    }else{
        cardsContainer.style.transform="translate(0px)";
        dots[0].style.background = "white"; 
        dots[1].style.background = "none";        
    }
}

var counter = 1;
setInterval(() => {
    counter++;
    if(counter ==2){
        navigate(counter);
    }else{
        counter=1;
        navigate(counter);
    }

},3000);
navigate(1);
setLayout();