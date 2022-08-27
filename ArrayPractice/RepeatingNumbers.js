let array = new Array(); 

function repeatNums(){
    for(let i = 0; i <= 100; i++){
        if((i%11)==0){
            array.push(i);
        }
    }
}


function printArray(){
    repeatNums();
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printArray();