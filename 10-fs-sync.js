const { readFileSync, writeFileSync } = require("fs");

const first_file = readFileSync("./content/first.txt", "utf-8");
const second_file = readFileSync("./content/second.txt", "utf-8");

console.log(first_file, second_file);

writeFileSync("./content/second.txt", `i am the rewiritten second text file`);

writeFileSync(
  "./content/write_file.txt",
  `This is the write file : ${first_file} ${second_file}`
);

writeFileSync("./content/write_file.txt", `I am  the appended text`, {
  flag: "a",
});
