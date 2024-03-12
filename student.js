// zad6

function getStudentFullName(id) {
  switch (id) {
    case 0:
      return "Jakub Dyba 45244";
    case 1:
      return "Kacper Nowak 111222";
    case 2:
      return "Maja Kowalska 222333";
    default:
      return "Michał Wiśniewski 333444";
  }
}

function getStudentId(id) {
  switch (id) {
    case 0:
      return "45244";
    case 1:
      return "111222";
    case 2:
      return "222333";
    default:
      return "333444";
  }
}

module.exports = {
  getStudentFullName,
  getStudentId,
};
