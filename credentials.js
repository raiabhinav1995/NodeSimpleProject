const nodemailer=require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raiabhinav1995@gmail.com',
      pass: 'Lenovo@a6000'
    }
  });

const mailOptions = {
    from: 'raiabhinav1995@gmail.com',
    to: 'raiabhinav1995@gmail.com',
    subject: 'whatever heck the subject is ',
    text: 'whatever you wanna send'
  };


  exports.transporter=transporter;
  exports.mailOptions=mailOptions;
