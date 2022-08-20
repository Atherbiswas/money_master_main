function getInputFieldValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    inputField.value = '';
    return inputFieldAmount;
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementAmountString = textElement.innerText;
    const textElementAmount = parseFloat(textElementAmountString);
    return textElementAmount;
}
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}