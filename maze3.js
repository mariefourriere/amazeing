const main = document.createElement('main');
main.className = 'main';

document.body.appendChild(main);


let levelNumber = 0;

// different levels 
const level1 =
    `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

const level2 =
    `**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`

const level3 =
    `********
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

const level4 =
    `************
***S.....***
**...***.***
**.**....***
*******.****
**T.....****
************
`



// generate the maze 
function generateMaze(maze) {
    main.innerHTML = ''
    const levelArray = maze.split('\n');
    let i = 0;
    let j = 0;
    let x;
    let y;
    for (let element of levelArray) {

        const divLine = document.createElement('div');
        divLine.className = "divLine";
        main.appendChild(divLine);

        for (let character of element) {
            const tile = document.createElement('div');
            tile.className = 'tile';


            if (character === '*') {
                tile.className += ' wall';
            } else {
                tile.className += ' path';

                if (character === 'S') {
                    const littleGuy = document.createElement('div');
                    littleGuy.className = 'littleGuy';
                    tile.appendChild(littleGuy);

                    x = i % character.length;
                    y = j;
                    console.log(i, j, x, y);

                } else if (character === 'T') {
                    tile.className += ' end';
                }
            }
            divLine.appendChild(tile);
            i++;

        }
        j++
    }


    document.body.addEventListener("keyup", (e) => {

        const mazes = [level1, level2, level3, level4];
        const main = document.querySelector('main');
        const lines = main.children;
        const line = [];

        for (let k = 0; k < lines.length; k++) {
            line[k] = lines[k].children;
        };
        const littleGuy = document.querySelector('.littleGuy');

        let newDest = {
            x: x,
            y: y
        }

        // console.log(newDest.x, newDest.y)
        // console.log(x, y)


        if (e.key === "ArrowRight") {
            newDest.x++;
        } else if (e.key === "ArrowLeft") {
            newDest.x--;
        } else if (e.key === "ArrowUp") {
            newDest.y--;
        } else if (e.key === "ArrowDown") {
            newDest.y++;
        } else {
            newDest.x = newDest.x;
            newDest.y = newDest.y;
        }
        if (line[newDest.y] !== undefined && line[newDest.y][newDest.x] !== undefined && !line[newDest.y][newDest.x].className.match('wall')) {
            let dest = line[newDest.y][newDest.x]
            dest.appendChild(littleGuy)
            
            x = newDest.x
            y = newDest.y
            if (dest.className.match('end')) {
                levelNumber++
                seconds = 0
                minutes = 0
                if (mazes[levelNumber] !== undefined) {
                    alert('Thank you, you helped me find my flower!!!')
                    generateMaze(mazes[levelNumber])
                } else {
                    
                }
            }
        }
    })
}


window.addEventListener('load', generateMaze(level1));