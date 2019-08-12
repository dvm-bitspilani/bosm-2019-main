const dDay = new Date("September 12, 2019 23:59:59").getTime();

function setTime() {
    const timeNow = new Date().getTime();

    let days = Math.floor((dDay - timeNow) / (1000 * 60 * 60 *24));
    let hrs = Math.floor((dDay - timeNow) / (1000 * 60 * 60)) - days*24;
    let min = Math.floor((dDay - timeNow) / (1000 * 60)) - days*24*60 - hrs*60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
}

window.onload = function() {
    setTime()
    let loader = document.getElementsByClassName("loader")[0];
    let loaderWraper = document.getElementsByClassName("loader_wraper")[0];
    let contentWraper = document.getElementsByClassName("content-wrapper")[0];
    contentWraper.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading

    setTimeout(() => {
        loader.style.display = "none";
        contentWraper.style.opacity = 1;
        document.getElementsByTagName('body')[0].style.height = 'initial';
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        // // document.getElementsByClassName("nav-bar")[0].style.display = "flex";
        // // document.getElementsByClassName("sidebar")[0].style.display = "flex";
        // // if (window.innerWidth > 500)
        // //     document.getElementsByClassName("navigator")[0].style.display = "flex";
        // // if (window.innerWidth < 500) {
        // //     document.getElementsByClassName("navigator")[0].style.display = "none";
        // }
    }, 4500);

    setInterval(() => setTime(), 60000);
};

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}