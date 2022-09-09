const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1 function

function getMyTaxes(salary) {
    const salaryAfterTax = salary - this.tax * salary;
    return salaryAfterTax;
  }

  document.getElementById('all1').innerHTML=`1 функція:<br>В Україні при зарплаті 1000 після сплати податку ви отримаєте: ${getMyTaxes.call(ukraine, 1000)}.<br>`;

//2 function

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
  }
  
  document.getElementById('all2').innerHTML=`2 функція:<br>В Україні IТ спеціалісти всередньому платять податків: ${getMiddleTaxes.call(ukraine)}.<br>
                                                           В Латвії IТ спеціалісти всередньому платять податків: ${getMiddleTaxes.call(latvia)}.<br>
                                                           В Литві IТ спеціалісти всередньому платять податків: ${getMiddleTaxes.call(litva)}.<br>`;

//3 function

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
  }
  document.getElementById('all3').innerHTML=`3 функція:<br>В Україні IТ спеціалісти платять податків: ${getTotalTaxes.call(ukraine)}.<br>
                                                           В Латвії IТ спеціалісти платять податків: ${getTotalTaxes.call(latvia)}.<br>
                                                           В Литві IТ спеціалісти платять податків: ${getTotalTaxes.call(litva)}.<br>`;

//4 function

function getMySalary() {
    const salary = Math.floor(Math.random() * (2000 - 1500) + 1500).toFixed();
    const taxes = Math.round(salary * this.tax);
    const profit = salary - taxes;
    let obj = {
      salary,
      taxes,
      profit,
    };
    console.log(obj);
  }
  let salaryEvery10Sec = setInterval(() => getMySalary.call(ukraine), 10000);
                                                           