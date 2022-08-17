function getInputFieldValueById(InputFieldById) {
  const inputField = document.getElementById(InputFieldById);  
  const inputFieldValue = parseFloat(inputField.value);  
  inputField.value = "";
  return inputFieldValue;
}

function getElementTextById(InputTextById) {
  const inputText = parseFloat(
    document.getElementById(InputTextById).innerText
  );
  return inputText;
}

function setElementTextById(setElementById, newValue) {
  const setText = document.getElementById(setElementById);
  setText.innerText = newValue;
}
