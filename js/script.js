'use strit';

var output = document.querySelector('.output');

function Phone(brand, model, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.model = model;
}

Phone.prototype.printInfo = function () {
    console.log('Phone: ' + this.model + ' ' + this.brand + ', color: ' + this.color + ', and the price is: ' + this.price + ".");
    output.innerHTML += 'Phone: ' + this.model + ' ' + this.brand + ', color: ' + this.color + ', and the price   is: ' + this.price + "." + '</br>';
}

Phone.prototype.call = function () {
    console.log(this.model + ' call to ...');
    output.innerHTML += this.model + ' call to ...' + '</br>';
}

var samsungGalaxyS6 = new Phone('Samsung', 'Galaxy S6', 2670, 'silver');
var iPhone6s = new Phone('Apple', 'iPhone 6s', 3450, 'gray');
var onePlusOne = new Phone('OnePlus', 'One 3Z', 1760, 'white');

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.call();
iPhone6s.call();
onePlusOne.call();
