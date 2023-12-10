// localStorage.setItem('username', 'rubberdork');
// const username = localStorage.getItem('username');
// console.log(username);
// const user = {
//   username: 'rubberdork',
//   age: 22,
//   dork: true
// };
// localStorage.setItem('user', user);
// console.log(typeof localStorage.getItem('user'))
// JSON

// const userStringified = JSON.stringify(user);
// console.log(typeof userStringified, userStringified);
// localStorage.setItem('user', 'test')
// localStorage.clear()
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  console.log('no user do something')
} else {
  console.log(user);
  console.log(user.username, user.dork);
}

// localStorage.setItem
// localStorage.getItem
// JSON.stringify
// JSON.parse