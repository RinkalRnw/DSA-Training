// Task 8: Rotate By 90
let arr=[[1,2,3,4],
         [5,6,7,8],
         [1,2,3,4],
         [5,6,7,8]]

for(let j = arr[0].length ; j>=0 ; j--){
  let new_arr=[] ;
  for(let i =0 ;i<arr.length ; i++){
    new_arr.push(arr[i][j]) ;
  }
  console.log(new_arr)
}
