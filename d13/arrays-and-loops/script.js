const doogs = ['Tonto', 'Sailor', 'Scout', 'Odin', 'Poppy'];
// console.log(doogs);

const mixed = [1, 'string', null, true];
// console.log(mixed);

// console.log(doogs[2]);
// console.log(doogs[0]);

// console.log(doogs);
doogs[0] = 'Poopoop';
// console.log(doogs);

// console.log(doogs);
// doogs[5] = 'Snoop';
// console.log(doogs);

// console.log(doogs);
doogs.push('Snoop');


doogs.pop()
// console.log(doogs);

//vconsole.log(doogs.length);

const duos = [
    ['Bill', 'Ted'],
    ['Harold', 'Kumar'],
    ['Laurel', 'Hardy']
];
// console.log(duos[1][0]);


//v everything to control the loop is inside of the round brackets
// for (initialisation; Condition; inc/dec) {
//     do stuff
// }

// for (let i = 0; i < 5; i++ ) {
//     console.log(i);
// }
// console.log('after loop');

// const doogs = ['Tonto', 'Sailor', 'Scout', 'Odin', 'Poppy'];
// console.log(`${doogs[0]} is a good boy`);
// console.log(`${doogs[1]} is a good boy`);
// console.log(`${doogs[2]} is a good boy`);
// console.log(`${doogs[3]} is a good boy`);

// doogs.push('Lekker');
// for (let i = 0; i < doogs.length; i++) {
//     const dog = doogs[i];
//     if (dog === 'Poppy') {
//         console.log(`${dog} is a good girl`);
//     }
//     console.log(`${dog} is a good boy`);
// }

// we don't hard code these with values because things will change and we don't know how many elements will be added/removed. this is why doogs.length is more dynamic than saying just 5
// by defining a const within the loop, code is more readable (see dogs substituting for doogs[i])

const ps = document.querySelectorAll('p');
// console.log(ps.length);
// console.log(ps[0].textContent);
// console.log(ps[2].textContent);
// for (let i = 0;i < ps.length; i++) {
//     const p = ps[i];
//     function screamIt() {
//         console.log(p.textContent.toUpperCase());
//     }
//     p.addEventListener('click', screamIt);
//     console.log(p);
// }

// // for...of loop - - - this is neater than the above?
// for (let p of ps) {
//     function screamIt() {
//         console.log(p.textContent.toUpperCase());
//     }
//     p.addEventListener('click', screamIt);
// }


// function looper(dog) {
//     console.log(dog);
// }
// doogs.forEach(looper)

// // this is eqvivalent to

// for (let dog of doogs) {
//     console.log(dog)
// // }

// const looper = function (dog) {
//     console.log(dog);
// }

doogs.forEach(dog => console.log(dog));

// ps.forEach((para) => {
//     para.addEventListener('click', () => {
//         console.log(para.textContent.toUpperCase());
//     })
// })

// this neat syntax is called fat arrow
// WARNING don't try to make your code as short as possible. it still needs to be readable and having names for functions etc heaps to make it more readable