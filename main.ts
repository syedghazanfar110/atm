#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
    type: "number",
    message: "Enter your pin",
    name: "pin",
}])
if (pinAnswer.pin == myPin) {
    console.log("correct your pin")
}else {
    console.log("Enter your wrong pin")
}
let opperationAns = await inquirer.prompt([{
    type: "list",
    message: "select your option",
    name: "option",
    choices: ["withdraw", "check balance"]
}])
if (opperationAns.option == "withdraw") {
    let amountAns = await inquirer.prompt([{
        name: "amount",
        type: "number",
        message: "Enter your amount",
    }])
    myBalance -= amountAns.amount
    console.log("your balance is", myBalance)

}else if (opperationAns.option == "check balance") {
    console.log("your balance is", myBalance)
 }
//  if (opperationAns.option == "choices") {

// let fastCashAns = await inquirer.prompt([{
//     name: "parameter",
//     type: "list",
//     message: "select your fast cash",
//     choices: ["500", "1000", "2000", "3000","4000","5000","6000","7000","8000","9000","10000"]
// }]) 
// if( fastCashAns.again == "500"){
//     myBalance -= 500
//     console.log("your balance is", myBalance)
// } 
//}