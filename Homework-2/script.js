butt.onclick = function() {
    let result = 0;
    let n = document.getElementById('inputN').value;
    let m = document.getElementById('inputM').value;

    while (!Number(n) || n == '') {
        n = alert(`N не є числом або не є цілим числом.`);
        return false;
    }
    while (!Number(m) || m == '') {
        m = alert(`M не є числом або не є цілим числом.`);
        return false;
    }

    if(Number(n) >= Number(m)){
        alert('N не може бути >= M')
        return false
    }
    const pairornot = confirm("Пропускати парні числа?")
    for(let i = Number(n); i <= Number(m); i++){
        if(pairornot){
            !(i % 2) ? result:result = result + i;   
        }
        else result = result + i;
    }
    document.getElementById('result').innerHTML=` \u00A0 ${result}`;
};
