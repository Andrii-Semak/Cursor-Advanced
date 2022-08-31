const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1 функція

const girls = [];
const boys = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].lastIndexOf("а") === students[i].length-1) {
        girls.push(students[i]);
    } else {
        boys.push(students[i]);
    }
}

const inpairs = [];
for (let i = 0; i < girls.length; i++) {
  inpairs.push([boys[i], girls[i]]);
}
console.log(inpairs);
document.getElementById('all1').innerHTML=`Створені пари: ${inpairs.join(' /// ')} .`;

// 2 функція

const pairsplusthemes = [];
for (let i = 0; i < themes.length; i++) {
  pairsplusthemes.push([boys[i] + ' і ' + girls[i], themes[i]]);
}

console.log(pairsplusthemes);
document.getElementById('all2').innerHTML=`Парам додано предмет: ${pairsplusthemes.join(' /// ')} .`;

// 3 функція

const studentmark = [];
for (let i = 0; i< marks.length; i++) {
  studentmark.push([students[i], marks[i]]);
}
console.log(studentmark);
document.getElementById('all3').innerHTML=`Студент отримав оцінку: ${studentmark.join(' /// ')} .`;

// 4 функція

let min = 1;
let max = 6;
const pairsmark = [];
for (let i = 0; i < themes.length; i++) {
  pairsmark.push([boys[i] + ' і ' + girls[i], themes[i], Math.floor(Math.random() * (max - min) + min)]);
}
console.log(pairsmark);
document.getElementById('all4').innerHTML=`Пара отримала оцінку: ${pairsmark.join(' /// ')} .`;
