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
console.log();
console.log('===== log(testObj) =====');
console.log(testObj);

// **************************************************
// add nesting
console.log();
console.log('===== log( { testObj } ) =====');
console.log({ testObj });

// **************************************************
// use 'depth' parameter 
console.log();
console.log('===== dir with parameters =====');
console.dir({ testObj }, { depth: 10, showHidden: true, colors: true });

// **************************************************
console.log();
console.trace('Some trace');

// **************************************************
console.log();
console.log('===== console.table() =====');
console.table(testArray);

// **************************************************
console.log();
console.log('===== Print \'keys\' of an object =====');
console.log(Object.keys(console));

// **************************************************
console.log();
console.log('===== test console.time() =====');
testConsoleTime();

function testConsoleTime() {
    console.time('Time of some execution');
    setTimeout(() => {
        console.timeEnd('Time of some execution');
        console.log();
    }, 130);
}
// **************************************************

