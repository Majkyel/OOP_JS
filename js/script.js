'use strit';

var output = document.querySelector('.output');

function Phone(brand, model, price, color, turn) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.model = model;
    this.turn = turn;
}

Phone.prototype.printInfo = function () {
    console.log('Phone: ' + this.model + ' ' + this.brand + ', color: ' + this.color + ', and the price is: ' + this.price + ".");
    output.innerHTML += 'Phone: ' + this.model + ' ' + this.brand + ', color: ' + this.color + ', and the price   is: ' + this.price + "." + '</br>';
}

Phone.prototype.call = function () {
    console.log(this.model + ' call to ...');
    output.innerHTML += this.model + ' call to ...' + '</br>';
}

Phone.prototype.turnOnOff = function () {
    if (this.turn === 'On') {
        output.innerHTML += 'Turn off ' + this.model + '...' + '</br>';
        console.log('Turn off ' + this.model + '...');
    } else if (this.turn === 'Off') {
        output.innerHTML += 'Turn on ' + this.model + '...' + '</br>';
        console.log('Turn on ' + this.model + '...');
    }
}

var samsungGalaxyS6 = new Phone('Samsung', 'Galaxy S6', 2670, 'silver', 'On');
var iPhone6s = new Phone('Apple', 'iPhone 6s', 3450, 'gray', 'On');
var onePlusOne = new Phone('OnePlus', 'One 3Z', 1760, 'white', 'Off');

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();

samsungGalaxyS6.call();
iPhone6s.call();
onePlusOne.call();

samsungGalaxyS6.turnOnOff();
iPhone6s.turnOnOff();
onePlusOne.turnOnOff();
