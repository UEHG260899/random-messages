const messages = [
    "jodjwoj",
    "ojwojdowjd",
    "dojowow",
    "dmwodwodwq",
    "cmofne",
    "Hello",
    "jiuwpqs"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}


module.exports = { randomMsg };