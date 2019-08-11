let setNumber = 1;
let numberOfSet = 3;

const eventsContainer = document.getElementsByClassName("events-container")[0];

const openCard = () => {
    if(eventsContainer.getBoundingClientRect().top-10 <= window.innerHeight){
        const eventsCard = document.querySelectorAll('.events-set:nth-of-type(' + setNumber + ') > .events-card');
        foldCard();
        document.querySelectorAll('.events-nav-dots > .event-nav-dot')[setNumber - 1].style.background = "#ffffff";
        for(eventCard of eventsCard) {
            eventCard.style.transform = "rotateY(180deg)";
        }
    }
}

const foldCard = () => {
    if(eventsContainer.getBoundingClientRect().top-10 <= window.innerHeight){
        const eventsCard = document.querySelectorAll('.events-set:nth-of-type(' + ((setNumber - 1) || (numberOfSet)) + ') > .events-card');
        for(eventCard of eventsCard) {
            eventCard.style.transform = "rotateY(0deg)";
        }
    }
}

document.onload = openCard();
document.addEventListener("scroll", openCard);

const changeEventSet = () => {
    setNumber++;
    if(setNumber <= numberOfSet) {
        eventsContainer.style.transform = "translate(" + (-100 * (setNumber - 1)) + "%)";
        for(dot of document.getElementsByClassName('event-nav-dot')) {
            dot.style.background = 'none';
        }
        setTimeout(openCard, 1100);
    } else {
        setNumber = 0;
        changeEventSet();
    }
}

let eventSetChangeInterval = setInterval(changeEventSet, 5000);

const navigateEvent = (dotIndex) => {
    setNumber = dotIndex - 1;
    changeEventSet();
    clearInterval(eventSetChangeInterval);
    eventSetChangeInterval = setInterval(changeEventSet, 5000);
}