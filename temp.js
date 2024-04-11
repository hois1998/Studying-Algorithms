// // const { exec } = require('child_process');
// //
// // let tablename = 'computer_midterm_20210111_2305_2310', num='1111';
// //
// // exec('node /home/ubuntu/rest_api/Rest_API_Server/restapi/mysql_function/Identification_mysql.js'+' '+num+' '+tablename, (err, stdout, stderr) => {
// //   if (err) console.log(err);
// //   if (stderr) console.log(stderr);
// //   console.log(stdout);
// //
// //   var startd = stdout.indexOf("supervNum: '");
// //   var supervNum = stdout.substring(startd+12, startd+13);
// //   console.log(supervNum);
// // })
//
// let a ='/20210111/computer/2305_2310/1/d7435be6-6ead-4673-b95e-f120e7c61d68';
// a = a.split('/');
// console.log(a);
//
// console.log(a[2],a[3],a[4]);


let temp = 'rtmp://3.35.240.138/channel2/988fc458-7af0-4ac3-b82d-24d545780f90_0';
console.log(temp.slice(0, -2));

console.log("', '0')");
