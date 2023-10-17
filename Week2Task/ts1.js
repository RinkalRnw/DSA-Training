//two sum Question 1: Two Sum Problem (Two Pointer Approach)
let arry=[2, 7, 11, 15] ;
let start = 0  ;
let end=arry.length-1 ;
let k = 9 ;
while(start<end){

  let sum = arry[start]+arry[end] ;
  if(sum===k){
    console.log(start,end) ;
    break ;
  }else if(sum>k){
    end-- ;
  }else{
    start++ ;
  }
}
  