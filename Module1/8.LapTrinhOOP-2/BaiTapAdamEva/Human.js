let Human= function (name,gender,weight) {
    this.name=name;
    this.gender=gender;
    this.weight=weight;
    
    this.isMale=function () {
        return this.gender;
    };
    this.setGender= function (gender) {
        this.gender=gender;
    };
    this.checkApple= function (Apple) {
        return Apple.isEmpty();
    };
    this.eat=function (Apple) {
        if(!this.checkApple(Apple)){
            Apple.decrease();
            this.weight++;
        }
    };
    this.say=function (str) {
        console.log(str);
    };
    this.getName= function () {
        return this.name
    };
    this.setName=function (str) {
        this.name=str;
    };
    this.getWeight= function () {
        return this.weight;
    };
    this.setWeight= function (weight) {
        this.weight=weight;
    };
};
