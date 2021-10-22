
import readline from 'readline';

type Command = 'help' | 'clear' | 'hello' | 'exit';

const commands = {
    help() {
        console.log('Supported commands:', Object.keys(commands).join(', '));
    },
    clear() {
        console.clear();
    },
    hello() {
        console.log('Hello!');
    },
    exit() {
        readlineInstance.close();
    }
};

const supportedCommands: string[] = Object.keys(commands);

const readlineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

readlineInstance.on('line', handleLine)
    .on('close', () => {
        console.log('Have a nice day!');
        process.exit(0);
    });

function handleLine(line: string): void {
    line = line.trim();
    if (supportedCommands.indexOf(line) != -1) {
        const commandLine = line as Command;
        const command = commands[commandLine];
        command();
    } else {
        console.log(`The command ${line} is not supported`);
        handleLine('help');
    }
    readlineInstance.prompt();
}

console.clear();
readlineInstance.prompt();
