


/**
 * Returns a promise of a function.
 * @param {function} cb - a function to be promisified
 */
function promisify(cb) {
  return cb;
};

function myFunction (string) {
  console.log(string);
}

function promisifiedMyFunction(string) {
  return new Promise((resolve, reject) => {
    myFunction(string, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
}

/**
 * Returns a promise of a function.
 * @param {function} f - a function to be promisified
 * @param {number} b - a number to multiply
 * multiplication(-2, 3);
 */
function promisify(f) {
  return function (...args) { // return a wrapper-function (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // our custom callback for f (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // append our custom callback to the end of f arguments

      f.call(this, ...args); // call the original function
    });
  };
}
// usage:
// let loadScriptPromise = promisify(loadScript);
// loadScriptPromise(...).then(...);



// TIME DELAY SIMULATOR

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * It returns the same as the function entered as argument
 * same as the entered as argument, but with a delay of a few seconds.
 * @param {function} func - a function to simulate it takes time.
 * @param {...any} args - arguments of the function.
 */
export async function simulateDelay(fn, ...args) {
  await timeout(3000);
  return fn(...args);
}

