
// task: withdraw money, update total withdraw and total balance.
// 1. add event listener to the withdraw button.
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // 2. get new withdraw amount from withdraw field input 
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // 3. get previous withdraw total
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    // 4. calculate current withdraw total
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    // 5. set total withdraw amount
    setTextElementValueById('withdraw-total', currentWithdrawTotal);
    // 6. get previous total balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    // 7. calculate new balance
    const currentBalanceTotal =  previousBalanceTotal -newWithdrawAmount;
    // 8. set new balance
    setTextElementValueById('balance-total', currentBalanceTotal);
});