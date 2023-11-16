const User = require('./User');
const ContactList = require(`./ContactList`);
const Contact = require('./Contact');
const Message = require('./Message');
const instance = new User("Stephanie", "password", "stephanie@email.com");
const instance2 = new User("Jason", "password", "jason@email.com");
console.log(instance.name);
console.log(instance2.name);
const myContacts = new ContactList();
const contactJ = new Contact("Jason");
myContacts.addContact(contactJ);
instance.contacts = myContacts;
console.log("Added contacts to user");
const temp = instance.contacts.contacts;
console.log(temp.peek()); // hello
// send a message
const msg1 = new Message("hello from stephanie", "stephanie@email.com" ,"jason@email.com");
console.log(msg1);
instance.addChat("jason@email.com");
// add the message to the jason@email.com chat in the Stephanie instance
