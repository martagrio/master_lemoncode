const getDiceNumber = () => Math.floor((Math.random() * 7));

class Game {
    firstDiceValue;
    secondDiceValue;

    rollDices() {
        this.firstDiceValue = getDiceNumber();
        this.secondDiceValue = getDiceNumber();
        console.log(this.firstDiceValue, this.secondDiceValue)
    }

    resetValues() {
        this.firstDiceValue = null;
        this.secondDiceValue = null;
    }

    start() {
        const text = `Let's play a game! If you are in, press "Aceptar" to roll the dices. If you don't feel like it, press "Cancelar"`;
        if (confirm(text)) {
            this.rollDices();
            this.showResults();

        } else console.log('Hope you try later!')
    }

    play() {
        if (this.firstDiceValue && this.secondDiceValue)
            this.resetValues();

        this.rollDices();
        this.showResults();
    }

    retry() {
        if (confirm(`Let's try again, shall we?`)) {
            this.play();
        } else console.log('Ok, no problem, hope to see you soon!')
    }

    showResults() {
        console.log(`Oops, you got ${this.firstDiceValue} - ${this.secondDiceValue}, bad luck, no price yet!`);
        if (this.firstDiceValue === 6 && this.secondDiceValue === 6)
            console.log("Congrats, you got a double six so here's your price! :)");
        else
            this.retry();
    }
}

const game = new Game();
game.start();