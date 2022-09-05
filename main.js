// // 1. Nullish Coalecing Operator

// const idade = 0;

// // 0, '', [], false, undefined, null => false

// document.body.innerText = 'Sua idade é: ' + (idade ?? 'Nenhuma');

// 2. Objetos

// const user = {
//   name: 'Diego',
//   nickname: "Schell",
//   idade: 27,
//   address: {
//     street: 'Rua Teste',
//     number: 176
//   },
// };

// document.body.innerText = ('name' in user);
// document.body.innerText = Object.keys(user);
// document.body.innerText = Object.values(user);
// document.body.innerText = JSON.stringify(Object.values(user));
// document.body.innerText = JSON.stringify(Object.entries(user));

// // 3. Desestruturação

// const { address, idade: age, nickname = 'Fernandes'} = user;

// document.body.innerText = JSON.stringify({ address, age });

// function mostraIdade({ idade }){
//   return idade
// };

// document.body.innerText = mostraIdade(user);

// // 4. Rest Operator

// // const { name, ...rest } = user;

// const array = [1,2,3,4,5,6,7,8,9,10];

// const [first, second, ...rest] = array;

// document.body.innerText = JSON.stringify({ first, second, rest});

// 5. Short Syntax 

// const name = 'Diego';
// const age = 27

// const user = {
//   name,
//   age,
// };

// document.body.innerText = JSON.stringify(user)

// 6. Optional Chaining

const user = {
  name: 'Diego',
  age: 27,
  // address: {
  //   street: 'Rua Teste',
  //   number: '176',
  //   zip: {
  //     code: '89160000',
  //     city: 'Rio do Sul'
  //   },
  //   showFullAddress() {
  //     return 'RECEBA';
  //   }
  // },
};

// const key = 'state';

// document.body.innerText = user.address?.[key] ?? 'Eu simplesmente não existo.'

//// 7. Métodos de array: map(), reduce(), filter(), every(), some(), find(), findIndex()

const array = [1,2,3,4,5];

// for (const i of array) {
//   document.body.innerText += i
// }

// array.forEach( item => {
//   document.body.innerText += item
// })

// const novoArray = array
//   .filter(item => item % 2 !== 0)
//   .map(item => item * 10)

// const todosItensSaoNumeros = array.every(item => {
//   return typeof item == 'number';
// });

// const peloMenosUmItemNaoEUmNumero = array.some(item => {
//   return typeof item != 'number';
// })

// const par = array.find(item => item % 2 == 0);

// const soma = array.reduce((acc, item) => {
//   return acc + item
// }, 0)

// document.body.innerText = JSON.stringify(soma)

//// 8. Template Literals

// const name = null;
// const message = `Bem-vindo, ${name ?? 'Estranho'}`

// document.body.innerText = message

//// 9. Promises

// async function buscaDadosNoGitHub() {
//   try {
//     const reponse = await fetch('https://api.github.com/users/helioLJ');
//     const body = await reponse.json();

//     return body.name;
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log('deu');
//   }
// }

// buscaDadosNoGitHub().then(name => {
//   console.log(name);
// })

//// 10. ES Modules

// import { soma, sub, PI } from './lib/math'
// import { soma as sum } from './lib/math'
import sum from './lib/sum' // Posso usar outro nome na importação (export default)
import * as math from './lib/math'

console.log(math.soma(1, 2));
console.log(math.sub(2, 1));
console.log(math.PI);