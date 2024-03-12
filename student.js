//Zad2

const student = {
  fullName: "Jakub Dyba",
  studentID: 45244,
  getStudentFullName: function() {
    return this.fullName;
  },
  getStudentId: function() {
    return this.studentID;
  }
};

console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
