class Message {
    // fields
    messageBody;
    timeStamp;
    toAddress;
    fromAddress;
    // constructor
    Constructor(body, to, from) {
        this.messageBody = body;
        this.toAddress = to;
        this.fromAddress = from;
    }
    // getters
    get messageBody() {
        return this.messageBody;
    }
    get timeStamp() {
        return this.timeStamp;
    }
    get toAddress() {
        return this.toAddress;
    }
    get fromAddress() {
        return this.fromAddress;
    }
    // setters
    set messageBody(body) {
        this.messageBody = body;
    }
    set timeStamp(t) {
        this.timeStamp = t;
    }
    set toAddress(to) {
        this.toAddress = to;
    }
    set fromAddress(from) {
        this.this.fromAddress = from;
    }
    // methods
    send() {
        // TODO: create a new POST request and send the message to the recipient
    }
    cancel() {
        // TODO: destroy the message
    }
}
module.exports = Message;