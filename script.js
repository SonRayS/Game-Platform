// 1 - hw
let a = 10;
    alert(`let a = ${a}`);

// 2 - hw
let iphone = 2007;
    alert(`Year of release of the first iPhone: ${iphone}`);
// 3 - hw

let name = "Брендан Эйх";
    alert(`Name of the creator of the JavaScript language: ${name}`);
// 4 - hw

let i = 10, b = 2, plus, minus, multiplication, division, percent, degree;

    plus = i + b;
    minus = i - b;
    multiplication = i * b;
    division = i / b;
    percent = i % b;
    degree = i ** b;

        alert(`Сложение: ${plus}`);
        alert(`Вычитание: ${minus}`);
        alert(`Произведение: ${multiplication}`);
        alert(`Деление: ${division}`);
        alert(`Модуль числа (остаток от деления): ${percent}`);
        alert(`Показатель степени (возведение в степень): ${degree}`);

// 5 - hw
let j = 5;
degree = j ** b;
alert(`Показатель степени (возведение в степень): ${degree}`);

// 6 - hw
a--;
    percent = a % b;
        alert(`Показатель степени (возведение в степень): ${percent}`);

// 7 - hw
let num = 1;
    num += 5;
    num -= 3;
    num *= 7;
    num /= 3;
    num++;
    num--;
        alert(`Result: ${num}`);

// 8 - hw
let age = prompt("Сколько вам лет?");
    alert(`Ваш возраст: ${age}`);

// 9 - hw
let user = {
    name: 'Jess',
    age: 23,
    isAdmin: true
}   
    alert(typeof user.name,typeof user.age,typeof user.isAdmin); //user name
    alert(typeof user.age); // age
    alert(typeof user.isAdmin); // admin 

    //Как вывести текст + указатель (`Тип:,(typeof)${name} !`) ?

// 10 - hw
let info = prompt("Какую информацию хотите узнать о пользователе / name / age / isAdmin / ?");
    alert(user[info]);

// 11 - hw
    let get = (prompt("What's your name ?"));
    alert(`Привет, ${get} !`);