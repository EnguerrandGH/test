let blueSVG = document.querySelector("#blue");
let redSVG = document.querySelector("#red");
let body = document.querySelector("body");
let svg = document.querySelector("svg");

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

blueSVG.addEventListener("touchstart", (e) => {
    touchOUT = false;
    if (e.touches.length === 1)
        dialogBox(e.touches[0].clientX, e.touches[0].clientY, "blue \n is \n blue");

});

redSVG.addEventListener("touchstart", (e) => {
    touchOUT = false;
    if (e.touches.length === 1)
        dialogBox(e.touches[0].clientX, e.touches[0].clientY, "red");

});

function dialogBox(x, y, text) {

    const boxes = Array.from(document.getElementsByClassName('dialogBox'));
    boxes.forEach(box => {
    box.remove();
    });

    newDiv = document.createElement("div");
    let newContent = document.createTextNode(`${text}`);

    newDiv.style.backgroundColor = "green";
    newDiv.style.width = "min-content";
    newDiv.className = "dialogBox";
    newDiv.setAttribute("class","dialogBox");
    newDiv.appendChild(newContent);

    let currentDiv = document.getElementById('div1');

    document.body.insertBefore(newDiv, currentDiv);
    newDiv.style.transform = `translate(${ x - ( newDiv.clientWidth / 2 ) }px, ${ y - ( newDiv.clientHeight / 2 )}px)`;

}

