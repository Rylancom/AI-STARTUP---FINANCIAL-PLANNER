
// Budget Form Logic
document.getElementById('financeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);

  const savings = income - expenses;
  const resultDiv = document.getElementById('result');

  if (savings >= 0) {
    resultDiv.textContent = `🎉 You can save $${savings} per month!`;
  } else {
    resultDiv.textContent = `⚠️ You are overspending by $${Math.abs(savings)} per month.`;
  }
});
