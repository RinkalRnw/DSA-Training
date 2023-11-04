k=3;
min_sum=0;
curr_sum=0;
let arr = [2,3,4,-1,5,4];
for(i=0;i<k;i++){    
    curr_sum += arr[i];
}

if(curr_sum<min_sum){
    min_sum=curr_sum;
}

for(i=k;i<arr.length;i++){    
    curr_sum -= arr[i-k];
    curr_sum += arr[i];
}
if(min_sum>curr_sum){
        min_sum=curr_sum;
}
console.log(min_sum);