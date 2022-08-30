//1 function

const getMaxDigit = (num) => {
    let result = 0;
                for (let i = num; i > 0; i = Math.floor(i / 10)) {
                    let digit = i % 10;
                    if (result < digit)
                        result = digit;
                }
                return result;
            }

//2 function

const getNumnerDegree = (number, degree) => {
    let answer = number;
        if (degree == 0) {
            document.writeln(` \u00A0 1`);
        } else if (degree == 1) {
            document.writeln(` \u00A0 ${number}`);
        }
        while (degree > 1) {
            answer = answer * number;
            degree = degree - 1;
        }
        return answer;   
}

//3 function

const getFormatedName = (nametoformat) => {
    let nameresult = nametoformat.charAt(0).toUpperCase() + nametoformat.slice(1).toLowerCase();
    return nameresult;
}

//4 function

const getSalaryWithTax = (salarybefore) => {
    let salary = salarybefore - salarybefore * 0.195;
    return salary;
}

//5 function

const getRandomNumber = (min, max) => {
    let resultrandom = Math.random() * (max - min) + min;
    return resultrandom;
}

//6 function

const getLetterAmount = (ltr, word) => {
    let letterr = ltr.charAt(0).toLowerCase();
    let wordd = word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
    let count = [...wordd].filter(l => l === letterr).length;
    return count;
};

//7 function

const getConvertedMoney = (sum) => {
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

const getRandomPassword = (size = 8) => {
    resultpass = '';
    for (i = 0; i < size; i++) {
        resultpass = resultpass + (Math.floor(Math.random() * 10)).toString();
    }
    return resultpass;
};



//Вивід усіх функцій

let maxdigit = 5874;
document.getElementById('all1').innerHTML=`Функція №1 <br> В числі: ${maxdigit} найбільшою цифрою є: ${getMaxDigit(maxdigit)} <br>`;

let number = 5;
let degree = 3;
document.getElementById('all2').innerHTML=`Функція №2 <br> Піднявши число ${number} до ${degree} степені отримаємо : ${getNumnerDegree(number, degree)} <br>`;

let nametoformat = "воЛОдИмир";
document.getElementById('all3').innerHTML=`Функція №3 <br> Після форматування імені: ${nametoformat}, отримаємо: ${getFormatedName(nametoformat)} <br>`;

let salary = 15000;
document.getElementById('all4').innerHTML=`Функція №4 <br> Якщо ваша зарплата: ${salary} то після врахування податку отримаємо: ${getSalaryWithTax(salary)} <br>`;

let minnumber = 10;
let maxnumber = 100;
document.getElementById('all5').innerHTML=`Функція №5 <br> В проміжку між : ${minnumber} та ${maxnumber} рандомно отримаємо: ${Math.floor(getRandomNumber(minnumber, maxnumber))} <br>`;

let letter = "а";
let word = "Антиматерія";
document.getElementById('all6').innerHTML=`Функція №6 <br> В слові: ${word}, кількість букви ${letter} = ${getLetterAmount(letter, word)} <br>`;

let money = "10000UAH";
document.getElementById('all7').innerHTML=`Функція №7 <br> При конвертації ${money} в $ отримаємо: ${money} = ${getConvertedMoney(money)} <br>`;

let sizeOfPass = 7;
document.getElementById('all9').innerHTML=`Функція №9 <br> Користувач хоче пароль довжиною: ${sizeOfPass}, наша програма видасть: ${getRandomPassword(sizeOfPass)} <br>`;
