// zad5

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
  res.write(`<p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>`);
  res.write('</body>');
  res.end('</html>');
}

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
