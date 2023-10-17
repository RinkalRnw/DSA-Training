//Question 3: Check Palindrome (Two Pointer Approach)
let  word = "racecara";
let start=0 ;
let end =word.length-1 ;
let flag=true ;
while(start<end){
  if(word[start]!=word[end]){
   flag=false  ;
    break ;
   
    
  }
  start++ ;
  end-- ;
}
  
flag?console.log("yes"):console.log("no")