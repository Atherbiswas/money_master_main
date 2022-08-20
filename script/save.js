//add event listner to save button ...
document.getElementById('btn-save').addEventListener('click', function(){
    const userIncomeAmount = getInputFieldValueById('user-income');
    const percentageField = getInputFieldValueById('percentage-field');
    const saveAmount = getTextElementValueById('save-amount');
    // calculate save percentage value...
    const saveAmountValue = userIncomeAmount * (percentageField/100);
    setTextElementValueById('save-amount',saveAmountValue);
    //calculate reaming balance...
    // const remianBalance = getTextElementValueById('reamin-balance');
    // const remainBalanceAmount =  presentTotalBalance - saveAmountValue;
    // setTextElementValueById('reamin-balance',remainBalanceAmount);


    
})