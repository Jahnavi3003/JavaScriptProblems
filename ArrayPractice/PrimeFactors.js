let num = 10;

var primeArray = new Array();   
function primeFactors(){
    for(let i = 2; i <= num; i++){
        while((num%i)==0){
            primeArray.push(i);
            num /= i;
        }
    }
}


function printArray(){
    primeFactors();
    for(let i = 0; i < primeArray.length; i++){
        console.log(primeArray[i]);
    }
}

printArray(); 