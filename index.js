function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
async function cooldownID(id, cooldown) {
  if (isNaN(id)) throw new TypeError("Please enter a number for the ID");
  if (isNaN(cooldown)) throw new TypeError("Please enter a number for the cooldown");
  await sleep(cooldown)
	 return `<@${id}> your cooldown is over` 
};

async function cooldown(message, cooldown) {
  if (typeof message != 'string') throw new TypeError("Please enter a string for the message");
  if (isNaN(cooldown)) throw new TypeError("Please enter a number for the cooldown");
  await sleep(cooldown)
	 return `${message}` 
};


module.exports = {cooldown, cooldownID}
