//Task 3: Rotate the Array by 90
let arr=[[1,2,3,4],
         [5,6,7,8],
         [1,2,3,4],
         [5,6,7,8]]
let i,j;
let len = arr.length;
for(let j = arr[0].length ; j>=0 ; j--){
  let new_arr=[] 
  for(let i =0;i<len; i++){
    new_arr.push(arr[i][j]) ;
  }
  console.log(new_arr)
}