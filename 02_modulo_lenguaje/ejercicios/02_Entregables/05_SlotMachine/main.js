/********** 5. Slot Machine **********/

console.log('********** 5. Slot Machine **********');

class SlotMachine {
    constructor() {
        this.coins = 0;
    }

    spinReel() {
        return Math.random() < 0.5;
    }

    play() {
        this.coins++;

        if (this.spinReel() && this.spinReel() && this.spinReel()) {

            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);

            this.coins = 0;

            } else {
                console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"