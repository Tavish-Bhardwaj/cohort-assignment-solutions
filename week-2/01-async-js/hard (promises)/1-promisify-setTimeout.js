/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function delay(n) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, n * 1000); // Convert seconds to milliseconds
    });
  }
  
  // Example usage:
  const seconds = 3;
  
  delay(seconds)
    .then(() => {
      console.log(`${seconds} seconds have passed!`);
    })
    .catch(error => {
      console.error("Error:", error);
    });
module.exports= delay;  
