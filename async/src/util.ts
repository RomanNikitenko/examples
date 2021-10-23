/**
 * Creates a new function which wraps a given target function and contains timeout. The timeout is started when the target function is called.
 * The resulting promise is rejected by timeout when execution of the target function takes more time than the given timeout.
 * @returns A new function with timeout.
 */
export function executeOrTimeout<T>(originalFunc: (...args) => Promise<T>, ms: number, timeoutErrorMessage: string): Function {
    const fn = async (...args): Promise<T> => {
        const timeoutPromise = new Promise<never>((unused, reject) => {
            setTimeout(() => { reject(new Error(timeoutErrorMessage)) }, ms);
        });

        const targetPromise = originalFunc(...args);
        return Promise.race<T>([targetPromise, timeoutPromise]);
    }
    return fn;
}

/** 
 * The function gets a target Promise and creates a new Promise with timeout. 
 * The resulting promise is resolved or rejected when any of the Promises are resolved or rejected. 
 * So, it's rejected by timeout when execution of the target Promise takes more time than the given timeout. 
 */
export function promiseWithTimeout<T>(targetPromise: Promise<T>, ms: number, timeoutErrorMessage: string): Promise<T> {
    const timeoutPromise = new Promise<never>((unused, reject) => {
        setTimeout(() => { reject(new Error(timeoutErrorMessage)) }, ms);
    });
    return Promise.race<T>([targetPromise, timeoutPromise]);
}

