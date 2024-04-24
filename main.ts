#! /usr/bin/env node
import inquirer from "inquirer";
const Currency: any= {
    USD: 1,       //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAnswer = await inquirer.prompt(
    [
    
        {
    name: 'from',
    message: "Enter From Currency",
    type: 'list',
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name: 'to',
    message: "Enter From Currency",
    type: 'list',
    choices: ["USD","EUR","GBP","INR","PKR"]
},

{
    name: "amount",
    message: "Enter Your amount",
    type: "number"
}]);
let fromAmount = Currency[userAnswer.from]
let toAmount = Currency[userAnswer.to]
let Amount =userAnswer.amount
let baseAmount = Amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)
