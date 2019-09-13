var count = 3;

var circles = [];
var lines = [];
var colors = ['#03AFEF', '#00a24a', '#e01e26'];
var reverse = [false, false, false, true, true];

for (var i = 1; i <= count; i++) {
    var circle = document.getElementById("c" + i);
    var circleLength = circle.getTotalLength();
    circle.style.strokeDasharray = circleLength + ' ' + circleLength;
    circle.style.stroke = colors[i - 1];
    circles.push({
        node: circle,
        length: circleLength
    });

    var path = document.getElementById("p" + i);
    var pathLength = path.getTotalLength();
    path.style.strokeDasharray = circleLength + ' ' + pathLength;
    lines.push({
        node: path,
        length: pathLength
    })
}

var speed = 2.5;
var delay = speed - 0.12;
var delayStep = 0.2;

animate();
// setInterval(function() {
//     var a = document.getElementById("black");
//     a.style.animation = "logoFadeOut 0.00001s ease-in forwards";
//     a.style.opacity = 0;
//     animate();
//   }, 6000);

function animate() {
    TweenMax.killAll();

    for (var i = 0; i < count; i++) {
        var path = lines[i].node;
        var stagger = i * delayStep;

        path.style.strokeDashoffset = lines[i].length;
        path.style.stroke = '#fff'; //colors[i];
        path.style.opacity = 0;
        path.style.strokeWidth = Math.random() * 15;
        TweenMax.to(path, speed, {
            delay: stagger,
            stroke: colors[i],
            strokeWidth: 5,
            opacity: 1,
            strokeDashoffset: -lines[i].length,
            ease: Power1.easeIn
        });

        var circle = circles[i].node;
        circle.style.strokeDashoffset = reverse[i] ? -circles[i].length : circles[i].length
        TweenMax.to(circle, speed / 4, {
            delay: stagger + delay,
            strokeDashoffset: 0,
            ease: Power2.easeOut
        });
    }
    var svg = document.getElementById("black");
    setTimeout(() => {
        svg.style.animation = "logoFadeIn 1s ease-in forwards";
    }, 3000);
    // setTimeout(() => {
    // 	svg.style.transition = "none";
    // }, 4000);
    // 	svg.style.opacity = 0;

}

setTimeout(() => {
    document.getElementsByClassName('loader')[0].style.animation = 'scaleToggle 1.5s infinite';
}, 4000);