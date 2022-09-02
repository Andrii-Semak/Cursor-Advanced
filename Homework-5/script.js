// 1 function

const getRandomArray = (length, min, max) => {
    let randomarr = [];
    for (i = 0; i < length; i++) {
        randomarr.push(Math.floor(Math.random() * (max - min) + min)); 
    } 
    return randomarr; 
};

let lengtharr = 10;
let minnumber = 15;
let maxnumber = 100;
document.getElementById('all1').innerHTML=`Функія 1:<br>Масив рандомних чисел в проміжку між ${minnumber} та ${maxnumber} довжиною 10: 
                                           ${getRandomArray(lengtharr, minnumber, maxnumber).join(', ')}.`;

// 2 function

const getModa = (...arr) => {
    let newarr = arr.filter(element => Number.isInteger(element))
    let object = {};
    for(let i = 0 ; i < newarr.length; i++){
        let element = newarr[i];
        if(object[element]){
            object[element]++
        }else {
            object[element] = 1;
        }
    }

    let count = 0 ;
    let moda = "";
    for(let element in object){
        if(count < object[element]){
            count = object[element];
            moda = element;
        }
    }
    return moda;
}


let numbersformoda = [1, 2.5 ,3 ,4.4, 2.5, 3, 25, 2.5, 3.8, 5, 3, 2.5, 3, 2.5]
document.getElementById('all2').innerHTML=`Функія 2:<br>В масиві: ${numbersformoda.join(', ')} : Мода: ${getModa(1, 2.5 ,3 ,4.4, 2.5, 3, 25, 2.5, 3.8, 5, 3, 2.5, 3, 2.5)}.`;

// 3 function

const getAverage = (...arr) => {
    let newarr = arr.filter(element => Number.isInteger(element))
    let sum = newarr.reduce((accumulator, element) => accumulator + element, 0);
    let length = newarr.length;
    return sum / length;
  };
  
let numbersforaverage = [1, 2, 3, 8.5, 4, 10, 5, 9.4, 44, 21];
document.getElementById('all3').innerHTML=`Функія 3:<br>В масиві: ${numbersforaverage.join(', ')} : Середнє арифметичне: ${getAverage(1, 2, 3, 8.5, 4, 10, 5, 9.4, 44, 21)}.`;

// 4 function

const getMedian = (...arr) => {
    let newarr = arr.filter(element => Number.isInteger(element))
    let mid = Math.floor(newarr.length / 2),
    nums = [...newarr].sort((a, b) => a - b);
    return newarr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

let numbersformedian = [1, 2, 3, 4.5, 4, 5, 5.5, 9.4, 9, 10];
document.getElementById('all4').innerHTML=`Функія 4:<br>В масиві: ${numbersformedian.join(', ')} : Медіана: ${getMedian(1, 2, 3, 4.5, 4, 5, 5.5, 9.4, 9, 10)}.`;

// 5 function

const filterEvenNumbers = (...arr) => {
    let newarr = arr.filter(element => element%2)
    return newarr
};

let arrofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById('all5').innerHTML=`Функія 5:<br>В масиві: ${arrofnumbers.join(', ')} : відфільтруємо парні числа: ${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).join(', ')}.`;

// 6 function

const countPositiveNumbers = (...arr) => {
    let newarr = arr.filter(element => element > 0)
    const sum = newarr.reduce((accumulator, element) => {
        return accumulator + element;
    }, 0);
    return sum
};

let numbersforsum = [-1, 2, 3, -4, 5, 6, -7, 8, 9, -10];
document.getElementById('all6').innerHTML=`Функія 6:<br>В масиві: ${numbersforsum.join(', ')} : ігноруючи числа < 0, сума чисел: ${countPositiveNumbers(-1, 2, 3, -4, 5, 6, -7, 8, 9, -10)}.`;

// 7 function

const getDividedByFive = (...arr) => {
    let newarr = arr.filter(element => element%5 == 0)
    return newarr;
};

let numbersforfive = [5, 2, 3, -4, 55, 6, -7, 8, 65, 15];
document.getElementById('all7').innerHTML=`Функія 7:<br>В масиві: ${numbersforfive.join(', ')} : націло на 5 діляться ці числа: ${getDividedByFive(5, 2, 3, -4, 55, 6, -7, 8, 65, 15).join(', ')}.`;

// 8 function
// В цій функції я не знав як зробити по умові завдання і зробив як зміг, не судіть строго ^_^

const replaceBadWords = (sentence) => {
    let badwords = /shit|fuck/gi;
    let sentecefixed = sentence.replace(badwords, '****');
    return sentecefixed;
};

let sentenceBad = 'Are you fucking kidding? Why you are so bullshit?';
document.getElementById('all8').innerHTML=`Функія 8:<br>В реченні: ${sentenceBad} : зацензуримо погані слова: ${replaceBadWords(sentenceBad)}`;

// 9 function

const divideByThree = (word) => {
    let size = 3;
    wordfull = word.replace(/ /g, '')
    const ThreeBlocks = Math.ceil(wordfull.length / size)
    const blocks = new Array(ThreeBlocks)
  
    for (let i = 0, chunk = 0; i < ThreeBlocks; ++i, chunk += size) {
        blocks[i] = wordfull.substr(chunk, size)
    }
  
    return blocks;
  }

let wordtosplit = 'Comma nder';
document.getElementById('all9').innerHTML=`Функія 9:<br>Розбити слово: ${wordtosplit} : на склади по 3 букви видаляючи пробіли: ${divideByThree(wordtosplit.toLowerCase()).join(', ')}.`;