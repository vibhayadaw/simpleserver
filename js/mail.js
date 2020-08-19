// Class way 

class Mail {
  constructor(sender='Unknown', subject='Unknown', sentDate=new Date(), receivedDate=new Date(), unread=true) {
    this.sender = sender;
    this.sender = sender;
    this.subject= subject;
    this.sentDate=sentDate;
    this.receivedDate= receivedDate;
    this.unread= unread;
  }
  getSender(){
    return this.sender
  }
  getSubject(){
    return this.subject
  }
  getBody(){
    return this.body
  }
  getSentDate(){
    return this.sentDate
  }
  getReceivedDate(){
    return this.receivedDate
  }
  getUnreadStatus(){
    return this.unread
  }
  setSender(sender){
    this.sender = sender;
  }
  setSubject(subject){
    this.subject=subject
  }
  setBody(body){
    this.body=body
  }
  setSentDate(sentDate){
    this.sentDate=sentDate
  }
  setReceivedDate(receivedDate){
    this.receivedDate=receivedDate
  }
  setUnreadStatus(unread){
    this.unread=unread
  }
}

var unreadCount = 0

function getUnreadCount(){
  return unreadCount
}

function pushMailNotification(newMail) {
  newMail.setUnreadStatus(true);
  unreadCount = unreadCount +1;
  //Get the element from UI and update
  let flexConatiner = document.getElementById('maillist')
  console.log(flexConatiner)

  // Create element.
  let mailElement = document.createElement('div');
  let att = document.createAttribute("class");       // Create a "class" attribute
  att.value = "mail-header";
  mailElement.setAttributeNode(att);
  
  let testElement = document.createTextNode(newMail.getSender())
  mailElement.appendChild(testElement);

  flexConatiner.appendChild(mailElement)
}

const mails = [];
mails.push = function() { 
  Array.prototype.push.apply(this, arguments);
  pushMailNotification(this[0]);
};
// const mails= [];

for (let i=0; i<5; i++){
  mails.push(new Mail())
}

console.log(unreadCount)

updateUnreadCount()