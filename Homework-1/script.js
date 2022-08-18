//Товари
let apple = 15.678;
let banana = 123.965;
let carrot = 90.2345;

//Розрахунки
//Сума всіх товарів
let total = apple + banana + carrot;

//Середнє значення цін
let averageprice = total / 3;

//Парне чи непарне
let oddornot
if (Math.floor(total & 1) == 0){
    oddornot = 'Парне число';
} 
else {
    oddornot = 'Непарне число';
}

//Випадкова знижка
let discount = Math.random();

//Cума після використання знижки
let sumdiscount = (total - total * discount);


//Відповідь
let result = `
Найдорожчий товар: ${Math.max(apple, banana, carrot)}
Найдешевший товар: ${Math.min(apple, banana, carrot)}
Сума всіх товарів: ${total}
Сума всіх товарів без копійок: ${Math.floor(apple) + Math.floor(banana) + Math.floor(carrot)}
Сума товарів округлена до сотень: ${Math.round(total / 100) * 100}
Сума всіх товарів парне/непарне: ${oddornot}
Сума решти з 500 грн: ${500 - total}
Середнє значення цін: ${averageprice.toFixed(2)}
Сума товарів після використання знижки: ${sumdiscount.toFixed(2)};
Чистий прибуток: ${Math.round(total/2 - sumdiscount)};
`

console.log(result);