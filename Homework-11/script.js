async function getRandomChinese(length) {
    let symbols = []
    for(let i=0;i<length;i++){
        let sign = new Promise((resolve, reject) => {
            setTimeout(() => resolve(String.fromCharCode(Date.now().toString().split('').slice(-5).join(''))), 50)
          });   
          let symbol = await sign;
          symbols.push(symbol)
    }
    console.log(symbols.join(' '));
}
  
getRandomChinese(5);