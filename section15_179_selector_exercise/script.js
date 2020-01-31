// prompt: "come up with 4 different ways to select the first <p> tag"
//
// note: I will do so in a script and each way will add distinct text to the
// selected p to prove I have indeed selected the correct p tag

addText(way1);
addText(way2);
addText(way3);
addText(way4);

function addText(wayFunc) {
    wayFunc().textContent += " " + wayFunc.name;
}

function way1() {
    return document.querySelector("#first");
}

function way2() {
    return document.querySelector(".special");
}

function way3() {
    return document.querySelector("body > h1 + p");
}

function way4() {
    return document.querySelector("p");
}

