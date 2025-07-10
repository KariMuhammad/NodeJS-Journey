function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreeting(name) {
  await delayFn(2000);
  console.log("Finally! Hello " + name);
}

console.log("Start");
delayedGreeting("Karim");
console.log("End");

async function divison(n1, n2) {
  try {
    if (n2 === 0) throw new Error("Cannot divide by zero");
    console.log(n1 / n2);
    return n1 / n2;
  } catch (error) {
    console.error(error);
    return null;
  }
}

divison(1, 2);
divison(1, 0);
