const os = require("os");

// info about user
const user = os.userInfo();

// uptime - how long the computer has been running in seconds
const uptime = os.uptime();

const currentOs = {
  name: os.type(),
  release: os.release(),
  Totalmem: os.totalmem(),
  Freemem: os.freemem(),
};
console.log(currentOs);
