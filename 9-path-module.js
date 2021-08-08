const path = require("path");
// console.log(path.sep);
// console.log(path.join());

const filepath = path.join("/content", "subfolder", "text.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute_path = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "text.txt"
);
console.log(absolute_path);
