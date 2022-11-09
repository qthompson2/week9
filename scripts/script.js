// for (i = 1, n = 0; n < 1024; i += 1) {
//     n = 2**i;
//     console.log(n);
// }

// n = 0
// exp = 1
// while (n < 1024) {
//     n = 2**exp;
//     console.log(n);
//     exp += 1;
// }

// let input;
// do {
//     input = prompt('Please enter you name.');
//     console.log(Number(input));
// } while (!isNaN(Number(input)));

// alert(`Hello ${input}`)

let fruits = ['Apple', 'Banana']
fruits.push('Orange')
fruits.pop()
fruits.unshift('Mango')
fruits.shift()

console.log(fruits)

const person = {
    name:['Bob', 'Smith'],
    age:40,
    gender:'male',
    interests:['Music', 'Skiing']
}

// let x = '';

// for (let item in person.name) {
//     x += person.name[item] + ' '
// }

// console.log(`My name is ${person.name[0]} ${person.name[1]}.  I am interested in ${person.interests[0]} and ${person.interests[1]}.`)

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}