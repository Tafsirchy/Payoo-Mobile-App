
const pin = 1234;

// Add Money Feature 
document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();

    // get bank name from the form input
    const bank = document.getElementById("bank").value

    // get account number from the form input
    const accountNumber = document.getElementById("account-number").value

    // get amount to add from the form input
    const addAmount = parseInt(document.getElementById("add-amount").value)

    // get pin number from the form input
    const pinNumber = parseInt(document.getElementById("pin-number").value)

    // get available balance from the available balance element / wallet 
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    // combined step to check input information from the form
    // if(accountNumber.length < 11 || pinNumber.length < 4){
    //     alert("Invalid account or pin");
    //     return;
    // }


    // check if the account number is valid
    if(accountNumber.length < 11){
        alert("Invalid account number");
        return;
    }

    // check if the pin number is valid
    if(pin !== pinNumber){
        alert("Invalid pin number")
        return;
    }

    // calculate total balance 
    const totalAvailableBalance = availableBalance + addAmount

    // set total balance to the available balance element / wallet
    document.getElementById("available-balance").innerText = totalAvailableBalance


})

// Cash Out Feature 
document.getElementById("withdraw-money-btn").addEventListener("click", function(event){
    event.preventDefault()
    // get agent number from the form input
    const agentNumber = document.getElementById("agent-number").value

    // get withdraw amount from the form input
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value)

    // get pin Number from the form input
    const agentPinNumber = parseInt(document.getElementById("agent-pin-number").value)

    // get available balance from the available balance element / wallet 
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    // calculate total balance after withdrawal
    if(availableBalance < withdrawAmount){
        alert("Insufficient Balance")
        return
    }
    const availableBalanceAfterWithdrawal = availableBalance - withdrawAmount

    // set availabe balance after withdwrawal to the available balance element / wallet
    document.getElementById("available-balance").innerText = availableBalanceAfterWithdrawal

    // check if the account number is valid
    if(agentNumber.length < 11){
        alert("Invalid agent number");
        return;
    }

    // check if the pin number is valid
    if(pin !== agentPinNumber){
        alert("Invalid pin number")
        return;
    }





})

// toggling feature for the features section


// for add money 
document.getElementById("add-btn").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"

    document.getElementById("add-money-parent").style.display = "block"
})


// for cash out 
document.getElementById("cashout-btn").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"

    document.getElementById("cash-out-parent").style.display = "block"
})
