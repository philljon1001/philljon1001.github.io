// console.log('Hello Everyone');
// console.error('This is an error');
// console.warn('This is a warning');

// let age = 30;
// console.log(age)

// const must be initialized ie:
// const age = 40;

// const name = 'John';
// const age = 25;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z; // this is equally undefined 

// console.log(typeof z);
// notice that both y and z have similar typeOf values - "undefined"

//CONCATENATION
// console.log('My name is ' + name + ' and I am ' + age + '!');

// //TEMPLATE STRINGS

// console.log(`My name is ${name} and I am ${age}`);
// //OR
// const details = `My name is ${name} and I am ${age}`;
// console.log(details);

// //MANIPULATING STRINGS (STRING METHODS)

// const s = 'Hello Everyone';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 6));

// const a = 'Technology, IT, Engineering, Arts, Social';
// console.log(a.split(', '));

//ARRAYS - VARIABLES WITH MULTIPLE VALUES

// CONSTRUCTOR METHOD
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['Apples', 'Pears', 'Oranges', 3, 78] // flexibility of accommodating multiple datatypes.
// console.log(fruits[2]);
// console.log(fruits[4]);
// fruits[5] = 'Pineapples';
// console.log(fruits);
// fruits.push('mangoes');
// fruits.unshift('Bananas');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits.indexOf('Oranges'));

//OBJECT LITERALS:

// const person = {
//     fristname: 'John',
//     lastname: 'Emeafu',
//     age: 22,
//     hobbies: ['Music', 'Soccer', 'Gambling'],
//     address: {
//         Street: '21 Evelyn Reese drive',
//         City: 'Winnipeg',
//         Province: 'Manitoba',
//         Country: 'CA'
//     },
//     girlfriend: true,
// };
// console.log(person);
// console.log(person.lastname);
// console.log(person.hobbies[1]);
// console.log(person.address.Street);

// // // DESTRUCTURING: Nb it is all case sensitive

// const {firstname, lastname, address: {City}} = person;
// console.log(City);
// person.email = 'je@1000.com'
// console.log(person);

//ARRAYS OF OBJECTS:

// const todos = [
//     {
//         id: 1,
//         task: 'Take out Trash',
//         isDone: false
//     },
//     {
//         id: 2,
//         task: 'organise room',
//         isDone: false
//     },
//     {
//         id: 3,
//         task: 'contact Grace',
//         isDone: true
//     }
// ];

// console.log(todos[2].task);

// //Sending Data to a Server requires converting your code to a supported Server format - JSON thus:

// // const toJSON = JSON.stringify(todos);
// // console.log(toJSON);


// //LOOPS:
// // FOR LOOP:

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// //WHILE LOOP:

// let i = 0;
// while(i < 10){
//     console.log(`For Loop Number ${i}`);
//     i++;
// }

// for(i = 0; i < todos.length; i++){
//     console.log(`task ${i} for id:${todos[i].id} is ${todos[i].task}`);
// }

// // Alternatively:
// for(let a of todos){
//     console.log(a.task);
// }

// //Array Iterations:

// // forEach - Loops through
// // map - create an array from array
// // filter - build array based on a condition.

// todos.forEach(function(a){
//     console.log(a.task);
// });

// const todotask = todos.map(function(b){
//     return b.task;
// });
// console.log(todotask);

// const todoDone = todos.filter(function(b){
//     return b.isDone === true;
// });
// console.log(todoDone);

// const todoDoneTask = todos.filter(function(b){
//     return b.isDone === false;
// }).map(function(b){
//     return b.task;
// })
// console.log(todoDoneTask);

// CONDITIONAL:

// const x = '10';

// if(x === 10){
//     console.log('x is 10');
// }
// else{
//     console.log('10 is of a different datatype: '+ typeof x);
// }

//Ternary Operator:

// const x = 10;
// let color = x > 10 ? 'Red' : ' Blue'
// console.log(color);
// let colour = 'green';
// switch(colour){
//     case 'Red': console.log('Color is Red');
//     break;
//     case ' Blue': console.log('Color is Blue');
//     break;
//     default: console.log('Color is Neither Red nor Blue');
//     break;
// }

//Functions:

// function addNum(num1, num2){
//     return (num1 + num2); // can use a console here but naturally with functions, 
//     // you want to return a value!!!
// }

// console.log(addNum(3,6));

//Arrow Functions
// const addNum = (num1, num2) => console.log(num1 + num2);
// addNum(3,8);

// const addNum = (num1, num2) => num1 + num2;
// console.log(addNum(34,8));

// const addNum2 = (num3) => num3 + 27;
// console.log(addNum2(56));

// //Function Constructor: Pre-Class method:

// function Person (firstname, lastname, citizen, dob) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.citizen = citizen;
//         this.dob = new Date(dob);
//         // this.getFullName = function (){
//         //     return `${this.firstname} ${this.lastname}`;
//         //     }
//         // this.getBirthYear = function(){
//         //     return this.dob.getFullYear();
//         // }

//         Person.prototype.getFullName = function(){
//             return `${this.firstname} ${this.lastname}`;
//         }

//         Person.prototype.getBirthYear = function(){
//             return this.dob.getFullYear();
//         }
//     }



// //Instantiate the Object above:
// const person1 = new Person('John', 'Emeafu', 'NGR', '2000-2-12');
// const person2 = new Person('Lotty', 'Lonzo', 'NGR', '1995-1-15');
// console.log(person2.getFullName());
// console.log(person1.getBirthYear());
// console.log(person1);

// //New Method - Introduced Classes: ES2015 Class

// class profile{
//     constructor(firstname, lastname, citizen, dob){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.citizen = citizen;
//         this.dob = new Date(dob);
//         Person.prototype.getFullName = function(){
//             return `${this.firstname} ${this.lastname}`;
//         }

//         Person.prototype.getBirthYear = function(){
//             return this.dob.getFullYear();
//         };
//     }
// }
// const person3 = new Person('John', 'Emeafu', 'NGR', '2000-2-12');

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Howdy';
// ul.children[1].innerText = 'Guess';
// ul.lastElementChild.innerHTML = '<h2>Hey Man</h2>'

const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const contactName = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const description = document.querySelector('#description');

function changeBg(){
    var image = document.querySelector('.back')
    var images = [
    'url("./images/img1.jpg")',
    'url("./images/img2.jpg")',
    'url("./images/img3.jpg")',
    'url("./images/img4.jpg")',
    'url("./images/img5.jpg")',
    'url("./images/img6.jpg")',
    'url("./images/img7.jpg")'
    ]
    var bg = images[Math.floor(Math.random() * images.length)];
    image.style.background= bg;

}
setInterval(changeBg, 3000);





// myForm.addEventListener('submit', onsubmit);
// function onsubmit(e) {
//     e.preventDefault()
//     if(contactName.value === '' || email.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter required fields';
        
//     }
//     else{
//         alert('Record Saved!');
//     }
// }
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#eee';
//     alert('Record Saved!');
// })