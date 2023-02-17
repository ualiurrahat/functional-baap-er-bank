
// task: deposit money, update total deposit and total balance.
// 1. add event listener to the deposit button.
document.getElementById('btn-deposit').addEventListener('click', function(){
    // 2. get new deposit amount from deposit field input 
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // 3. get previous deposit total
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // 4. calculate current deposit total
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    // 5. set total deposit amount
    setTextElementValueById('deposit-total', currentDepositTotal);
    // 6. get previous total balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    // 7. calculate new balance
    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
    // 8. set new balance
    setTextElementValueById('balance-total', currentBalanceTotal);
});