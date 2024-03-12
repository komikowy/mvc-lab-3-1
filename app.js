// zad6

const http = require('http');
const student = require('./student');

const PORT = 3000;

const server = http.createServer(requestListener);

function requestListener(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head><title>About student</title></head>');
  res.write('<body>');

  // Default id value is 0
  const id = 0;
  const fullName = student.getStudentFullName(id);
  const studentId = student.getStudentId(id);

  res.write(`<p>My name is ${fullName}. My student ID is ${studentId}</p>`);
  res.write('</body>');
  res.end('</html>');
}

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
