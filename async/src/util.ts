/**
 * Creates a new function which wraps a target function and contains timeout. The timeout is started when the target function is called.
 * The resulting promise is rejected by timeout when execution of the target function takes more time than given timeout.
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
