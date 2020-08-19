// Class way 

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// mycar = new Car("Ford");
// console.log(mycar.present());

//one way is 
function mailClass (sender='Unknown', subject='Unknown', sentDate=new Date(), receivedDate=new Date(), unread=true){
  this.sender = sender;
  this.subject= subject;
  this.sentDate=sentDate;
  this.receivedDate= receivedDate;
  this.unread= unread;
  return this;
}

mailClass.prototype.getSender = function(){
  return this.sender;
}

const mails1= [];

for (let i=0; i<5; i++){
  mails1.push(mailClass())
}

console.log(mails1[3]);

//This approach is not suited as this will populate extra info which is not needed.


// option 2
let mail = {
  sender: 'Unknown',
  subject: 'Unknown',
  body: 'Unknown',
  sentDate: new Date(),
  receivedDate: new Date(),
  unread: true,

  createMail: function (sender = 'Unknown', subject = 'Unknown', 
                        body='Unknown', sentDate = new Date(), 
                        receivedDate = new Date(), unread = true) {
    this.sender = sender;
    this.subject = subject;
    this.sentDate = sentDate;
    this.body= body;
    this.receivedDate = receivedDate;
    this.unread = unread;
    return this;
  },
    
  getSender: function(){
    return this.sender
  },
  getSubject: function(){
    return this.subject
  },
  getBody: function(){
    return this.body
  },
  getSentDate: function(){
    return this.sentDate
  },
  getReceivedDate: function(){
    return this.receivedDate
  },
  getUnreadStatus: function(){
    return this.unread
  },
  setSender: function(sender){
    this.sender = sender;
  },
  setSubject: function(subject){
    this.subject=subject
  },
  setBody: function(body){
    this.body=body
  },
  setSentDate: function(sentDate){
    this.sentDate=sentDate
  },
  setReceivedDate: function(receivedDate){
    this.receivedDate=receivedDate
  },
  setUnreadStatus: function(unread){
    this.unread=unread
  }
  
}
let unread = 0
setUnreadStatus = function (mail, status) {
  console.log(mail)
  // mail.setUnreadStatus(status);
  unread += status ? 1 : -1
};

function pushMailNotification(arguments) {
  console.log('New Item Received');
  setUnreadStatus(arguments,true);
}

const mails = [];
mails.push = function() { Array.prototype.push.apply(this, arguments);  pushMailNotification(arguments);};

// const mails= [];

for (let i=0; i<1; i++){
  setTimeout(()=>mails.push(mail.createMail()), i*1000);
}

// const getTotalUnread()
// console.log(mails[3].getSender());
