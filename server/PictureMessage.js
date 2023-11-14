class PictureMessage {
    // fields
    fileSize;
    imageFile;
    timeStamp;
    toAddress;
    fromAddress;
    // constructor
    Constructor(image, to, from) {
        this.imageFile = image;
        this.toAddress = to;
        this.fromAddress = from;
    }
    // getters
    // setters
    // methods
}
module:exports = PictureMessage;