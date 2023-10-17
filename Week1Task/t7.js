// Task 7: Transpose the Matrix
let arr=[[0,0,0],
         [1,1,1],
         [2,2,2]] 
for(let j= 0;j<arr[0].length;j++){
  let new_arr=[]
  for(let i = 0 ; i<arr.length;i++){
    new_arr.push(arr[i][j])
  }
  console.log(new_arr)
}