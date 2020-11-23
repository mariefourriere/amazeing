const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.*****...****....********`

for (let element of multiline){
    const eachDiv = document.createElement('div')
    eachDiv.className = "layout"
  
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
document.querySelector("body > div:nth-child(16)").appendChild(littleGuy)

let posX = 16;

document.body.addEventListener('keydown', function(e){
    console.log(e.code)   
    if(e.code ===  "ArrowRight"){
        posX++
        document.querySelector("body > div:nth-child("+posX+")").appendChild(littleGuy)
        
    }if(e.code ===  "ArrowLeft"){
        posX--
        document.querySelector("body > div:nth-child("+posX+")").appendChild(littleGuy)
    }
     if (e.code === "ArrowDown"){
        posX+=13
        document.querySelector("body > div:nth-child("+posX+")").appendChild(littleGuy)
    }if (e.code === "ArrowUp"){
        posX-=13
        document.querySelector("body > div:nth-child("+posX+")").appendChild(littleGuy)
    }
})