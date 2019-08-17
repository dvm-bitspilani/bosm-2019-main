const dDay = new Date("September 12, 2019 23:59:59").getTime();
document.getElementById("register").addEventListener("click", () => {
    window.location.href = "./regsiter.html";
})

let devs = document.getElementsByClassName("devs-wrapper")[0];
const openDevs = () => {
    devs.style.display = "block";
}
const closeDevs = () => {
    devs.style.display = "none";
}

let menu = document.getElementsByClassName("hamburger")[0];
let mobileMenu = document.getElementsByClassName("mobile-hamburger")[0];

const openNav = (ham) => {
    if (ham == mobileMenu) {
        ham.style.position = 'fixed';
    }
    ham.style.transform = "translateX(0)";
    console.log('open ham');
}
const closeNav = (ham, width) => {
    ham.style.transform = "translateX(" + width + ")";
    console.log('close ham');
}
const selected = ['about', 'events', 'gallery', 'contact']
const navigate = (x) => {
    var elem = document.getElementById(`${selected[x]}`);
    elem.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    closeNav(mobileMenu, "-100vw");
}

document.getElementById("openNav").addEventListener("click", () => openNav(menu))
document.getElementById("closeNav").addEventListener("click", () => closeNav(menu, "370px")
)

document.getElementById("openMobileNav").addEventListener("click", () => openNav(mobileMenu))
document.getElementById("closeMobileNav").addEventListener("click", () => closeNav(mobileMenu, "-100vw"))

function setTime() {
    const timeNow = new Date().getTime();

    let days = Math.floor((dDay - timeNow) / (1000 * 60 * 60 * 24));

    let hrs = Math.floor((dDay - timeNow) / (1000 * 60 * 60)) - days * 24;
    hrs = hrs < 10 ? `0${hrs}` : hrs;

    let min = Math.floor((dDay - timeNow) / (1000 * 60)) - days * 24 * 60 - hrs * 60;
    min = min < 10 ? `0${min}` : min;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
}

function setPlayer(num) {
    // const players = ["../img/cricket.png", "../img/Football.png", "../img/Soccer.png"];
    // const player = document.getElementsByClassName("player_image")[0];
    // player.src = players[num];
    const text = ["GRIT", "GUTS", "GLORY"];

    const tag = document.getElementsByClassName("grit")[0];
    tag.innerHTML = text[num];
}

window.onload = function() {
    setTime();
    let loader = document.getElementsByClassName("loader")[0];
    let loaderWraper = document.getElementsByClassName("loader_wraper")[0];
    let contentWraper = document.getElementsByClassName("content-wrapper")[0];
    contentWraper.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading

    setTimeout(() => {
        loader.style.display = "none";
        contentWraper.style.opacity = 1;
        // document.getElementsByTagName('body')[0].style.height = 'initial';
        // document.getElementsByTagName('body')[0].style.overflowY = 'scroll';

        const animation1 = "grow-1 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s forwards";
        const animation2 = "grow-2 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s forwards";
        const animation3 = "grow-3 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s forwards";

        document.getElementsByClassName("line-1")[0].style.animation = animation1;
        document.getElementsByClassName("line-2")[0].style.animation = animation2;
        document.getElementsByClassName("line-10")[0].style.animation = animation1;
        document.getElementsByClassName("line-11")[0].style.animation = animation2;

        document.getElementsByClassName("grit")[0].style.animationName = "anim-4";
        document.getElementsByClassName("guts")[0].style.animationName = "anim-5";
        document.getElementsByClassName("glory")[0].style.animationName = "anim-6";
        // trigger landing page animations only when page is loaded. Forgive the selectors.
        document.getElementsByClassName("bosm-header")[0].style.animation = "appear-bosm 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards";
        document.getElementsByClassName("cricket")[0].style.animation = "fade-in 0.5s linear 0.7s forwards";
        document.getElementsByClassName("slogan-1")[0].style.animation = "appear-grit 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s forwards";
        document.getElementsByClassName("slogan-2")[0].style.animation = "appear-grit 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s forwards";
        if (window.innerWidth > 450) {
            // console.log('works')
            setTimeout(() => {
                document.getElementsByClassName("landing-clip")[0].style.animation = "grow-clip 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards"
                document.getElementsByClassName("grit")[0].style.animationName = "anim-1";
                document.getElementsByClassName("guts")[0].style.animationName = "anim-2";
                document.getElementsByClassName("glory")[0].style.animationName = "anim-3";

                document.getElementsByClassName("line-3")[0].style.animation = animation1;
                document.getElementsByClassName("line-4")[0].style.animation = animation2;
                document.getElementsByClassName("line-5")[0].style.animation = animation2;
                document.getElementsByClassName("line-6")[0].style.animation = animation2;
                document.getElementsByClassName("line-7")[0].style.animation = animation2;
                document.getElementsByClassName("line-8")[0].style.animation = animation3;
                document.getElementsByClassName("line-9")[0].style.animation = animation3;
                document.getElementsByClassName("line-12")[0].style.animation = animation1;
                document.getElementsByClassName("line-13")[0].style.animation = animation2;
            }, 500)
        }
            // ----------------------------------------------------------------------------
    }, 4500);

    setInterval(() => setTime(), 60000);

    let count = 0;

    setInterval(() => {
        setPlayer(count);
        count++;
        if (count > 2) count = 0
    }, 12000)
};

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}