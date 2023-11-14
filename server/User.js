// A user class with getters, setters, and relevant methods.
class User {
    // fields
    name;
    email;
    phone;
    password;
    bio;
    profileImageURL;
    contacts;
    chats;

    constructor(name, pass, email) {
        this.name = name;
        this.password = pass;
        this.email = email;
        console.log(`new user created with name ${name}`);
    }
    // getters
    get name() {
        return this.name;
    }
    get email() {
        return this.email;
    }
    get phone() {
        return this.phone;
    }
    get password() {
        return this.password;
    }
    get bio() {
        return this.bio;
    }
    get profileImageURL() {
        return this.profileImageURL;
    }
    get contacts() {
        return this.contacts;
    } 
    get chats() {
        return this.chats;
    }
    // setters
    set name(n) {
        this.name = n;
    }
    set email(e) {
        this.email = e;
    }
    set phone(p) {
        this.phone = p;
    }
    set password(pass) {
        this.password = pass;
    }
    set bio(b) {
        this.bio = b;
    }
    set profileImageURL(i) {
        this.profileImageURL = i;
    }
    set contacts(c) {
        this.contacts = c;
    }
    set chats(ch) {
        this.chats = ch;
    }
    // methods
    addContact(contact) { // add a new contact to this user's contact list
        this.contacts.add(contact);
    }
    removeContact(contact) { // remove a contact from this user's contact list.
        this.contacts.remove(contact);
    }

    sayHello() {
        return `Hello, ${this.name}`;
    }

}

module.exports = User;