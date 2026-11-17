// Bank Account Simulator

const prompt = require("prompt-sync")();

const accountDetails = {
    accountHolder: "XYZ",
    accountNumber: 123456789101,
    accountPin: 1234,
    openingBalance: 10000,
    transactionDetails: [
        { type: "deposit", amount: 500 },
        { type: "withdraw", amount: 100 },
        { type: "deposit", amount: 250 },
        { type: "withdraw", amount: 50 },
        { type: "deposit", amount: 1000 },
        { type: "withdraw", amount: 200 },
        { type: "deposit", amount: 750 },
        { type: "withdraw", amount: 150 },
        { type: "deposit", amount: 300 },
        { type: "withdraw", amount: 75 },
        { type: "deposit", amount: 600 },
        { type: "withdraw", amount: 125 }
    ],
}

function currentBalance() {
    let withdraw = 0;
    let deposit = 0;
    for (let i in accountDetails.transactionDetails) {
        if (accountDetails.transactionDetails[i].type == "withdraw") {
            withdraw += accountDetails.transactionDetails[i].amount;
        }
        else if (accountDetails.transactionDetails[i].type == "deposit") {
            deposit += accountDetails.transactionDetails[i].amount;
        }
    }
    const finalBalance = accountDetails.openingBalance + deposit - withdraw;

    return {deposit: deposit, withdraw: withdraw, finalBalance: finalBalance};
}

console.log("==========WELCOME TO XYZ BANK==========");
console.log();

let attempt = 0
while (true) {
    const userAccountNumber = Number(prompt("Account number: "));
    const userPin = Number(prompt("PIN: "));

    if (userAccountNumber === accountDetails.accountNumber && userPin === accountDetails.accountPin) {
        console.log();
        console.log("Access granted");
        console.log();
        break;
    }
    else {
        console.log("Wrong account number or user PIN");
        attempt++;
        if (attempt >= 3) {
            console.log("You entered wrong information in all attempts. Try after sometime.")
            process.exit(0);
        } 
    }
}

while (true) {
    console.log("Choose an option:");
    console.log("1. Account Details");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Transaction History");
    console.log("5. Account Summary");
    console.log("6. Exit");
    const userOptions = Number(prompt("=> "));

    if (userOptions == 1) {
        console.log("==========ACCOUNT DETAILS==========");
        console.log();
        console.log(`Account Holder: ${accountDetails.accountHolder}`);
        console.log(`Account Number: ${accountDetails.accountNumber}`);
        console.log(`Opening Balance: $${accountDetails.openingBalance}`);
        console.log()
    }

    else if (userOptions == 2) {
        console.log("==========DEPOSIT==========");
        console.log();

        let depositAmount;
        while (true) {
            depositAmount = Number(prompt("Amount($): "));
            if (Number.isNaN(depositAmount) == true || depositAmount <= 0) {
                console.log("Enter a valid amount");
            }
            else {
                break;
            }
        }

        accountDetails.transactionDetails.push({type: "deposit", amount: depositAmount});
        console.log(`Amount of $${depositAmount} has been successfully deposited to account: ${accountDetails.accountNumber}`);
        console.log();
    }

    else if (userOptions == 3) {
        console.log("==========WITHDRAW==========");
        console.log();
        const transactionSummary = currentBalance();

        let withdrawAmount;
        while (true) {
            withdrawAmount = Number(prompt("Amount($): "));
            if (Number.isNaN(withdrawAmount) == true || withdrawAmount <= 0) {
                console.log("Enter a valid amount")
            }
            else if (withdrawAmount > transactionSummary.finalBalance) {
                console.log("Insufficient account balance. Choose a valid amount.");
            }
            else {
                break;
            }
        }

        accountDetails.transactionDetails.push({type: "withdraw", amount: withdrawAmount});
        console.log(`Amount of $${withdrawAmount} has been successfully withdrawn from account: ${accountDetails.accountNumber}`);
        console.log();
    }

    else if (userOptions == 4) {
        console.log("==========TRANSACTION HISTORY==========");
        console.log();
        for (let i in accountDetails.transactionDetails) {
            if (accountDetails.transactionDetails[i].type == "deposit") {
                console.log(`${Number(i)+1}. ${accountDetails.transactionDetails[i].type}         +$${accountDetails.transactionDetails[i].amount}`);
            }
            else if (accountDetails.transactionDetails[i].type == "withdraw") {
                console.log(`${Number(i)+1}. ${accountDetails.transactionDetails[i].type}         -$${accountDetails.transactionDetails[i].amount}`);
            }
        }
        console.log();
    }
    else if (userOptions == 5) {
        console.log("==========ACCOUNT SUMMARY==========");
        console.log();
        const transactionSummary = currentBalance()
    
        console.log(`Total Deposits: $${transactionSummary.deposit}`);
        console.log(`Total Withdraws: $${transactionSummary.withdraw}`);
        console.log();
        console.log(`Final Balance: $${transactionSummary.finalBalance}`);
        console.log();
    }

    else if (userOptions == 6) {
        break;
    }

    else {
        console.log("Choose a valid option!");
    }
}
