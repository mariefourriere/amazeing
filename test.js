const main = document.createElement("main");
main.className = "main";
document.body.appendChild(main);

let levels = 0

const level1 =`*************
***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********
*************`

const level2 =`**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*
**********************`

const level3 =`********
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

const level4 = `********************
S.*****............T
*.*****.************
*...***......*******
***...*...**.....***
***.*****.******.***
*.......*......*.***
******.***.****..***
*......*...*....****
*.****.*****.***.***
*.****...........***
********************
`


const creatMaze = maze =>{
    const levelArray = maze.split("\n");
    let i = 0;
    let j = 0;
    let x;
    let y;
    
    for (let element of levelArray){
        const divLine = document.createElement("div");
        divLine.className = "divLine";
        main.appendChild(divLine);

        for (let character of element){
            const tile = document.createElement("div");
            tile.className = "tile";
    
            if (character === "*"){
                tile.className += " wall";
            }
            else {
                tile.className += " path";

                if (character === "S"){
                    const hero = document.createElement("div");
                    hero.className = "hero";
                    tile.appendChild(hero);
                    x = i % character.length;
                    y = j;
                    console.log(x, y);
                }
            else if (character === "T"){
                tile.className += " treasure";
            }
            }
            divLine.appendChild(tile);
            i++;
        }
        j++
    }
    
    document.body.addEventListener("keyup", (e) => {
        const mazes = [level1, level2, level3, level4];
        const main = document.querySelector("main");
        const lines = main.children;
        const line = [];
        for (let k=0; k<lines.length; k++){
            line[k] = lines[k].children;
        }
        const hero = document.querySelector(".hero");
        let newDest = {
            x: x,
            y: y
        }
        if (e.key === "ArrowRight"){
            newDest.x++;
        }
        else if (e.key === "ArrowLeft"){
            newDest.x--;
        }
        else if (e.key === "ArrowUp"){
            newDest.y--;
        }
        else if (e.key === "ArrowDown"){
            newDest.y++;
        }
        else{
            newDest.x = newDest.x;
            newDest.y = newDest.y;
        }
        if (line[newDest.y] !== undefined && line[newDest.y][newDest.x] !== undefined && !line[newDest.y][newDest.x].className.match("wall")){
            let dest = line[newDest.y][newDest.x];
            dest.appendChild(hero);

            x = newDest.x;
            y = newDest.y;
            if(dest.className.match("treasure")){
                levels++;
                if(mazes[levels] !== undefined){
                    alert("HEYY, you are out of the maze and you are find your lover!");
                    creatMaze(mazes[levels]);

                }
            }
        } 
    })
}


window.addEventListener('load', creatMaze(level1));

