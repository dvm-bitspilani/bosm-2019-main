window.onload = function() {
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
};