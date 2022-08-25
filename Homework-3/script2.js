//1 function

const getMaxDigit = (num) => {
    let result = -1;
                for (let i = num; i > 0; i = Math.floor(i / 10)) {
                    let digit = i % 10;
                    if (result < digit)
                        result = digit;
                }
                return result;
            }

//2 function

const Degree = (c, d) => {
    let answer = c;
        if (d == 0) {
            document.writeln(` \u00A0 1`);
        } else if (d == 1) {
            document.writeln(` \u00A0 ${a}`);
        }
        while (d > 1) {
            answer = answer * c;
            d = d - 1;
        }
        return answer;   
}

//3 function

const LetterBIG = (e) => {
    let nameresult = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    return nameresult;
}

//4 function

const SalaryFEE = (g) => {
    let salary = g - g * 0.195;
    return salary;
}

//5 function

const getRandom = (min, max) => {
    let resultrandom = Math.random() * (max - min) + min;
    return resultrandom;
}

//6 function

const CountLetter = (ltr, w) => {
    let letterr = ltr.charAt(0).toLowerCase();
    let wordd = w.charAt(0).toLowerCase() + w.slice(1).toLowerCase();
    let count = [...wordd].filter(l => l === letterr).length;
    return count;
};

//7 function

const convert = (sum) => {
    let converted;
    sum = sum.toUpperCase();
    if (sum.indexOf('UAH') != -1) {
        converted = (+(sum.slice(0, sum.indexOf('UAH'))) / 25).toString() + '$';
    } else if (sum.indexOf('$') != -1) {
        converted = (+(sum.slice(0, sum.indexOf('$'))) * 25).toString() + 'UAH';
    } else {
        return 'Ми конвертуємо тільки UAH <==> $'
    }
    return converted
};

//9 function

const getRandomPassword = (size) => {
    resultpass = '';
    for (i = 0; i < size; i++) {
        resultpass = resultpass + (Math.floor(Math.random() * 10)).toString();
    }
    return resultpass;
};



//Вивід усіх функцій

let n = 5874;
document.getElementById('all1').innerHTML=`Функція №1 <br> В числі: ${n} найбільшою цифрою є: ${getMaxDigit(n)} <br>`;

let a = 5;
let b = 3;
document.getElementById('all2').innerHTML=`Функція №2 <br> Піднявши число ${a} до ${b} степені отримаємо : ${Degree(a, b)} <br>`;

let f = "воЛОдИмир";
document.getElementById('all3').innerHTML=`Функція №3 <br> Після форматування імені: ${f}, отримаємо: ${LetterBIG(f)} <br>`;

let j = 15000;
document.getElementById('all4').innerHTML=`Функція №4 <br> Якщо ваша зарплата: ${j} то після врахування податку отримаємо: ${SalaryFEE(j)} <br>`;

let minnumber = 10;
let maxnumber = 100;
document.getElementById('all5').innerHTML=`Функція №5 <br> В проміжку між : ${minnumber} та ${maxnumber} рандомно отримаємо: ${Math.floor(getRandom(minnumber, maxnumber))} <br>`;

let letter = "а";
let word = "Антиматерія";
document.getElementById('all6').innerHTML=`Функція №6 <br> В слові: ${word}, кількість букви ${letter} = ${CountLetter(letter, word)} <br>`;

let money = "10000UAH";
document.getElementById('all7').innerHTML=`Функція №7 <br> При конвертації ${money} в $ отримаємо: ${money} = ${convert(money)} <br>`;

let sizeOfPass = 7;
document.getElementById('all9').innerHTML=`Функція №9 <br> Користувач хоче пароль довжиною: ${sizeOfPass}, наша програма видасть: ${getRandomPassword(sizeOfPass)} <br>`;