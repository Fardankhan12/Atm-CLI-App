import inquirer from "inquirer";
const pinCode = 1988;
let balance = 10000;
console.log("Welcome to the CLI ATM!");
const atm = await inquirer.prompt([
    {
        name: "input",
        type: "number",
        message: "Please enter your pincode"
    }
]);
if (atm.input === pinCode) {
    console.log("Account Logged in || Welcome Back");
    const choice = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Choose an action:",
            choices: ["Check Balance", "Deposit", "Withdraw", "Exit"]
        }
    ]);
    if (choice.action === "Check Balance") {
        console.log(`Your balance is: $${balance}`);
    }
    else if (choice.action === "Deposit") {
        const depositAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to deposit"
            }
        ]);
        balance += depositAmount.amount;
        console.log(`Deposit successful. Your new balance is: $${balance}`);
    }
    else if (choice.action === "Withdraw") {
        const withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw"
            }
        ]);
        if (withdrawAmount.amount <= balance) {
            balance -= withdrawAmount.amount;
            console.log(`Withdrawal successful. Your new balance is: $${balance}`);
        }
        else {
            console.log("Insufficient funds!");
        }
    }
    else if (choice.action === "Exit") {
        console.log("Thank you for using the ATM. Goodbye!");
    }
}
else {
    console.log("Wrong Password");
}
