angular.module('clickGameApp').service('gameService', ['$interval', function($interval) {

    this.theTotal = 0
    this.autoButtons = 0
    this.addButton = 1
    let autoArray = [];

    let addForAutoClickers = () => {
        this.theTotal = this.theTotal + this.addButton;
    }
    this.addButt = () => {
        this.theTotal = this.theTotal + this.addButton;
    }
    this.multButt = () => {
        if (this.theTotal >= 10) {
            this.theTotal = this.theTotal - 10;
            this.addButton = this.addButton * 1.2;
            return this.theTotal;
        }
    }
    this.autoButt = () => {
        // if (this.theTotal >= 100) {
            this.theTotal = this.theTotal - 100;
            autoArray.push($interval(addForAutoClickers, 1000));
            this.autoButtons++;
        // }
    }
}])