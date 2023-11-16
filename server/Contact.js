class Contact {
    // fields
    username;
    nickname;
    notes;
    // constructor
    constructor(username) {
        this.username = username;
        this.nickname = username;
    }
    // getters
    get username() {
        return this.username;
    }
    get nickname() {
        return this.nickname;
    }
    get notes() {
        return this.notes;
    }
    // setters
    set username(u) {
        this.username = u;
    }
    set nickname(n) {
        this.nickname = n;
    }
    set notes(n) {
        this.notes = n;
    }
    // methods
    
}

module.exports = Contact;