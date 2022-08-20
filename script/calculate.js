//add event listner to claculate button...
document.getElementById('btn-calc').addEventListener('click', function(){
    //get income amount from the user...
    const userIncomeAmount = getInputFieldValueById('user-income');
    const userFoodAmount = getInputFieldValueById('food-filed');
    const userRentAmount = getInputFieldValueById('rent-filed');
    const userClothesAmount = getInputFieldValueById('clothes-filed');
    
    //calculate total expences
    const totalExpenses = getTextElementValueById('total-expenses');
    const userTotalExpenses = userFoodAmount + userRentAmount + userClothesAmount;
    setTextElementValueById('total-expenses',userTotalExpenses);

    // //calculate total balance
    const totalBalance = getTextElementValueById('total-balance');
    const presentTotalBalance = userIncomeAmount - userTotalExpenses;
    setTextElementValueById('total-balance',presentTotalBalance);
    
})