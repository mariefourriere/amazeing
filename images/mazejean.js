const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
body.classList.add('body');
let level = 0;
let x;
let y;
let line = [];
let lvl1 = `***********.*
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

let lvl2=`**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`

let lvl3=`********
****S***
****.***
****.***
****.***
*......*
*.****.*
*..***.*
*..***.*
**.*****
*T.*****
********`

const multiline = [
lvl1,lvl2,lvl3 
];

function leveling() {

  const lineArr = multiline[level].split("\n");
  const mazeArray = [];

  for (let i = 0; i <= lineArr.length - 1; i++) {
    const symbol = lineArr[i].split("");
    mazeArray.push(symbol);
  }
  console.log('mazeArray:', mazeArray)

  for (let j = 0; j < mazeArray.length; j++) {
    const lineDiv = document.createElement("div");
    lineDiv.classList.add("lineDiv");
    line[j] = [];
    for (let i = 0; i < mazeArray[j].length; i++) {
      const characterDiv = document.createElement("div");
      characterDiv.innerHTML = mazeArray[j][i];
      console.log('mazeArray:', mazeArray)
      line[j][i] = characterDiv;

      characterDiv.classList.add("tile");
      lineDiv.appendChild(characterDiv);
      if (characterDiv.innerHTML == "*") {
        characterDiv.classList.add("wall");
        characterDiv.innerHTML = "";
      } else if (characterDiv.innerHTML == ".") {
        characterDiv.classList.add("path");
        characterDiv.innerHTML = "";
      } else if (characterDiv.innerHTML == "S") {
        characterDiv.classList.add("start");
        characterDiv.innerHTML = "";
        x = i;
        y = j;
        let user = document.createElement("div");
        user.classList.add("user");
        characterDiv.appendChild(user);
      } else if (characterDiv.innerHTML == "T") {
        characterDiv.classList.add("end");
        characterDiv.innerHTML = "";
      }
    }
    section.appendChild(lineDiv);
  }

}

function move(e) {
  const perso = document.querySelector(".user");
  let dest;
console.log("line",line);
  if (e.code == "ArrowRight") {
    x++;
    dest = line[y][x];
    if (dest.classList.contains("wall")) {
      alert("that's a wall!");
      x--;
      dest = line[y][x];
    }

  } else if (e.code == "ArrowLeft") {
    x--;
    dest = line[y][x];
    if (dest.classList.contains("wall")) {
      alert("that's a wall!");
      x++;
      dest = line[y][x];
    }
  } else if (e.code == "ArrowUp") {
    y--;
    dest = line[y][x];
    if (dest.classList.contains("wall")) {
      alert("that's a wall!");
      y++;
      dest = line[y][x];
    }
  } else if (e.code == "ArrowDown") {
    y++;
    dest = line[y][x];
    console.log("dest", dest);
    if (
      dest.classList.contains("wall")) {
      alert("that's a wall!");
      y--;
      dest = line[y][x];
    }

  }
  dest.appendChild(perso);
  if (dest.classList.contains("end")) {
    alert("you won !!!! ");
    x = 0;
    y = 0;
    dest = line[y][x];
    section.innerHTML = "";
    level++;
    leveling();
  }

}

let timer = document.createElement("div");
timer.classList.add('timer')
let seconds = document.createElement("div");
let minutes = document.createElement("div");
document.body.appendChild(timer);
timer.appendChild(seconds);
timer.appendChild(minutes);

let sec = 0;
let min = 1 + sec / 60;
const inter = setInterval(function () {
  seconds.innerHTML = "Number of seconds already spent on this page " + sec++;
  if (sec % 60 === 0) {
    minutes.innerHTML = min++ + " minute(s) has passed";
  }
}, 1000);

body.addEventListener("keydown", move);

leveling();