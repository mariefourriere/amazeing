document.querySelector('body');

const main = document.createElement('main');
main.classList.add('main')

document.body.appendChild(main)


const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`;

//divide multiline in lines
const lineArray = multiline.split("\n");
// console.log(multiline.split("\n"));

//divide line into characters
for (let i = 0; i <= lineArray.length - 1; i++) {
    // console.log('lineArray: ', lineArray)
    const divLine = document.createElement('div');
    divLine.classList.add('divLine');
    divLine.id = i
    const line = lineArray[i];

    for (let j = 0; j <= line.length - 1; j++) {

        const characterDiv = document.createElement('div');
        const character = line.split("");
        characterDiv.innerHTML = character[j];
        characterDiv.classList.add('tile');

        divLine.appendChild(characterDiv);

        if (characterDiv.innerHTML == "*") {
            characterDiv.classList.add("wall");
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == ".") {
            characterDiv.classList.add("path");
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "S") {
            characterDiv.className = "start";
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "T") {
            characterDiv.className = "end";
            characterDiv.innerHTML = "";
        }

        main.appendChild(divLine)

    }

}

document.querySelector("#\\31  > div.tile.start");


let posX = 2;
let posY = 1;

let littleGuy = document.createElement('div');
littleGuy.classList.add('littleGuy');

document.querySelector("#\\31  > div.start").appendChild(littleGuy);

function congrats() {
    if(document.querySelector("#\\3" + posY + "> div:nth-child(" + posX + ")").classList.contains('end')) {
        alert("congrats, you won!");
}
}

function move(e) {
    if (e.code == "ArrowRight") {
        posX++;
        if(document.querySelector("#\\3" + posY + "> div:nth-child(" + posX + ")").classList.contains("wall")){
            alert("Oups, you cannot go through walls!");
            posX--;
        }
    } else if(e.code == "ArrowLeft") {
        posX--;
        if (document.querySelector("#\\3" + posY + "> div:nth-child(" + posX + ")").classList.contains('wall')){
            alert("Oups, you cannot go through walls!");
            posX++;
        }
    } else if (e.code == "ArrowUp") {
        posY--;
        if (document.querySelector("#\\3" + posY + "> div:nth-child(" + posX + ")").classList.contains('wall')){
            alert("Oups, you cannot go through walls!");
            posY ++;
        } 
    } else if (e.code == "ArrowDown") {
        console.log ("ArrowDown")
        posY++;
        if (document.querySelector("#\\3" + posY + "> div:nth-child(" + posX + ")").classList.contains('wall')){
            alert("Oups, you cannot go through walls!");
            posY --;
        } 
    }
    document.querySelector("#\\3" + posY + "> div:nth-child(" + posX + ")").appendChild(littleGuy);

    congrats();

}
document.addEventListener("keydown", move)



