const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// Довго не міг зрозуміти що хочется в завданні, потім зрозумів але не хочу видаляти цю функцію, вона круто працює.
// const doPairs = (arr) => {
//     [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]] = [arr[0], arr[2], arr[1], arr[3], arr[4], arr[5]]
//     let newArr = [];
//     for ( i = 0; i < arr.length; i = i + 2) {
//         newArr.push(arr[i] + " і " + arr[i + 1]);
//       }
//     return newArr
// }

// 1 функція

function getPairs(students) {
  const inpairs = [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]]
  return inpairs;
}

const inpairs = getPairs(students);
console.log(inpairs);
document.getElementById('all1').innerHTML=`Створені пари: ${inpairs.join(' /// ')} .`;

// 2 функція

function getPairsAndThemes(students) {
  const pairsplusthemes = [[students[0] + ' і ' + students[2], themes[0]], [students[1] + ' і ' + students[3],themes[1]], [students[4] + ' і ' + students[5], themes[2]]]
  return pairsplusthemes;
}

const pairsplusthemes = getPairsAndThemes(students);
console.log(pairsplusthemes);
document.getElementById('all2').innerHTML=`Парам додано предмет: ${pairsplusthemes.join(' /// ')} .`;

// 3 функція

function getMarksForStudents(students) {
  const studentmark = [[students[0] ,marks[0]], [students[1], marks[1]], [students[2], marks[2]], [students[3], marks[3]], [students[4], marks[4]], [students[5], marks[5]]]
  return studentmark;
}

const studentmark = getMarksForStudents(students);
console.log(studentmark);
document.getElementById('all3').innerHTML=`Студент отримав оцінку: ${studentmark.join(' /// ')} .`;

// 4 функція

function getMarksForPairs(students) {
  let min = 1;
  let max = 6;
  const pairsmark = [
      [students[0] + ' і ' + students[2], themes[0], Math.floor(Math.random() * (max - min) + min)],
      [students[1] + ' і ' + students[3], themes[1], Math.floor(Math.random() * (max - min) + min)],
      [students[4] + ' і ' + students[5], themes[2], Math.floor(Math.random() * (max - min) + min)]]
  return pairsmark;
}

const pairsmarks = getMarksForPairs(students);
console.log(pairsmarks);
document.getElementById('all4').innerHTML=`Пара отримала оцінку: ${pairsmarks.join(' /// ')} .`;
    
