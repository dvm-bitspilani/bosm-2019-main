const bosmLogoUrl = 'img/bosm-logo.png';
const eventsNames = ['Basketball', 'Lawn Tennis', 'Volleyball', 'Hockey', 'Cricket', 'Football', 'Athletics', 'Squash', 'Chess', 'Carrom', 'Snooker & Pool', 'Power Lifting', 'Bodybuilding', 'Taekwondo', 'Table Tennis', 'Badminton', 'Ultimate Frisbee', 'Swimming'];
const eventsImgUrl = ['img/events/Basketball-min.png', 'img/events/Lawn Tennis-min.png', 'img/events/Volleyball-min.png', 'img/events/Hockey-min.png', 'img/events/Cricket-min.png', 'img/events/Football-min.png', 'img/events/Athletics-min.png', 'img/events/Squash-min.png', 'img/events/Chess-min.png', 'img/events/Carrom-min.png', 'img/events/Snooker and Pool-min.png', 'img/events/Powerlifting-min.png', 'img/events/Body Building-min.png', 'img/events/Taekwondo-min.png', 'img/events/Table Tennis-min.png', 'img/events/Badminton-min.png', 'img/events/Ultimate Frisbee-min.png', 'img/events/Swimming-min.png'];
const eventsContainer = document.getElementsByClassName("events-container")[0];

const numberOfEvents = 18;
let setNumber = 1;
let numberOfEventsinOneSet;
if (window.innerWidth < 600) {
    numberOfEventsinOneSet = 3;
} else {
    numberOfEventsinOneSet = 5;
}
let numberOfSet = parseInt(numberOfEvents / numberOfEventsinOneSet);
let numberOfEventsinLastSet = numberOfEvents % numberOfEventsinOneSet;

const createEvent = () => {
    for (i = 0; i < numberOfSet; i++) {
        let eventsSet = document.createElement('div');
        eventsSet.className = "events-set";
        for (j = 0; j < numberOfEventsinOneSet; j++) {
            let eventsCard = document.createElement('div');
            eventsCard.className = "events-card";

            let eventsCardBack = document.createElement('div');
            eventsCardBack.className = "events-card-back";

            let eventsCardBackImg = document.createElement('img');
            eventsCardBackImg.setAttribute('src', bosmLogoUrl);

            eventsCardBack.appendChild(eventsCardBackImg);
            eventsCard.appendChild(eventsCardBack);

            let eventsCardFront = document.createElement('div');
            eventsCardFront.className = "events-card-front";

            let eventsNameContainer = document.createElement('div');
            eventsNameContainer.className = "event-name";

            let eventsName = document.createTextNode(eventsNames[numberOfEventsinOneSet * i + j]);
            eventsNameContainer.appendChild(eventsName);
            eventsCardFront.appendChild(eventsNameContainer);

            let eventsCardFrontImg = document.createElement('img');
            eventsCardFrontImg.setAttribute('src', eventsImgUrl[numberOfEventsinOneSet * i + j]);

            eventsCardFront.appendChild(eventsCardFrontImg);
            eventsCard.appendChild(eventsCardFront);

            eventsSet.appendChild(eventsCard);
        }
        eventsContainer.appendChild(eventsSet);
    }
    if (numberOfEventsinLastSet != 0) {
        let eventsSet = document.createElement('div');
        eventsSet.className = "events-set";
        for (j = 0; j < numberOfEventsinLastSet; j++) {
            let eventsCard = document.createElement('div');
            eventsCard.className = "events-card";

            let eventsCardBack = document.createElement('div');
            eventsCardBack.className = "events-card-back";

            let eventsCardBackImg = document.createElement('img');
            eventsCardBackImg.setAttribute('src', bosmLogoUrl);

            eventsCardBack.appendChild(eventsCardBackImg);
            eventsCard.appendChild(eventsCardBack);

            let eventsCardFront = document.createElement('div');
            eventsCardFront.className = "events-card-front";

            let eventsNameContainer = document.createElement('div');
            eventsNameContainer.className = "event-name";

            let eventsName = document.createTextNode(eventsNames[numberOfSet * numberOfEventsinOneSet + j - 1]);
            eventsNameContainer.appendChild(eventsName);
            eventsCardFront.appendChild(eventsNameContainer);

            let eventsCardFrontImg = document.createElement('img');
            eventsCardFrontImg.setAttribute('src', eventsImgUrl[numberOfSet * numberOfEventsinOneSet + j - 1]);

            eventsCardFront.appendChild(eventsCardFrontImg);
            eventsCard.appendChild(eventsCardFront);

            eventsSet.appendChild(eventsCard);
        }
        eventsContainer.appendChild(eventsSet);
    }
}

const createEventDots = () => {
    const dotsContainer = document.getElementsByClassName('events-nav-dots')[0];
    for (i = 0; i < numberOfSet; i++) {
        let dot = document.createElement('div');
        dot.className = "event-nav-dot";
        dot.id = (i + 1);
        dot.setAttribute('onclick', 'navigateEvent(this.id)');
        dotsContainer.appendChild(dot);
    }
    if (numberOfEventsinLastSet != 0) {
        let dot = document.createElement('div');
        dot.className = "event-nav-dot";
        dot.id = (i + 1);
        dot.setAttribute('onclick', 'navigateEvent(this.id)');
        dotsContainer.appendChild(dot);
    }
}

createEventDots();
createEvent();


const openCard = () => {
    const eventsCard = document.querySelectorAll('.events-set:nth-of-type(' + setNumber + ') > .events-card');
    foldCard();
    document.querySelectorAll('.events-nav-dots > .event-nav-dot')[setNumber - 1].style.background = "#ffffff";
    let i = 0;
    const flip = setInterval(() => {
        if (i < eventsCard.length) {
            eventsCard[i].style.transform = "rotateY(180deg)";
            i++;
        } else {
            clearInterval(flip);
        }
    }, 200);
}


const foldCard = () => {
    const eventsCard = document.getElementsByClassName('events-card');
    for (eventCard of eventsCard) {
        eventCard.style.transform = "rotateY(0)";
    }
}

let eventSetChangeInterval;

const initiateAnimation = () => {
    if (eventsContainer.getBoundingClientRect().top - 10 <= window.innerHeight) {
        openCard();
        eventSetChangeInterval = setInterval(changeEventSet, 5000);
        document.removeEventListener("wheel", initiateAnimation);
    }
}

document.addEventListener("wheel", initiateAnimation);

const changeEventSet = () => {
    const limit = (numberOfEventsinLastSet == 0) ? numberOfSet : (numberOfSet + 1);
    if (setNumber < limit) {
        setNumber++;
        eventsContainer.style.transform = "translate(" + (-100 * (setNumber - 1)) + "%)";
        for (dot of document.getElementsByClassName('event-nav-dot')) {
            dot.style.background = 'none';
        }
        setTimeout(openCard, 1100);
    } else {
        setNumber = 0;
        changeEventSet();
    }
}

const navigateEvent = (dotIndex) => {
    setNumber = dotIndex - 1;
    changeEventSet();
    clearInterval(eventSetChangeInterval);
    eventSetChangeInterval = setInterval(changeEventSet, 5000);
}