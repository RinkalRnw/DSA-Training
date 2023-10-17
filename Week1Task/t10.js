//Task 10
let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]] ;
for(let i = 0 ; i<arr[0].length ; i++){
  console.log(arr[0][i])  
}
let j = arr.length-2 ;
for(let i=1 ; i<arr.length-1 ; i++){
  console.log(arr[i][j]) 
  j--
}
for(let i = 0;i<arr[0].length;i++){
  console.log(arr[arr.length-1][i])
}