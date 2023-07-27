console.log("************** DELIVERABLE 05 *********************");
console.log('********** 5. Slot Machine **********');

class SlotMachine {

    coins: number;

    constructor() {
        this.coins = 0;
    }

    spinReel(): boolean {
        return Math.random() < 0.5;
    }

    play(): void {
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