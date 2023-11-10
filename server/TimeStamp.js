class TimeStamp {
    // fields
    date;
    time;
    // constructor
    Constructor(d, t) {
        this.date = d;
        this.time = t;
    }
    // getters
    get date() {
        return this.date;
    }
    get time() {
        return this.time;
    }
    // setters
    set date(d) {
        this.date = d;
    }
    set time(t) {
        this.time = t;
    }
    // methods
}
module:exports = TimeStamp;