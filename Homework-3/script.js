//1 function

buttone.onclick = function() {
let n = document.getElementById('firstinput').value;
document.getElementById('resultone').innerHTML=` \u00A0 ${getMaxDigit(Number(n))}`;
 
        function getMaxDigit(num) {
            let result = -1;
            for (let i = num; i > 0; i = Math.floor(i / 10)) {
                let digit = i % 10;
                if (result < digit)
                    result = digit;
            }
            return result;
        }
};

//2 function

butttwo.onclick = function() {
    let a = document.getElementById('number').value;
    let b = document.getElementById('degree').value;
    let answer = a;
        if (b == 0) {
            document.getElementById('resulttwo').innerHTML=` \u00A0 1`;
        } else if (b == 1) {
            document.getElementById('resulttwo').innerHTML=` \u00A0 ${a}`;
        }
        while (b > 1) {
            answer = answer * a;
            b = b - 1;
            document.getElementById('resulttwo').innerHTML=` \u00A0 ${answer}`;
        }                
};

//3 function

buttthree.onclick = function() {
    let name = document.getElementById('name').value;
    const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    document.getElementById('resultthree').innerHTML=` \u00A0 ${result}`;              
};

//4 function

buttfour.onclick = function() {
    let c = document.getElementById('salary').value;
    let salary = c - c * 0.195;
    document.getElementById('resultfour').innerHTML=` \u00A0 ${salary}`;
};

//5 function

buttfive.onclick = function() {
    let a = document.getElementById('numberone').value;
    let b = document.getElementById('numbertwo').value;
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
    let result = getRandom(Number(a), Number(b));
    document.getElementById('resultfive').innerHTML=` \u00A0 ${Math.floor(result)}`;             
};

//6 function

buttsix.onclick = function() {
    let letter = document.getElementById('letter').value;
    let word = document.getElementById('word').value;
    let letterr = letter.charAt(0).toLowerCase();
    let wordd = word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
    let count = [...wordd].filter(l => l === letterr).length;
    document.getElementById('resultsix').innerHTML=` \u00A0 ${count}`;
};

//7 function

buttseven.onclick = function() {
    let sum = document.getElementById('convert').value;
    let convert = (sum) => {

        let result;
        sum = sum.toUpperCase();

        if (sum.indexOf('UAH') != -1) {
            result = (+(sum.slice(0, sum.indexOf('UAH'))) / 25).toString() + '$';
        } else if (sum.indexOf('$') != -1) {
            result = (+(sum.slice(0, sum.indexOf('$'))) * 25).toString() + 'UAH';
        } else {
            return 'Ми конвертуємо тільки UAH <==> $'
        }

        return result
    }
    document.getElementById('resultseven').innerHTML=` \u00A0 ${convert(sum)}`;
};

//9 function

buttnine.onclick = function() {
    let size = document.getElementById('size').value;
    const getRandomPassword = (size) => {
        result = '';
        for (i = 0; i < size; i++) {
            result = result + (Math.floor(Math.random() * 10)).toString();
        }
        return result
    }
    document.getElementById('resultnine').innerHTML=` \u00A0 ${getRandomPassword(size)}`;
};