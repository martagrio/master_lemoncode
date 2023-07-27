console.log('************** Console Traces **************');

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"]),
];

const run = async (triggers) => {

    for (const trig of triggers) {
        await trig();
    }

    console.log("first");
};

run(triggers);