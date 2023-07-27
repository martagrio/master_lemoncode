class Reminder {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        setTimeout(function () {
            console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);
    }
}

const reminder = new Reminder("comprar cebolla");

reminder.remindMe(3);

/* Devuelve para esta instanción "Your reminder after 3 seconds is: undefined" porque el this dentro del setTimeout no hace referencia al del constructor, si no al objeto window, por lo que hay que capturar el valor de this.text al principio del método remindMe y pasárselo al timeout*/

class Reminder2 {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        const text = this.text;
        setTimeout(function () {
            console.log(`Your reminder after ${delay} seconds is: ${text}`);
        }, delay * 1000);
    }
}

const reminder2 = new Reminder2("comprar cereales y fruta");
reminder2.remindMe(4);