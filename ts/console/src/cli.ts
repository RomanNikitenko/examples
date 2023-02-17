console.log('\n===== Platform ===== ', process.platform);
// process title = 'node' when you run the current file using node
console.log('===== Process Title ===== ', process.title);
console.log('===== Process ID ===== ', process.pid);
// node version
console.log('===== Process Version ===== ', process.version);
// node release
console.log('===== Release ===== ', process.release);

console.log('===== Current working directory ===== ', process.cwd());

// you can try to pass some parameters at running
// for example, node ./lib/cli.js -s -rf someParameter
console.log('\n===== Command line parameters: =====\n');
process.argv.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});
console.log('\n==================================== ');

console.log('\n===== Environment variables: =====\n');
for (const name in process.env) {
    const value = process.env[name];
    console.log(`${name}: ${value}`);
}
console.log('\n==================================== ');