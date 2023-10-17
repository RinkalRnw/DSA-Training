//Question 2: Reverse a String (Two Pointer Approach)
let s = "Hello, World!";

let arr=s.split("") ;
let left=0 ;
let right=s.length-1 ;
while(left<=right){
  let temp=arr[left] ;
  arr[left]=arr[right] ;
  arr[right]=temp ;
  left++ ;
  right-- ;
}
console.log(arr.join(""))