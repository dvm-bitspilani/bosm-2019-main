var arrow = document.getElementsByClassName('arrow')[0];
var isOpen = false;
var instructions = document.getElementsByClassName('instructions')[0];
var h1 = document.querySelectorAll('.instructions h1')[0];
var h2 = document.querySelectorAll('.instructions div')[0]; 
var cardsContainer = document.getElementsByClassName('cards-container')[0];
console.log("h1"+h1);
console.log("h2"+h2);
console.log("card "+cardsContainer);
cardsContainer.style.opacity = 0; 
function translate(action){
    var container= document.getElementsByClassName('contact-main-container')[0];
    if(action){
        container.style.transform="translate(-50vw)";
        setTimeout(()=>{
            h1.style.opacity = 0;
        },750);
        
        setTimeout(()=>{
            h2.style.opacity = 0;
        },800);

        setTimeout(()=>{
           instructions.style.opacity = 0;
           cardsContainer.style.opacity = 1; 
           arrow.style.transform = "rotateY(180deg) translateX(-60px)";         
        },1000);


    }else{
        console.log("hi");
        h1.style.opacity = 1;
        h2.style.opacity = 1;
        instructions.style.opacity = 1;
        cardsContainer.style.opacity = 0;   
        container.style.transform="translate(0vw)";

        setTimeout(()=>{
           arrow.style.transform = "rotateY(0deg) translateX(0px)";                     
        },750);
        
        // setTimeout(()=>{
        //     h2.style.opacity = 1;
        // },1000);

        // setTimeout(()=>{
        //    instructions.style.opacity = 1;
        //    cardsContainer.style.opacity = 0;           
        // },750);  
    }
}

arrow.addEventListener('click',()=>{
    if(!isOpen){
        translate(!isOpen);
        isOpen = true;
    }else{
        translate(!isOpen);
        isOpen = false;        
    }
});