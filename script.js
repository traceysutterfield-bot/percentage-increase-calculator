(function () {
  function calculatePercentageIncrease(original, newVal) {
    if (!Number.isFinite(original) || !Number.isFinite(newVal)) {
      return { ok: false, message: "Please enter valid numbers." };
    }
    if (original === 0) {
      return { ok: false, message: "Original value cannot be zero." };
    }
    const increase = ((newVal - original) / original) * 100;
    return { ok: true, value: increase };
  }

  function initPercentageIncreaseCalculator() {
    const originalEl = document.getElementById("originalValue");
    const newEl = document.getElementById("newValue");
    const btn = document.getElementById("calcBtn");
    const resultEl = document.getElementById("result");

    // If these elements aren't on this page, do nothing (prevents errors on homepage)
    if (!originalEl || !newEl || !btn || !resultEl) return;

    btn.addEventListener("click", () => {
      const original = parseFloat(originalEl.value);
      const newVal = parseFloat(newEl.value);

      const res = calculatePercentageIncrease(original, newVal);
      if (!res.ok) {
        resultEl.textContent = res.message;
        return;
      }
      resultEl.textContent = `Percentage Increase: ${res.value.toFixed(2)}%`;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initPercentageIncreaseCalculator();
  });
})();
