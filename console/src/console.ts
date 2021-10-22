const testObj = {
    name: 'Tom',
    age: 33,
    city: 'Roma',
    children: [
        {
            name: 'Kate',
            age: 12,
            city: 'Roma'
        },
        {
            name: 'Marc',
            age: 5,
            city: 'Roma'
        }
    ]
}
const testArray = [
    { name: 'Tom', age: 33, city: 'Roma' },
    { name: 'Robert', age: 15, city: 'London' },
    { name: 'Thomas', age: 12, city: 'Paris' },
    { name: 'David', age: 23, city: 'Mexico' },
    { name: 'Kate', age: 18, city: 'Toronto' },
];

// **************************************************
console.log('\n===== log(testObj) =====');
console.log(testObj);

// **************************************************
// add nesting
console.log('\n===== log( { testObj } ) =====');
console.log({ testObj });

// **************************************************
// use 'depth' parameter 
console.log('\n===== dir with parameters =====');
console.dir({ testObj }, { depth: 10, showHidden: true, colors: true });

// **************************************************
console.trace('\nSome trace');

// **************************************************
console.log('\n===== console.table() =====');
console.table(testArray);

// **************************************************
console.log('\n===== Print \'keys\' of an object =====');
console.log(Object.keys(console));

// **************************************************
console.log('\n===== test assert() =====');
const expected = 200;
const actual = 404;
// do nothing - everything is OK
console.assert(expected * 1 === expected, `Unexpected response: ${actual}`);
// print error message, but without interrupting execution
console.assert(actual * 1 === expected, `Unexpected response: ${actual}`);

// **************************************************
console.log('\n===== test console.time() =====');
testConsoleTime();

function testConsoleTime() {
    console.time('Time of some execution');
    setTimeout(() => {
        console.timeEnd('Time of some execution');
        console.log();
    }, 130);
}
// **************************************************

