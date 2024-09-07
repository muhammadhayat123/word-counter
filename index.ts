import inquirer from "inquirer"


const answers:  {
    Scentence: string
} = await inquirer.prompt([
    {
        name: "Scentence",
        type: "input",
        messange: "Enter scentence to count the word:" 
    }
    
])

const words = answers.Scentence.trim().split(" ") 

console.log(words)

console.log("your scentence wod count is $ {words.length}");

const array = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']