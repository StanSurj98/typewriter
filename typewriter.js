const str = "Hello from the typewriter! o7";

// The below will not work, as it will just store all the characters in the queue at the same time of 1s, and then appear simultaneously once the timer is done
// ------------------------------
// for (const x of str) {
//   setTimeout(() => {
//     process.stdout.write(x);
//   }, 500);
// };

// Now implement the function to STAGGER the letters


const typewriter = (string) => {
  let delay = 0;
  // 1. loop thru char of string
  for (const x of string) {
    // 2. start our setTimeout, write a character after a delay
    setTimeout(() => {
      process.stdout.write(x);
      // 3. IMPORTANT - we want to incrementally INCREASE our delays each iteration
      // otherwise, we get the entire itertion immediately after this delay is over
    }, delay += 60);
  };
  // 4. we can use the accumulated delay to be same final delay to show the last console.log('\n')
  setTimeout(() => {
    console.log("\n")
  }, delay);
};

console.log(typewriter(str));
// console.log(typewriter("hello from lighthouse labs"));