const btnInfo = document.querySelector('#btnInfo');
const btnPlanets = document.querySelector('#btnPlanets');
let planetsLink = 'https://swapi.dev/api/planets/';
let getFilm = document.querySelector('.input');
async function getСharacters(){
    try{
        document.querySelector('#text').innerHTML = '<p id="loading">Wait please</p>';
        let filmsPromise = await fetch(`https://swapi.dev/api/films/${getFilm.value}`, {
            method: 'GET',
        });
        let filmsJSON = await filmsPromise.json();
        let charactersPromise = [];
        let charactersJSON = [];
        for(let i = 0; i < filmsJSON.characters.length; i++){
            charactersPromise[i] = await fetch(filmsJSON.characters[i]);
            charactersJSON[i] = await charactersPromise[i].json();
        }
        showInfo(charactersJSON);       
    } catch (err) {
        alert(err);
    };   
};
async function getPlanets(){
    try{
        let planetsPromise = await fetch(planetsLink, {
            method: 'GET',
        });
        let planetsJSON = await planetsPromise.json();
        showPlanets(planetsJSON.results);

        let btnPrev = createButton('btnForPlanets', 'prev');
        let btnNext = createButton('btnForPlanets', 'next');
        if(!planetsJSON.prev == 0){
            btnPrev.addEventListener('click', function(){
                planetsLink = planetsJSON.prev;                
                getPlanets();
            });
        };
        if(!planetsJSON.next == 0){
            btnNext.addEventListener('click', function(){
                planetsLink = planetsJSON.next;
                getPlanets();
            });
        };       
    } catch(err) {
        alert(err);
    };
};
function showInfo (arr){
    document.querySelector('#text').innerHTML = '';
    arr.forEach(element => {
        if (element.gender.toLowerCase() == 'male'){
            element.gender = 'male';
        } else if (element.gender.toLowerCase() == 'female') {
            element.gender = 'female';
        } else {
            element.gender = 'robot';
        };        
        createDiv('infoCharacter').innerHTML = 'Name: ' + element.name + ', Birth year: ' + element.birth_year + ', Gender: ' + element.gender;
    });
};
function showPlanets(arr){
    document.querySelector('#text').innerHTML = '';
    arr.forEach(element => {
        createDiv('planet').innerHTML = 'Planet name: ' + element.name;
    });
};
function createDiv(className){
    let div = document.createElement('div');
    document.querySelector('#text').append(div);
    div.classList.add(className);
    return div;
};
function createButton(className, html){
    let button = document.createElement('button');
    document.querySelector('#text').append(button);
    button.classList.add(className);
    button.innerHTML = html;
    return button;
};
btnInfo.onclick = getСharacters;
btnPlanets.onclick = getPlanets;