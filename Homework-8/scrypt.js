class Student {
    constructor(university, course, fullName, marks) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = marks;
      this.dismissed = false;
    }
    getInfo() {
      return(`Студент ${this.course}го курсу. Університет: ${this.university}, Ім'я: ${this.fullName}`);
    }
  
    get mark() {
      if (this.dismissed === false) {
        return this.marks;
      } else {
        return null;
      }
    }
    set addMark(mark) {
      if (this.dismissed === false) {
        this.marks.push(mark);
      }
    }
    getAverageMark() {
      return this.marks.reduce((acc, e) => acc + e) / this.marks.length;
    }
    getDismiss() {
      this.dismissed = true;
    }
    getRecover() {
      this.dismissed = false;
    }
  }
  
  class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
      super(university, course, fullName, marks);
      
    }
    getScholarship() {
      let averageMark = this.getAverageMark();
      if (averageMark >= 4 && this.dismissed === false) {
        document.getElementById('all7').innerHTML=`Вам видано 1400 грн стипендії<br>`;
        console.log(`Вам видано 1400 грн стипендії`);
      } else {
        document.getElementById('all7').innerHTML=`Цього разу ви не отримали стипендію, вам не хватило ${(4 - averageMark).toFixed(1)} бала.<br>`
        console.log(`Цього разу ви не отримали стипендію, вам не хватило ${(4 - averageMark).toFixed(1)} бала.`);
      }
    }
    getScholarshipHandler(){
      this.timerId = setInterval(() => this.getScholarship(), 30000);
    }
  }
  
  const student = new Student(
    "ЛТЕУ",
    "4",
    "Павло Сохань",
    [4, 4, 4, 3]
  );
  document.getElementById('all1').innerHTML=`Інформація про студента: ${student.getInfo()}`;
  student.addMark = 4;
  student.addMark = 3;
  document.getElementById('all2').innerHTML=`Ваші оцінки: ${student.marks}`;
  document.getElementById('all3').innerHTML=`Ваша середня оцінка: ${student.getAverageMark().toFixed(1)}`;

  
  const budgetStudent = new BudgetStudent(
    "ЛТЕУ",
    "4",
    "Андрій Семак",
    [5, 4, 4, 5]
  );
  document.getElementById('all4').innerHTML=`Інформація про студента: ${budgetStudent.getInfo()}`;
  budgetStudent.addMark = 5;
  budgetStudent.addMark = 4;
  document.getElementById('all5').innerHTML=`Ваші оцінки: ${budgetStudent.marks}`;
  document.getElementById('all6').innerHTML=`Ваша середня оцінка: ${budgetStudent.getAverageMark().toFixed(1)}`;
  budgetStudent.getScholarshipHandler();