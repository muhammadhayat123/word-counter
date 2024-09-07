#!/user/bin/env node


import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Scentence",
        type: "input",
        messange: "Enter scentence to count the word:"
    }
]);

const words = answers.Scentence.trim().split(" ");
console.log(words);
console.log(`your scentence word count is ${words.length}`);
 