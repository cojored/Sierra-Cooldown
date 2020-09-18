function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
async function cooldown(id, cooldown) {
  if (isNaN(id)) throw new TypeError("Please enter a number");
  if (isNaN(cooldown)) throw new TypeError("Please enter a number");
  await sleep(cooldown)
	 return `<@${id}> your cooldown is over` 
};


module.exports = {cooldown}