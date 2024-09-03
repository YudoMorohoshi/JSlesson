section5 問題

Q1 変数
 let nickname = "たぬき";
 let age = 28;

 console.log("私のニックネームは" + nickname + "です。年齢は" + age + "歳です。");

Q2 配列
 let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
 let favoriteLanguage = languages[0];
 let studyLanguage = languages[3];

 console.log(`私の好きな言語は${favoriteLanguage}です。次は${studyLanguage}を勉強してみたいです。`);

Q3 オブジェクト

 let user = {
   name: 'John',
   age: 26,
   bloodType: 'A',
   favorite: 'card',
 };

 console.log(user.age);


 Q4 配列 × オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

 console.log(playerList[1].favorites[1]);


 Q5 四則演算

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;

console.log(averageAge);


Q6 関数

function sayHello() {
  console.log("Hello");
}

sayHello();

let sayWorld = function() {
  console.log("World");
};

sayWorld();


Q7 メソッド

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log("Hello!");
};

user.sayHello();

console.log(user.birthday);


Q8 因数

let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);        
calc.subtract(20, 10);  
calc.multiply(7, 7);   
calc.divide(15, 3);    



Q9 返り値


function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);

console.log(`5 を 3 で割った余りは ${result} です。`);


Q10 スコープ

function foo() {
  let x = 1;
}

console.log(x); 
// 変数xはfoo関数内で定義されているため、foo関数の外部から参照することはできません。
// 関数の外でxを参照しようとしても、スコープ範囲外でありxは定義されていないためエラーになります。


section6
Q1

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

Q2 

setTimeout(function() {
  console.log("Hello World!");
}, 3000);

Q3

let num = 2;
if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

Q4

let numbers = []; 

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers); 


Q5

let mixed = [4, '2', 5, '8', '9', 0, 1]; 

for (let i = 0; i < mixed.length; i++) {
  let element = mixed[i];
  
  if (typeof element === 'number') { 
    if (element % 2 === 0) {         
      console.log('even');
    } else {                         
      console.log('odd');
    }
  } else {                           
    console.log('not number');
  }
}