let streamkey = '9f4a6ae0-11f4-418b-89e2-fbb9badab111';
let lec = 'undefined';
let examTime = '0058_0130';
let supervNum = 'noNum';

exec("sh /var/hls/on_upload.sh" + ' ' + streamkey + ' ' + lec + ' ' + examTime + ' ' + supervNum, (err, stdout, stderr) => {

if (err) throw err;
if (stderr) throw stderr;
});
