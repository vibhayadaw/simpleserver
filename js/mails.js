// const mail = require('./mail')
import mail from './mail';

const mails= [];

for (let i=0; i<5; i++){
  mails.push(mail.createMail())
}

console.log(mails[3]);