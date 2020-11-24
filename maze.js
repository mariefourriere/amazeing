const body = document.querySelector('body');
body.classList.add('body')

const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.*****...***
*....********`

// console.log(multiline.split('\n'));
console.log(multiline[0].split('\n'));


for (let element of multiline){
    const eachDiv = document.createElement('div')
   
  
    document.body.appendChild(eachDiv)
    if (element === "*") {
        eachDiv.className = 'wall'
    } if(element === "."){
        eachDiv.className = "path"
    } if(element === "S"){
        eachDiv.className = "start"
    } if(element === "T"){
        eachDiv.className = "end"
    }
 
}

const littleGuy = document.createElement('div');
littleGuy.className = "littleGuy"
document.querySelector("body > div:nth-child(17)").appendChild(littleGuy)

let posX = 2;
let posY = 1;


document.body.addEventListener('keydown', function(e){
    // console.log(e.code)   
    if(e.code ===  "ArrowRight"){
        posX++;
        if(document.querySelector("body" + posY + " > div:nth-child(" + posX +")").classList.contains('wall')){
            alert("that's a wall");
            posX--;
        }
        
        
    }if(e.code ===  "ArrowLeft"){
        posX--;
        if(document.querySelector("body" + posY +" > div:nth-child("+ posX +")").classList.contains('wall')){
            alert("that's a wall");
            posX++;  
        }
    }else if (e.code === "ArrowDown"){
        posY++;
        if(document.querySelector("body" + posY + "> div:nth-child("+ posY +")").classList.contains('wall')){
            alert("that's a wall");
            posY++;
        }
    }else if (e.code === "ArrowUp"){
        posY--;
        if(document.querySelector("body" + posY +" > div:nth-child("+ posY +")").classList.contains('wall')){
            alert("that's a wall");
            posY++;
        }
    
    }

    document.querySelector("body" + posY +" > div:nth-child("+ posY +")").appendChild(littleGuy)
})

