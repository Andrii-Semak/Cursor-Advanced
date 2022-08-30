//First function

buttone.onclick = function() {
let maxdigit = document.getElementById('firstinput').value;
document.getElementById('resultone').innerHTML=` \u00A0 ${getMaxDigit(Number(maxdigit))}`;
 
        function getMaxDigit(number) {
            let result = 0;
            for (let i = number; i > 0; i = Math.floor(i / 10)) {
                let digit = i % 10;
                if (result < digit)
                    result = digit;
            }
            return result;
        }
};

//2 function

butttwo.onclick = function() {
    let number = document.getElementById('number').value;
    let degree = document.getElementById('degree').value;
    let answer = number;
        if (degree == 0) {
            document.getElementById('resulttwo').innerHTML=` \u00A0 1`;
        } else if (degree == 1) {
            document.getElementById('resulttwo').innerHTML=` \u00A0 ${number}`;
        }
        while (degree > 1) {
            answer = answer * number;
            degree = degree - 1;
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
    let salarywithouttax = document.getElementById('salary').value;
    let salary = salarywithouttax - salarywithouttax * 0.195;
    document.getElementById('resultfour').innerHTML=` \u00A0 ${salary}`;
};

//5 function

buttfive.onclick = function() {
    let numberone = document.getElementById('numberone').value;
    let numbertwo = document.getElementById('numbertwo').value;
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
    let result = getRandom(Number(numberone), Number(numbertwo));
    document.getElementById('resultfive').innerHTML=` \u00A0 ${Math.floor(result)}`;             
};

//6 function

buttsix.onclick = function() {
    let letter = document.getElementById('letter').value;
    let word = document.getElementById('word').value;
    let letterfixed = letter.charAt(0).toLowerCase();
    let wordfixed = word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
    let count = [...wordfixed].filter(l => l === letterfixed).length;
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
    const getRandomPassword = (size = 8) => {
        
        result = '';
        for (i = 0; i < size; i++) {
            result = result + (Math.floor(Math.random() * 10)).toString();
        }
        return result
    }
    document.getElementById('resultnine').innerHTML=` \u00A0 ${getRandomPassword(size)}`;
};
