
let arr=[2,3,4,1,2];
let max= 0 ;
for(let i = 0 ; i<arr.length ; i++){
  let sub= [] ;

  for(let j =i ; j<arr.length ; j++){
    sub.push(arr[j]) ;
    let sum= 0 ;
    for(let k = 0 ;k<sub.length ; k++){
      sum+=sub[k] ;
    }
 console.log(sum) ;
    if(sum>max){
      max=sum ;
    }
  }
}

console.log(max)