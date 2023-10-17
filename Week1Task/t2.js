//Task 2: Remove Duplicates from an aay using Bubble Sort for Sorting
let a=[31, 22, 5, 22, 31, 4, 5, 6] ;
let len = a.length
for(let i = 0 ;i<len; i++){
  for(let j = 0 ; j<len-i-1 ; j++){
    if(a[j]>a[j+1]){
      let temp = a[j] ;
      a[j]=a[j+1] ;
      a[j+1]=temp ;
    }
  }
}
for(let i = 0 ; i<len; i++){
  if(a[i]!==a[i-1]){  
     console.log(a[i]) ;
  }
}