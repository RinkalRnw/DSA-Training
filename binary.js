let arr = [1,2,3,5,7,9,10];
let s = 2;

let start = 0;
let end = arr.length-1;
const search=()=>{
    while( start <= end ){
        let mid = (start+end)/2;
        
        if(arr[mid] == s){
            console.log("search found")
            break;
        }
        else if(arr[mid] > s){
            end=mid-1;            
        }
        else if(arr[mid] < s){
            start=mid+1;
        } else {
            console.log("no data found -1")
        }
    }
}

search();