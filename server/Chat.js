// Chat class with a list of messages, and a username
const List = require("collections/_list");
var list = require("collections/list");
class Chat {
    // fields
    username;
    messages;
    // constructor
    constructor(user) {
        this.username = user;
        this.messages = new List();
    }
    // getters
    get username() {
        return this.username;
    }
    get messages() {
        return this.messages;
    }
    // setters
    set username(user) {
        this.username = user;
    }
    set messages(m) {
        this.messages = m;
    }
    // methods
    // add
    addmessage(m) {
        this.messages.push(m);
    }
    // remove 
    removeMessage(m) {
        let found = 0;
        let removeMsg;
        this.messages.forEach((item, index) => {
            if (item.messageBody === m && found == 0) {
                removeMsg = item;
                found = 1;
            }
        });
        this.messages.delete(removeMsg);
        return (found == 1);
    }
    // clear
    clearMessages() {
        this.messages = new List();
    }
}

module.exports = Chat