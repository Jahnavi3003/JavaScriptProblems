let map = new Map();  

function mapWithKeys(){
    for(let i = 1; i <= 6; i++){
        map.set(i , 0);
    }
}

function dieRolls(){
    mapWithKeys();
    for(let i = 1; i <= 60; i++){
        let dieRoll = Math.floor(Math.random()*6+1);
        map.set(dieRoll , map.get(dieRoll)+1);
        if(map.get(dieRoll) == 10){
            break;
        }
    }
}

function printMap(){
    dieRolls();
    map.forEach((value , key) => {
        console.log(key + " : " + value);
    });
}

let max = 1;
let min = 1;


function maximumAndMinimum(){
    printMap();
    for(let i = 1; i <= map.size; i++){
        if(map.get(max) < map.get(i)){
            max = i;
        }
        if(map.get(min) > map.get(i)){
            min = i;
        }
    }
    console.log("Maximum no. of times is " + max);
    console.log("Minimum no. of times is " + min);
}

maximumAndMinimum();