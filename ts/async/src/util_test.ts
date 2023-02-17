import { executeOrTimeout, promiseWithTimeout } from "./util";

const longTimeout = 5000;
const shortTimeout = 50;
const getUserFuncDelay = 100;

const firstUserID = 'firstUser';
const secondUserID = 'secondUser';

async function getUser(userID: string): Promise<{ userID: string }> {
    return new Promise<{ userID: string }>((resolve) => {
        setTimeout(() => {
            resolve({ userID });
        }, getUserFuncDelay);
    });
}

async function testExecuteOrTimeout() {
    console.log('============== TEST executeOrTimeout Fn ===');
    try {
        const fnGetFirstUserWithTimeout = executeOrTimeout(getUser, longTimeout, `Request "Get User" with ID ${firstUserID} was canceled by timeout ${longTimeout}`);
        const firstUser = await fnGetFirstUserWithTimeout(firstUserID);
        console.log('The First User is: ', firstUser);

        const fnGetSecondUserWithTimeout = executeOrTimeout(getUser, shortTimeout, `Request "Get User" with ID ${secondUserID} was canceled by timeout ${shortTimeout}`);
        const secondUser = await fnGetSecondUserWithTimeout(secondUserID);
        console.log('The Second User is: ', secondUser);
    } catch (error) {
        console.log(error);
    }
}

async function testPromiseWithTimeout() {
    console.log('============== TEST promiseWithTimeout Fn ===');
    try {
        const firstUserPromise = getUser(firstUserID);
        const firstUser = await promiseWithTimeout(firstUserPromise, longTimeout, `Request "Get User" with ID ${firstUserID} was canceled by timeout ${longTimeout}`);
        console.log('The First User is: ', firstUser);

        const secondUserPromise = getUser(secondUserID);
        const secondUser = await promiseWithTimeout(secondUserPromise, shortTimeout, `Request "Get User" with ID ${secondUserID} was canceled by timeout ${shortTimeout}`);
        console.log('The Second User is: ', secondUser);
    } catch (error) {
        console.log(error);
    }
}

async function test() {
    await testExecuteOrTimeout();
    await testPromiseWithTimeout();
}

test();
