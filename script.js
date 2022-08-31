let bookSVG = document.querySelector("#book");
let doorSVG = document.querySelector("#door");
let mirrorSVG = document.querySelector("#mirror");
let windowSVG = document.querySelector("#window");
let body = document.querySelector("body");
let svg = document.querySelector("svg");

let posX = 0;
let posY = 0;

const m = 6;

let touchOUT = true;
svg.addEventListener("touchstart", (e) => {

    if (touchOUT) {
        const boxes = Array.from(document.getElementsByClassName('dialogBox'));
        boxes.forEach(box => {
        box.remove();
        });
    
    }
    touchOUT = true;
});

bookSVG.addEventListener("touchstart", (e) => {
    touchOUT = false;
    if (e.touches.length === 1)
        dialogBox(e.touches[0].clientX, e.touches[0].clientY, "book \n is \n book");

});

doorSVG.addEventListener("touchstart", (e) => {
    touchOUT = false;
    if (e.touches.length === 1)
        dialogBox(e.touches[0].clientX, e.touches[0].clientY, "door");

});

mirrorSVG.addEventListener("touchstart", (e) => {
    touchOUT = false;
    if (e.touches.length === 1)
        dialogBox(e.touches[0].clientX, e.touches[0].clientY, "This is a mirror ?");

});

windowSVG.addEventListener("touchstart", (e) => {
    touchOUT = false;
    if (e.touches.length === 1)
        dialogBox(e.touches[0].clientX, e.touches[0].clientY, "window !?");

});

function dialogBox(x, y, text) {

    const boxes = Array.from(document.getElementsByClassName('dialogBox'));
    boxes.forEach(box => {
    box.remove();
    });

    newDiv = document.createElement("div");
    let newContent = document.createTextNode(`${text}`);

    newDiv.className = "dialogBox";
    newDiv.setAttribute("class","dialogBox");
    newDiv.appendChild(newContent);

    let currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);

    posX = x - ( newDiv.clientWidth / 2 );
    posY = y - ( newDiv.clientHeight / 2 );

    if ( x  - (newDiv.clientWidth / 2) <= 0 ) {posX = 0 + m} // left
    if ( x  + (newDiv.clientWidth / 2) >= window.innerWidth ) {posX = window.innerWidth - newDiv.clientWidth - m } // right
    if ( y  - (newDiv.clientHeight / 2) <= 0 ) {posY = 0 + m} // top
    if ( y  + (newDiv.clientHeight / 2) >= window.innerHeight ) {posY = window.innerHeight - newDiv.clientHeight - m } // bottom


    newDiv.style.transform = `translate(${ posX }px, ${ posY }px)`;

}


