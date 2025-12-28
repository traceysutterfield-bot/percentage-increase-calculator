function calculateIncrease() {
  const original = parseFloat(document.getElementById("originalValue").value);
  const newValue = parseFloat(document.getElementById("newValue").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(original) || isNaN(newValue) || original === 0) {
    resultDiv.textContent = "Please enter valid numbers (original value cannot be zero).";
    return;
  }

  const increase = ((newValue - original) / original) * 100;
  resultDiv.textContent = `Percentage Increase: ${increase.toFixed(2)}%`;
}
