/*// 1 - hw
let a = 10;
    alert(`let a = ${a}`);
    alert(`let a = ${a+10}`);

// 2 - hw
const iphone = 2007;
    alert(`Year of release of the first iPhone: ${iphone}`);

// 3 - hw
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

    //Как вывести текст + указатель (`Тип:,(typeof)${name} !`) a ?

// 9.1 - hw
user.cityOFresidence = true;
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
    alert(`Привет, ${get} !`);*/


/*
---------------------------------------------------------------------------------------------------------------
*/

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
                /*case '2':
                    alert('Установите версию приложения по ссылке https://Other.download.file.exe');
                    console.log('Other'+navigator.userAgent);
                    break;*/
            }

        } else {

            const clientOS = getMobileOS();
            switch(clientOS) {
                case '0':
                    alert('Установите облегченную версию приложения для Android по ссылке');
                    console.log('Android'+navigator.userAgent);
                    break;
                case '1':
                    alert('Установите облегченную версию приложения для iOS по ссылке https://iOS.download.lite-file.exe');
                    console.log('iOS'+navigator.userAgent);
                    break;
                /*case '2':
                    alert('Установите версию приложения по ссылке https://Other.download.lite-file.exe');
                    console.log('Other'+navigator.userAgent);
                    break;*/
            }

        } 


       