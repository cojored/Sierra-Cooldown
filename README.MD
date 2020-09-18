# Sierra Cooldown
This is a simple cooldown announcment made for sierra

# Usage
```javascript
const sierracooldown = require("sierracooldown")

id = // User ID

timeout = // time of cooldown in ms

sierracooldown.cooldownID(id, timeout)
// cooldown using discord ID's
```
```javascript
const sierracooldown = require("sierracooldown")

message = // message to send when cooldown is over

timeout = // time of cooldown in ms

sierracooldown.cooldownID(message, timeout)
```
