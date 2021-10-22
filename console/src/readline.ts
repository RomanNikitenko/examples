
import readline from 'readline';

const readlineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInstance.question('Enter your name: ', name => {
    console.log(`Hello, ${name}!`);
    readlineInstance.close();
});
