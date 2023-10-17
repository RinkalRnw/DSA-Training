//Task1- Remove duplicates from array
let a=[31, 22, 5, 22, 31, 4, 5, 6] ;
let obj=[] ;
for(let i = 0 ;i<a.length ; i++){
  let ch=a[i];
  if(obj[ch]==undefined){
    obj[ch]=1;
  }else{
    obj[ch]+=1 ;
  }
}

for(let k in obj){
  console.log(k)
}
