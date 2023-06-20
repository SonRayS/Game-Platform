/*// 1 - hw
let a = 10;
    alert(`let a = ${a}`);
    alert(`let a = ${a+10}`);

// 2 - hw
const iphone = 2007;
    alert(`Year of release of the first iPhone: ${iphone}`);

// regggggeg - hw
const name = "Брендан Эйх";
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
    num /= ;
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
    alert(typeof user.name); //user name
    alert(typeof user.age); // age
    alert(typeof user.isAdmin); // admin 

    //Как вывести текст + указатель (`Тип:,(typeof)${name} !`) a ?

// 9.1 - hw
user.cityOfResidence = true;
user.Jess = 23;
    console.log(user);

// 9.2 - hw
Object.defineProperty(user, 'age', {
    value: 35,
  });
    console.log(user.age);

// 9.3 - hw
delete user.cityOFresidence;
    console.log(user);

// 10 - hw
let info = prompt("Какую информацию хотите узнать о пользователе / name / age / isAdmin / ?");
    alert(user[info]);

// 11 - hw
    let get = (prompt("What's your name ?"));
    alert(`Привет, ${get} !`);


/*
---------------------------------------------------------------------------------------------------------------


function AccessDenied() {
    document.body.innerHTML = 'Доступ запрещён!';
    document.body.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: red;
    font-size: 10vh;
  `;
  }

// hw 2.3.1
                                            //let password = 1234; 

                                           // let inputPassword = prompt(`Введите пароль`);

                                           // if (password == inputPassword){
                                            //    alert('Пароль введен верно');
                                           // }
                                             //   else if (inputPassword == '' || inputPassword == null){
                                           //         alert('Ошибка значение ввода');
                                            //        AccessDenied();
                                             //   }  else {
                                              //      alert('Пароль введен неправильно');
                                                //    AccessDenied();
                                                //}

let password = '1234';
let inputPassword = prompt(`Введите пароль`);
        inputPassword = (password == inputPassword) ? 'Пароль введен верно' : 'Пароль введен неправильно';
    alert(inputPassword);

// hw 2.3.2
let c = 2;
let result;

    result = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
    console.log(result);

// hw 2.3.3
let d = '122';
let e = '83';
let results;

results = (d > 100 || e > 100) ? 'Верно' : 'Неверно';
console.log(results);

// hw 2.3.4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
// alert ((a+b)-18); XD XD XD XD XD XD XD XD XD XD XD XD
alert (Number(a)+Number(b));

// hw 2.3.5
let monthNumber = prompt('Введите номер месяца в году');
(monthNumber >= 1 && monthNumber <= 12 || monthNumber < 1 && monthNumber > 12) ? 'Верно' : 'Псс... такого месяца нет';
    alert(`Вы ввели число: ${monthNumber}`);
    
    switch (monthNumber){
        case '1':
            alert('январь')
            break;
        case '2':
            alert('февраль')
            break;
        case '3':
            alert('март')
            break;
        case '4':
            alert('апрель')
            break;
        case '5':
            alert('май')
            break;
        case '6':
            alert('июнь')
            break;
        case '7':
            alert('июль')
            break;
        case '8':
            alert('август')
            break;
        case '9':
            alert('сентябрь,')
            break;
        case '10':
            alert('октябрь')
            break;
        case '11':
            alert('ноябрь')
            break;
        case '12':
            alert('декабрь')
            break;
        default: console.error('Что то пошло не по плану (Псс... такого месяца нет');
            break;
    }

//hw 2.3.6
//animation in index 

//hw 2.3.7
let num = prompt('Пожалуйста, введите любое число');
let check;
check = (num == Number(num) || num == !Number(num)) ? 'Число':'NaN';
    alert(check);
let look;
look = (num%2 == 0 || num%2 == 1 && num%2 == -1) ? 'число четное':'нечетное число';
    alert(look);

//hw 2.3.8 -  hw 2.3.9
const getMobileOS = () => {
    const getMobile = navigator.userAgent;
    if (/android/i.test(getMobile)) {
      return "0"
    }
    else if (/iPad|iPhone|iPod/.test(getMobile)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
      return "1"
    }
    else{
      return "2"
    }
  }

   let infoDevise = confirm('Устройство с которого вы зашли это телефон ?'); 
   if(infoDevise == true){
        let infoM = confirm('Ваш телефон был выпущен в период с 2015 по нынешний год ?');
        if (infoM == true){

            const clientOS = getMobileOS();
            switch(clientOS) {
                case '0':
                    alert('Установите версию приложения для Android по ссылке https://Android.download.file.exe');
                    console.log('Android'+navigator.userAgent);
                    break;
                case '1':
                    alert('Установите версию приложения для iOS по ссылке https://iOS.download.file.exe');
                    console.log('iOS'+navigator.userAgent);
                    break;
                case '2':
                    alert('Ваше устройство не определяется как телефон, рекомендуем установить версию приложения по ссылке https://Other.download.file.exe');
                    console.log('Other'+navigator.userAgent);
                    break;
                default:
                    console.log( 'Неизвестное значение(значение устройства вне диапазона' );
            }

        } else {

            const clientOS = getMobileOS();
            switch(clientOS) {
                case '0':
                    alert('Установите облегченную версию приложения для Android по ссылке https://Android.download.lite-file.exe');
                    console.log('Android'+navigator.userAgent);
                    break;
                case '1':
                    alert('Установите облегченную версию приложения для iOS по ссылке https://iOS.download.lite-file.exe');
                    console.log('iOS'+navigator.userAgent);
                    break;
                case '2':
                    alert('Ваше устройство не определяется как телефон, рекомендуем установить версию приложения по ссылке https://Other.download.lite-file.exe');
                    console.log('Other'+navigator.userAgent);
                    break;
                default:
                    console.log( 'Неизвестное значение(значение устройства вне диапазона' );
            }
        }

    } else { 

        let infoM = confirm('У вашего устройства больше 3 ОЗУ ?');
        if (infoM == true){

            const clientOS = getMobileOS();
            switch(clientOS) {
                case '0':
                    alert('Установите версию приложения для Android по ссылке https://Android.download.file.exe');
                    console.log('Android'+navigator.userAgent);
                    break;
                case '1':
                    alert('Установите версию приложения для iOS по ссылке https://iOS.download.file.exe');
                    console.log('iOS'+navigator.userAgent);
                    break;
                case '2':
                    alert('Установите версию приложения по ссылке https://Other.download.file.exe');
                    console.log('Other'+navigator.userAgent);
                    break;
                default:
                    console.log( 'Неизвестное значение(значение устройства вне диапазона' );
            }

        } else {

            const clientOS = getMobileOS();
            switch(clientOS) {
                case '0':
                    alert('Установите облегченную версию приложения для Android по ссылке https://Android.download.file.exe');
                    console.log('Android'+navigator.userAgent);
                    break;
                case '1':
                    alert('Установите облегченную версию приложения для iOS по ссылке https://iOS.download.lite-file.exe');
                    console.log('iOS'+navigator.userAgent);
                    break;
                case '2':
                    alert('Установите версию приложения по ссылке https://Other.download.lite-file.exe');
                    console.log('Other'+navigator.userAgent);
                    break;
                default:
                    console.log( 'Неизвестное значение(значение устройства вне диапазона' );
            }

        } 
    }
       */


/* while(true) {
    const i = prompt('Введите текст: ');
    if(i === 'break'){
        break;
    } else if (i === 'continue') {
        continue;
    }
    console.log('В. значение: ',`${i}`);
}
 */

/* const data = { 
    name: 'Jess' ,
    age: 23 ,
    Pol: 'men' ,
    admin: true 
};

for (key in data) { 
    if (data[key]) {
        console.log (`${key} : ${data[key]}`)
    }
} */

/* HOME WORK 2.4 -----------------------------------------------------------------------------------------------------------*/
/* ---------------------
        Задание 1
--------------------- */
/* let i = 0;

while(i < 2){   
    console.log('Привет');
    i++
}
 */
/* ---------------------
        Задание 2
--------------------- */

/* let a = 0;

while(a < 6){   
    console.log(`${a}`);
    a++
} */

/* ---------------------
        Задание 3
--------------------- */

/* for(i = 7;i < 23;i++){
    console.log(i)
}
 */
/* ---------------------
        Задание 4
--------------------- */

/* const work = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (money in work){
    if(work[money]){
        console.log(`${money} — зарплата ${work[money]}`)
    }
} */

/* ---------------------
        Задание 5
--------------------- */

/* let n=1000;

do{
    n /= 2;
    console.log(n);
} while (n > 50){   
    console.log(`result n: ${n}`);
} */

/* ---------------------
        Задание 6
--------------------- */

/* let day = 1;
let order = 5;

for (day, order; order <= 31; day++, order += 7){
  
    if (day = order) {
        console.log(`Сегодня пятница, ${order}-е число. Необходимо подготовить отчет.`);
    } else {
        console.log(`Сегодня, ${day}-е не день отчета`);
    }
}

 */

/* ------------------------------------------------------------------------------------------------------------------------------ */

/* function calculator(length, max) {

    const generationArray = (length, max) =>
    ([...new Array(length)].map(() => Math.round(Math.random() * max)));

    const number = generationArray(length, max);
    console.log(`Массив 1. Длина: ${length} 2. Максимальное число : ${max} Array : ${number}`);
   
    let sum = 0;
    number.map((item) => sum += item);
    console.log(sum);

}

calculator(20, 65);
calculator(24, 53);


function quest(question,answer) {
    let userAnswer = prompt(question)
    check = (userAnswer === answer) ? 'Right' : 'Nooo...'; 
    console.log(check);
}

quest('Зимой и летом одним цветом', 'елка');
 */


/* ---------------------
        Задание 1
--------------------- */

/* const equality = (a,b) =>{
    
    a = parseInt(prompt('Введите 1-ю (цифру || число) :'));
    b = parseInt(prompt('Введите 2-ю (цифру || число) :'));
    
    if (a > b){
        alert(`${a} больше ${b}`);
    } else if (a < b) {
        alert(`${b} больше ${a}`);
    } else { 
        alert(`Answer: ${a} и ${b} раны`);
    }
}


equality(); */

/* ---------------------
        Задание 2
--------------------- 
*/

/* const even = (a) => {
    a = parseInt(prompt('Введите (цифру || число)'));
    look = (a%2 == 0 || a%2 == 1 && a%2 == -1) ? 'число четное':'нечетное число';
    alert(look);
}

even(); */



/* ---------------------
        Задание 3
--------------------- */
                                                            /* ---------------------
                                                                    Задание 3.1
                                                            --------------------- */

/* const squares = (a) => {
    a = parseInt(prompt('Введите (цифру || число)'));
    a *= a;
    console.log(`Квадрат числа: ${a}`);
}

squares(); */

                                                            /* ---------------------
                                                                    Задание 3.2
                                                            --------------------- */



/* const square = (a) => {
    a = parseInt(prompt('Введите (цифру || число)'));
    Math.cbrt(a);
    console.log(Math.sqrt(a));
}

square(); */

/* ---------------------
        Задание 4
--------------------- */


/* function check(age) {
    age = parseInt(prompt('Cколько тебе лет ?'))
    
    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if (age > 0 && age < 13) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }
} 

check(); */

/* ---------------------
        Задание 5
--------------------- */

/* function checkType(a,b) {
    a = parseInt(prompt('Print first number :')),
    b = parseInt(prompt('Print secound number :'))

    look = (isNaN(a) && isNaN(b)) ? 'Одно или оба значения не являются числом' :
    a + b;

   console.log(look);

}

checkType(); */


/* ---------------------
        Задание 6
--------------------- */

/* function cube(a) {

    a = parseInt(prompt('Print first number :'))

    if (Number.isInteger(a)) {
        console.log('Okay this number!');
      } else {
        return console.log('Переданный параметр не является числом');
      }
    
    console.log(Math.pow(a, 3));


}

cube(); */

/* ---------------------
        Задание 7
--------------------- */


/* let radius = parseInt(prompt('Найти периметр и площадь круга, введите радиус :'));

const circle1 = {

    getArea : Math.PI * (radius*radius),
    getPerimeter : 2 * Math.PI * radius

}

console.log(`Периметр круга: ${circle1.getArea} / Площадь круга: ${circle1.getPerimeter}`)

let radius2 = parseInt(prompt('Найти периметр и площадь 2-го круга, введите радиус :'));

const circle2 = {

    getArea : Math.PI * (radius2*radius2),
    getPerimeter : 2 * Math.PI * radius

}

console.log(`Периметр 2-го круга: ${circle2.getArea} / Площадь 2-го круга: ${circle2.getPerimeter}`) */


/* ---------------------
        Задание 8
--------------------- */


/* function season() {
    
    const month = parseInt(prompt('Введите номер месяца (от 1 до 12)'));
    if (Number.isInteger(month) && month < 3 && month > 0 || month === 12) {
        alert(`${month} месяц это зима! `)
    } else if (Number.isInteger(month) && month < 6 && month > 2) {
        alert(`${month} месяц это весна! `)
    } else if (Number.isInteger(month) && month < 9 && month > 5) {
        alert(`${month} месяц это лето! `)
    } else if (Number.isInteger(month) && month < 12 && month > 8){
        alert(`${month} месяц это осень! `)
    } else {
        alert('Ошибка, такого месяца нет, проверьте правильность синтаксиса')
    }
} */

