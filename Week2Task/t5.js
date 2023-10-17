//Question 5: Merge Two Sorted Arrays using two pointer approach
const arr1 = [1, 3, 5, 7 ,8 , 9];
const arr2 = [2, 4, 6, 8 ,9];
let first=0 ;
let second=0 ;
let mergeArray=[] ;

while(first<arr1.length && second<arr2.length){
  if(arr1[first]<arr2[second]){
    mergeArray.push(arr1[first]) ;
    first++ ;
  }else{
    mergeArray.push(arr2[second]) ;
    second++ ;
  }
}
if(first<arr1.length){
  for(let i =first ; i<arr1.length ; i++){
    mergeArray.push(arr1[i]) ;
  }
}else{
  for(let i =second ; i<arr2.length ; i++){
    mergeArray.push(arr2[i]) ;
  }
}
console.log(mergeArray)