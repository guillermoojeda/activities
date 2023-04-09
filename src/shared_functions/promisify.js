
// Promisify has not yet been implementedin this project.
// Of course, in a commercial product I would never leave unused code
// like this case, but since this is a demonstrative project, I will take
// the freedom to do it. Will erase this later if it remains unused.

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
 */
function promisify(f) {
  return function (...args) { // return a wrapper-function (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // mycustom callback for f (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // append my custom callback to the end of f arguments

      f.call(this, ...args); // call the original function
    });
  };
}
// use sample:
// let myFunctionPromise = promisify(loadScript);
// myFunctionPromise(...).then(...);



// TIME DELAY SIMULATOR -- Not yet implemented

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

