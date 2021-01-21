let express = require('express');
const { exec, execSync } = require("child_process");
let bodyParser = require('body-parser');

let fileread = require("/home/ubuntu/rest_api/Rest_API_Server/restapi/fileread_test.js");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let loc = ''; //youngho

app.post('/', function(req, res, next) {

    //let name = req.body.name;
    //let number = req.body.number;

    let num = req.body.num;	//2020-12345
    let lec_id = req.body.lec_id;	//logicdesign.midterm_20210108
    let tablename = req.body.tablename;	//logicdesign_midterm_20210108_1400_1530
    let mac = req.body.mac; //1.1.1.1
    //let loc = req.body.loc;

    let date_ob = new Date();

    // adjust 0 before single digit date
    let day = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // prints date in YYYY-MM-DD format
    let time = year + month + day;

    let endlec = lec_id.indexOf("."); //10
    let lec = lec_id.substring(0, endlec);	//logicdesign

    let endtest = lec_id.indexOf("_");	//20
    let test = lec_id.substring(endlec+1, endtest);	//midterm_20210108

    let testdate = lec_id.substring(endtest+1);	//20210108

    let lec_real = lec + "_" + testdate;	//logicdesign_20210108

    let examTime = tablename.substring(tablename.length-9, tablename.length);	//1400_1530



    exec("node ./mysql_function/Identification_mysql.js " + num + " " + tablename, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        else {
            console.log(`stdout: ${stdout}`);
            if (stdout.length < 5){
                res.send('error');
            }
            else {

                let startd = stdout.indexOf("supervNum: '");
                let supervNum = stdout.substring(startd+12, startd+13);

                let endpoint = fileread.file_read(num, lec_id, supervNum);
                //let startstreamkey = lec_id.indexOf("channel1/");
                let streamkey = endpoint.substring(29);

                loc = "/" + testdate + "/" + lec + "/" + examTime + "/" + supervNum + "/" + streamkey;

                exec("node ../../DynamoDB_Functions/node_modules/aws-sdk/post_video_data.js " + num + " " + lec_real + " " + test + " " + time + " " + mac + " " + loc, (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    else if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    else {
                        //check whether exam end or not
                        //시험 종료 시간보다 먼저 종료가 인식되면 s3로 업로드 하지 않고 있다가 종료시간 지나면 업로드 하기
                        let endHour = parseInt(examTime.substring(5,7));
                        let endMin = parseInt(examTime.substring(7,9));
                        let end = endHour*60+endMin;
                        let input = loc.split('/');
                        let upload = setInterval(() => {
                          let now = (new Date().getHours())*60 + new Date().getMinutes();
                          let one = 1;
                          if (loc.length == 0) { //youngho
                            res.send('error loc length is 0');
                            clearInterval(upload);
                          } else {
                            if (now >= end) {  //now >= end
                              let temp = streamkey.substring(0, streamkey.length-1);
                              console.log(temp+input[2]+input[3]+input[4]);
                              execSync('sh /var/hls/on_upload.sh' + ' ' + temp + ' ' + input[2] + ' ' + input[3] + ' ' + input[4]);

                              res.send('POST SUCCESS');
                              clearInterval(upload);
                            } else {
                              if (one == 1) {
                                res.send('POST SUCCESS but you ended test before endtime!');
                                one = 0;
                              }
                            }
                          }
                        }, 2000);
                        return;
                    }
                });

            }
            return;
        }
    });
});

module.exports = app;
