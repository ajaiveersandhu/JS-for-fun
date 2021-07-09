async function testing() {
  await setTimeout(() => {
    console.log('running 2');
  }, 1000);
}

console.log('Starting');
setTimeout(() => {
  console.log('running 1');
}, 2000);
console.log('inbetween');
testing();
console.log('ending');
