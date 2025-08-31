const pin = 1234;

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

    if(accountNumber.length < 11){
        alert("Invalid account number");
        return;
    }

    if(pin !== pinNumber){
        alert("Invalid pin number")
        return;
    }

    // calculate total balance 
    const totalAvailableBalance = availableBalance + addAmount

    // set total balance to the available balance element / wallet
    document.getElementById("available-balance").innerText = totalAvailableBalance


})