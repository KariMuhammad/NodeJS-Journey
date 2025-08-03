let i = 0;
let times = 0;
const start = Date.now();

function count1() {
  times++; // 1, ...

  // Simulation to Heavy Task (*)
  do {
    i++;
  } while (i % 1e6 != 0); // 1_000_000 -> 2_000_000 -> ... -> 10_000_000

  // Split heavy task and schedule
  if (i == 1e9) {
    console.log(`Done ${Date.now() - start} ms`);
    console.log("Split into " + times + " times.");
  } else {
    setTimeout(count1, 0);
  }
}
count1();

// More Efficent and fast (same result)
function count2() {
  times++;

  // move the scheduling to the beginning
  if (i < 1e9 - 1e6) {
    setTimeout(count2); // schedule the new call
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log("Done in " + (Date.now() - start) + "ms");
    console.log("Times = ", times);
  }
}
count2();
