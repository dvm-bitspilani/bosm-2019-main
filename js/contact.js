var arrow = document.getElementsByClassName('arrow')[0];
var isOpen = false;
var instructions = document.getElementsByClassName('instructions')[0];
var h1 = document.querySelectorAll('.instructions h1')[0];
var h2 = document.querySelectorAll('.instructions div')[0];
var cardsContainer = document.getElementsByClassName('cards-container')[0];
cardsContainer.style.opacity = 0;

function translate(action) {
    var container = document.getElementsByClassName('contact-main-container')[0];
    if (action) {
        container.style.transform = "translate(-50vw)";
        setTimeout(() => {
            h1.style.opacity = 0;
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

        setTimeout(() => {
            arrow.style.transform = "rotateY(0deg) translateX(0px)";
        }, 750);

        // setTimeout(()=>{
        //     h2.style.opacity = 1;
        // },1000);

        // setTimeout(()=>{
        //    instructions.style.opacity = 1;
        //    cardsContainer.style.opacity = 0;           
        // },750);  
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