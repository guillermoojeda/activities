import { simulateDelay } from "../shared_functions/promisify";

/**
 * 
 * @param {function} req - The function that simulates a request 
 * @param  {...any} args - The arguments for the function
 */
function requestWithDelay(req, ...args) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject (err);
        } else {
          resolve(result);
        }
      }
      args.push(callback);
      req.call(this, args);
    })
  }
}
