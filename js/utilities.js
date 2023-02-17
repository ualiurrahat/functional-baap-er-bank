// function to get input value as number from an input field
function getInputFieldValueById(inputFieldId)
{
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // clearing input field after getting its value
    inputField.value = '';
    return inputFieldValue;
}
// funciton to get text element innerText as number from an input field.
function getTextElementValueById(textElementId)
{
    const textField = document.getElementById(textElementId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

// function to set value of an element
function setTextElementValueById(elementId, newValue)
{
    const textElement= document.getElementById(elementId);
   textElement.innerText = newValue;
}