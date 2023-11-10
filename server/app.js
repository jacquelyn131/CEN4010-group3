const User = require('./User');
const ContactList = require(`./ContactList`);
const instance = new User("Stephanie", "password", "stephanie@email.com");
console.log(instance.name);
const myContacts = new ContactList();
myContacts.addContact("Jason");
instance.contacts = myContacts;
console.log("Added contacts to user");
console.log(`${instance.contacts.contacts}`); // hello