var express = require('express');
var CronJob = require('cron').CronJob;
var app = express();
var job = new CronJob('00 30 00 * * 1-7', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  SendEmail();
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  "Asia/Kolkata" /* Time zone of this job. */
);



function SendEmail(){
var datetime = new Date();
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pream.06@gmail.com',
    pass: 'prem0690'
  }
});

var mailOptions = {
  from: 'pream.06@gmail.com',
  to: 'pream.06@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'I am worked @ 12 Am'+datetime
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

var portNum = 4000;
app.listen(4000, function () {
    console.log('Making some pancakes on port:', portNum);
});