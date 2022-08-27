let array = new Array();

function fillArrayWithRandNums(){
   for(let i = 1; i <= 10; i++){
      let randNum = Math.floor(Math.random()*900+100);
      array.push(randNum);
   }
}

function printArray(){
   fillArrayWithRandNums();
   for(let i = 0; i < array.length; i++){
      console.log(array[i]);
   }
}

function findSecondLargest_smallest(){
   let largestNum = array[0];
   let secondLargestNum = array[0];
   
   let smallestNum = array[0];
   let secondSmallestNum = array[0];

   for(let i = 1; i < array.length; i++){
      if(largestNum < array[i]){
         secondLargestNum = largestNum;
         largestNum = array[i];
      }
      else if(secondLargestNum < array[i]){
         secondLargestNum = array[i];
      }
      if(smallestNum > array[i]){
         secondSmallestNum = smallestNum;
         smallestNum = array[i];
      }
      else if(secondSmallestNum > array[i]){
         secondSmallestNum = array[i];
      }
   }
   console.log("Second largest number :- " + secondLargestNum);
   console.log("Second smallest number :- " + secondSmallestNum);
}


printArray();
findSecondLargest_smallest();