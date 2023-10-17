//Question 6: Generate and Print All Substrings of a String Brute Force
let string="abc" ;
for(let i = 0 ;i<string.length ; i++){
  
  for(let j =i ; j<string.length ; j++){
     let bag="" ;
    for(let k = i ; k<=j ; k++){
   bag+=string[k] ;
    }
console.log(bag) ;
  }
}