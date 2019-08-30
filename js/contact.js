// import { read } from "fs";

var arrow = document.getElementsByClassName('arrow')[0];
var isOpen = false;
var instructions = document.getElementsByClassName('instructions')[0];
var h1 = document.querySelectorAll('.instructions h1')[0];
var h2 = document.querySelectorAll('.instructions div')[0];
var cardsContainer = document.getElementsByClassName('cards-container')[0];
cardsContainer.style.opacity = 0;
var isDirectorMsgOpen = false;
var rightArrow = document.getElementsByClassName('right-arrow')[0];
function translate(action) {
    var container = document.getElementsByClassName('contact-main-container')[0];
    var rightArrow = document.getElementsByClassName('right-arrow')[0];
    if (action) {
        container.style.transform = "translate(-50vw)";
        setTimeout(() => {
            h1.style.opacity = 0;
            rightArrow.style.opacity = 0;
        }, 750);

        setTimeout(() => {
            h2.style.opacity = 0;
        }, 800);

        setTimeout(() => {
            instructions.style.opacity = 0;
            cardsContainer.style.opacity = 1;
            arrow.style.transform = "rotateY(180deg) translateX(-30px)";
        }, 1000);
    } else {
        h1.style.opacity = 1;
        h2.style.opacity = 1;
        instructions.style.opacity = 1;
        cardsContainer.style.opacity = 0;
        container.style.transform = "translate(0vw)";
        rightArrow.style.opacity = 1;
        setTimeout(() => {
            arrow.style.transform = "rotateY(0deg) translateX(0px)";
            arrow.style.transform = "rotateY(360deg) translateX(0px)";
        }, 750); 
    }
}

arrow.addEventListener('click', () => {
    if (!isOpen) {
        translate(!isOpen);
        isOpen = true;
    } else {
        translate(!isOpen);
        isOpen = false;
    }
});

if (window.innerWidth < 700) {
    cardsContainer.style.opacity = 1;
}   

function navigateDirectorMessage(action){
    var container = document.getElementsByClassName('contact-main-container')[0];
    var fullMsg = document.getElementsByClassName('full-director-message')[0];
    var heading = document.querySelectorAll('.contact-quote-heading');
    var image = document.querySelectorAll('.image');
    var quoteBox = document.querySelectorAll('.quote-box');
    var longMsg = document.getElementsByClassName('long-msg')[0];
    var quoteIconOne = document.getElementsByClassName('start')[0];
    var quoteIconSecond = document.getElementsByClassName('end')[0];    
    if (action) {
        heading[0].style.opacity = 0;
        image[0].style.opacity = 0;
        quoteBox[0].style.opacity = 0;
        quoteIconSecond.style.opacity = 0;
        quoteIconOne.style.opacity = 0;
        setTimeout(() => {
            container.style.transform = "translate(50vw)";            
        }, 150);
        setTimeout(() => {
            fullMsg.style.opacity = 1;            
        }, 100);

        setTimeout(() => {
            heading[1].style.opacity = 1;
            image[1].style.opacity = 1;
            quoteBox[1].style.opacity = 1;
            longMsg.style.opacity = 1;
            quoteIconSecond.style.opacity = 1;
            quoteIconOne.style.opacity = 1;
            rightArrow.style.transform = "rotateY(180deg) translateX(15px)";
        }, 1000);
    } else {
        heading[1].style.opacity = 0;
        image[1].style.opacity = 0;
        quoteBox[1].style.opacity = 0;
        longMsg.style.opacity = 0;
        quoteIconSecond.style.opacity = 0;
        quoteIconOne.style.opacity = 0;
        setTimeout(()=>{
            container.style.transform = "translate(0vw)";
        },100);
        setTimeout(()=>{
            fullMsg.style.opacity = 0;
        },700)
        setTimeout(() => {
            rightArrow.style.transform = "rotateY(0deg) translateX(0px)";
            heading[0].style.opacity = 1;
            image[0].style.opacity = 1;
            quoteBox[0].style.opacity = 1;
        }, 750); 
    }
}

rightArrow.addEventListener('click', () => {
    if (!isDirectorMsgOpen) {
        navigateDirectorMessage(!isDirectorMsgOpen);
        isDirectorMsgOpen = true;
    } else {
        navigateDirectorMessage(!isDirectorMsgOpen);
        isDirectorMsgOpen = false;
    }
});

let contactNumber = 1;
let numberOfContactSet = 2;

const contactContainer = document.getElementsByClassName("cards-container")[0];

const changecontactSet = () => {
    if (contactNumber < numberOfContactSet) {
        contactNumber++;
        contactContainer.style.transform = "translate(" + (-50 * (contactNumber - 1)) + "%)";
        for (dot of document.getElementsByClassName('contact-nav-dot')) {
            dot.style.background = 'none';
        }
        document.getElementsByClassName('contact-nav-dot')[contactNumber - 1].style.background = "#ffffff";
    } else {
        contactNumber = 0;
        changecontactSet();
    }
}

// let contactSetChangeInterval = setInterval(changecontactSet, 5000);

const navigatecontact = (dotIndex) => {
    contactNumber = dotIndex - 1;
    changecontactSet();
    // clearInterval(contactSetChangeInterval);
    // contactSetChangeInterval = setInterval(changecontactSet, 5000);
}

function fullmsg(){
    var container = document.getElementsByClassName('contact-main-container')[0];
    var fullMsg = document.getElementsByClassName('full-director-message')[0];
    var heading = document.querySelectorAll('.contact-quote-heading');
    var image = document.querySelectorAll('.image');
    var quoteBox = document.querySelectorAll('.quote-box');
    var longMsg = document.getElementsByClassName('long-msg')[0];
    var quoteIconOne = document.getElementsByClassName('start')[0];
    var quoteIconSecond = document.getElementsByClassName('end')[0]; 
    if(window.innerWidth < 600){
    if(isDirectorMsgOpen){
        heading[1].style.opacity = 1;
        image[1].style.opacity = 1;
        quoteBox[1].style.opacity = 1;
        longMsg.style.opacity = 1;
        fullMsg.style.opacity = 1;
        fullMsg.style.left = "0vw";
        fullMsg.style.zIndex = 1;
        quoteIconSecond.style.opacity = 1;
        quoteIconOne.style.opacity = 1;
        container.style.transform = "translateX(0vw)";
    }else{
        heading[1].style.opacity = 0;
        image[1].style.opacity = 0;
        quoteBox[1].style.opacity = 0;
        quoteIconSecond.style.opacity = 0;
        quoteIconOne.style.opacity = 0;
        heading[0].style.opacity = 1;
        image[0].style.opacity = 1;
        quoteBox[0].style.opacity = 1;
        longMsg.style.opacity = 0;
        fullMsg.style.left="-100vw";
        fullMsg.style.zIndex = -1;
        container.style.transform = "translateX(0vw)";  
        setTimeout(()=>{
            fullMsg.style.opacity = 0;
        },500);
    }
    }
    else{
        fullMsg.style.left="-50vw";
        if(isDirectorMsgOpen){
            container.style.transform = "translateX(50vw)";
        }else{
            container.style.transform = "translateX(0vw)";
        }

    }
}   
    
window.addEventListener("resize",()=>{
    fullmsg();
});

var readMore = document.querySelectorAll(".read-more")[0];
var back = document.querySelector(".back");

readMore.addEventListener("click",()=>{
    isDirectorMsgOpen = true;
    fullmsg();
    // disableScroll();
    
});

back.addEventListener("click",()=>{
    isDirectorMsgOpen = false;
    fullmsg();
    // enableScroll();/
});

function preventDefault(e){
    // e.preventDefault();
}

let initialXContact = null;
let initialYContact = null;

function startTouchContact(e) {
    initialXContact = e.touches[0].clientX;
    initialYContact = e.touches[0].clientY;
};

function moveTouchContact(e) {

    if (initialXContact === null) {
        return;
    }

    if (initialYContact === null) {
        return;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    let diffX = initialXContact - currentX;
    let diffY = initialYContact - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            contactNumber -= 1;
            if(contactNumber < 1){
              contactNumber = 1;
            }
            changecontactSet();
            navigatecontact(contactNumber);
        } else {
            // swiped right
            contactNumber += 1;
            if((numberOfContactSet) < contactNumber){
              contactNumber = 2;
            }
            changecontactSet();
            navigatecontact(contactNumber);
        }
    }
    initialXContact = null;
    initialYContact = null;

    e.preventDefault();

};


document.getElementsByClassName("cards-container")[0].addEventListener("touchstart", startTouchContact, false);
document.getElementsByClassName("cards-container")[0].addEventListener("touchmove", moveTouchContact, false);