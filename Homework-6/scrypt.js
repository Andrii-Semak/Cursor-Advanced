const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  const student1 ='Tanya';
  const student2 ='Victor';
  const student3 ='Anton';

  //1 function

  function getSubjects(name) {
    let arrOfSubjects = [];
    students.map((std) => {std.name === name ? (arrOfSubjects = Object.keys(std.subjects)) : arrOfSubjects;});
    if(arrOfSubjects){
      const studentSubjects = [];
      arrOfSubjects.map((subjects) => {
        subjects = subjects.charAt(0).toUpperCase() + subjects.slice(1).toLowerCase();
        subjects = subjects.replace('_', ' ');
        studentSubjects.push(subjects);
      });
      return studentSubjects;
    }
    else return document.getElementById('all1').innerHTML=`1 функція:<br>В журналі немає студента ${student2}<br>`; 
  }

  document.getElementById('all1').innerHTML=`1 функція:<br>${student2} вивчає такі предмети: ${getSubjects(student2).join(', ')}.<br>`;

  //2 function

  function getAverageMark(name) {
    let arrOfMarks = [];
    students.map((std) => {std.name === name ? (arrOfMarks = Object.values(std.subjects)) : arrOfMarks;});
    if(arrOfMarks){
      let countOfMarks = 0;
      let averageMark = 0;
      arrOfMarks.map((marks) => {
        marks.map((mark) => {
          countOfMarks++;
          averageMark = averageMark + mark;
        });
      });
      return (averageMark / countOfMarks);
    } 
    else return document.getElementById('all2').innerHTML=`2 функція:<br>В журналі немає студента ${student1}<br>`;
  }
  
  document.getElementById('all2').innerHTML=`2 функція:<br>${student1} отримала середню оцінку по предметах: ${getAverageMark(student1).toFixed(2)}.<br>`;

  //3 function

  function getStudentInfo(name) {
    let course = [];
    students.map((std) => {std.name === name ? (course = std.course) : course;});
    if(course){
      const StudentInfo = {
        name,
        course,
        averageMark: getAverageMark(name),
      };
      return StudentInfo;
    }
    else return document.getElementById('all3').innerHTML=`3 функція:<br>В журналі немає студента ${student3}<br>`;
    
  }

  const StudentInfo = JSON.stringify(getStudentInfo(student3));
  document.getElementById('all3').innerHTML=`3 функція:<br>Вся інформація про: ${student3} - ${StudentInfo}<br>`;

  //4 function

  function getStudentsNames(students) {
    let arrOfNames = [];
    students.map((student) => {arrOfNames.push(student.name);});
    return arrOfNames;
  }

  document.getElementById('all4').innerHTML=`4 функція:<br>Студенти в алфавітному порядку: ${getStudentsNames(students).sort()}<br>`;

  //5 function

  function getBestStudent(students) {
    let arrOfMarks = [];
    students.map((std) => {arrOfMarks.push([std.name, getAverageMark(std.name)]);});
    let count = 0;
    let stdTop;
    arrOfMarks.map((mark) => {
      if (count < mark[1]) {
        count = mark[1];
        stdTop = mark[0];
      }
    });
    return stdTop;
  }

  document.getElementById('all5').innerHTML=`5 функція:<br>Найкращий студент - ${getBestStudent(students)}<br>`;

  //6 function

  function calculateWordLetters(word) {
    let object = {};
    let key;
    let wordArr = word.split('');
    wordArr.map((letter) => {
      key = letter;
      object[key] = wordArr.filter((item) => item === letter).length;
    });
    return object;
  }

  const word = 'hello';
  const wordToLetters = JSON.stringify(calculateWordLetters(word));
  document.getElementById('all6').innerHTML=`6 функція:<br>Слово: "${word}" по буквах: ${wordToLetters}`;
  
  
  
