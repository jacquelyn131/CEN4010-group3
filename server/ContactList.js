var List = require("collections/list");
class ContactLIst {
    // fields
    contacts;
    // constructor
    constructor() {
        this.contacts = new List();
    }
    // getters
    get contacts() {
        return this.contacts;
    }
    // setters
    set contacts(c) {
        this.contacts = c;
    }
    // methods 
    addContact(contact) {
        this.contacts.push(contact);
    }
    removeContact(contact) {
        let removeItem;
        let found = 0; // flag to track if the contact has been found.
        this.contacts.forEach((item, index) => {
            if (item.username === contact && found == 0) {
                removeItem = item;
                found = 1;
            }
        });
        this.contacts.delete(removeItem);
        return (found == 1);
    }
}

module.exports = ContactLIst;