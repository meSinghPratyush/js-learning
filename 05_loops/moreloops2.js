//for in loop...
//iterating through objects...

const myobj={
    js:"Javascript",
    CPP:"c++",
    RB:"ruby",
    swift:"Swift by apple"
}

for (const key in myobj) {
    //console.log(`${key} extention for file name ${myobj[key]}`);
    
}

const arr=["js","c++","Swift","Ruby"]

for (const key in arr) {
   // console.log(key);
    
    //console.log(key,arr[key]);
    
}

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FN',"FRANCE")
map.set('SP',"SPAIN")

for (const key in map) {
    //console.log(key); //not iteratable....
    
}