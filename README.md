# amazeing

Please find the maze on my github page [here]() . 

## Introduction

Let's build a simple Maze program

- Type of challenge: **consolidation**  
- Duration: **2-3 days**  
- Team challenge: **solo**
- Deadline: **25/11/2020 19:00**
- [Submission form](https://forms.gle/UmTTfyF59kueUYhh7)

## Learning objectives

Using loops and the DOM to generate simple templates. Using keyboard events

## The mission

- Create a new repository named `amazeing`
- Create a `maze.js` file.
- Create a file named `index.html`. In the `<body>` you can only put an empty `<main>` tag, and the link to your javascript file. The rest of the app has to be generated using your script
- Use [this text file](lvl1.txt) as a reference to build a maze. `*` are walls, `.` are paths, `S` is the starting point fo the player and `T` is the treasure you should reach in order to end the game. 
- Create a `maze.css´ file:
  - This file contains at `tile` class, a 20px by 20px square that will serve as a base for your maze
  - You'll have to create styles for the 2 types of terrain (walls and paths), it can be simple background colors
- Using the keyboard you can navigate in the maze (you can only stay on paths, you cannot cross walls)

## BONUS

- Add more levels
- Display the time spent to solve the maze
- Make it pretty!

## Starting tips

To start this project I would store the maze in a variable first. You can create multiline string variables using backticks and split each lines into an array using the [String.split function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
```javascript

const multiline = `line1
line2
line3`

console.log(multiline.split('\n')) // ['line1", 'line2', 'line3']
console.log(multiline[0].split('')) // ['l', 'i', 'n', 'e', '1']
```

Something in the likes of `const mazeArray = maze.split('\n').split('')` would allow me to iterate over the maze using for-loops. ex: `mazeArray[1][3]

## Sources
Exercise part of my [BeCode](https://becode.org/) training 
