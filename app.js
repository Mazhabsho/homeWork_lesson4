/*1.
let a = prompt('Enter you text');
let b = '';
for(let i=0;i<a.length;i++){
    b = a[i].repeat(2);
    console.log(b);
}

2. 
let a = prompt('Enter you text');
// let cnt =0;
let res =  a.match(/potato/g).length
console.log(res);


3.
let a = prompt('Enter you text');
let b = prompt('Enter you text');
let sum = 0;

for(let i = 0;i<a.length;i++){
    if(a[i].charAt() == b){
        sum++;
    }
}
console.log(sum);


4.
let a = prompt('Enter you text');
let sum = 0;

for(let i=0;i<a.length;i++){
    if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
        sum++;
    }
}
console.log(sum);

5. 
let a = prompt('Enter you text');
 a.includes('bomb')?console.log("Duck!!"):console.log("There is not duck, relax");

6. ???


7.

let a = prompt('Enter you text');

for(let i = 0; i<a.length;i++){
  if(a[i].charAt() == 'a' || a[i].charAt() == 'e' ||a[i].charAt() == 'i' ||a[i].charAt() == 'o' || a[i].charAt() == 'u'){
    console.log(i)
    break;
  }
}

8.
let a = prompt('Enter you text');
let b = +prompt('Enter you text');

if(b == 1){
    console.log(` Hello ${a}`)
}else{
    console.log(`Bye ${a}`);
}

9.???
let a = prompt('Enter you text');
let b = +prompt('Enter you text');

console.log(`${a} , ${b}`);

10.
let a = prompt('Enter you text');
 let b = a.split(' ');
 let c = b.reverse();
 console.log(c);

 148939390.2439
 
 11.*/
 let a = prompt('Enter you text');
 let b = +prompt('Enter you text');

let  c = b*100/148939390.2439
let j = Math.ceil(c);
console.log(`${a} ${j}%`);