console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//let rand = Math.floor(Math.random() * 100) + 1;
//let userInput;

for(let i = 0; i < 100; i++)
{
    if (i % 2 == 0){
        continue;

    } else{
        console.log(i);
    }

}

// do{
//     if(x % 2 !==0){
//         console.log(x);
//     }

//           x++
//  while(x<100);
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <=100; i++)
{    if (i % 3 ==0 && i % 5 == 0)
    {
        console.log("FizzBuzz")
    } else if (i % 5 == 0)
    {
        console.log("Buzz")
    } else if (i % 3 == 0)
    {
        console.log("Fizz");
    } else 
    {
        console.log(i);
    }
}

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(let i = 1; i < n; i++){
    if( i==value ){
        console.log('Found Value!' );
       break;
    }   
   else{
        console.log("Did not find value");
    }
} 
