#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.yellowBright("\t Welcome To Muskan's Pharmacy Quiz\n"));
console.log(chalk.cyanBright("\t BEST OF LUCK!!! \n"));

let quiz_questions = await inquirer.prompt([{
    name: "answer_1",
    type: "list",
    message: "What is Pharmacy?", 
    choices:["A healthcare profession involved in medication preparation and dispensing",
         "A type of grocery store specializing in organic products",
        " A branch of mathematics dealing with shapes and figures"],
},
{
   name: "answer_2",
   type: "list",
   message: "What is the main role of pharmacist?",
   choices: ["Diagnosing illness",
            "Dispensing medications",
             "Performing surgeries"],
},
{
    name: "answer_3",
    type: "list",
    message: "What does Rx stand for on a prescription?",
    choices: ["Reaction",
              "Refill",
              "Recipe"],
},
]);

if(quiz_questions.answer_1.includes("A healthcare profession involved in medication preparation and dispensing")){
   console.log(chalk.greenBright("correct answer"))
}
    else{
        chalk.redBright
        console.log(chalk.redBright("wrong answer"))
    }
 if(quiz_questions.answer_2.includes("Dispensing medications")){
    console.log((chalk.greenBright("correct answer")))
 }
    else{
        chalk.redBright
       console.log(chalk.redBright("wrong answer"))
    }
if(quiz_questions.answer_3.includes("Recipe")){
    console.log(chalk.greenBright("correct answer"))
}
  else{
    chalk.redBright
    console.log(chalk.redBright("wrong answer"))
  }
 console.log(chalk.magentaBright("\t Thank you for participating in this quiz!\n"));
