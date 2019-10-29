let MyDate =function (day, month, year) {
    this.day=day;
    this.month =month;
    this.year=year;

};

MyDate.prototype.getDay = function () {
    return this.day
};
MyDate.prototype.getMonth = function () {
    return this.month
};
MyDate.prototype.getYear = function () {
    return this.year
};
MyDate.prototype.setDay = function (day) {
    this.day=day;
};
MyDate.prototype.setMonth = function (month) {
    this.month=month;
};
MyDate.prototype.setYear = function (year) {
    this.year=year;
};
MyDate.prototype.setDate = function (day,month,year) {
    this.day=day;
    this.month=month;
    this.year=year;
};
MyDate.prototype.toString = function () {
    let text='';
    this.day>9? text+=this.day+"/":text+="0"+this.day+"/";
    this.month>9? text+=this.month+"/": text+="0"+this.month+"/";
    this.year<10? text+="000"+this.year:
        this.year<100? text+="00"+this.year:
            this.year<1000? text+="0"+this.year:
                text+=this.year;
    return text;
};


