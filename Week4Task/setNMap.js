//set - only store unique value no duplicate value allowed -- key-value pair

let set = new Set();
set.add(10)
set.add(20)
set.add(30)
set.add(10)

// console.log(set.size)
// console.log(set.has(10)) //exist or not

let arr = [2,3,5,6,2,5,6]
let arr1 = new Set(arr)

arr1.forEach(i => {
    console.log(i)
});

let map = new Map()
map.set("name","Rinkal")
map.set("one",1)
map.set("one",100)
map.set("age",25)

map.forEach((i,index) => {
    console.log(i,"--",index)
});

