(function () {
  function parseNum(el) {
    const n = parseFloat(el.value);
    return Number.isFinite(n) ? n : NaN;
  }

  function calcIncrease(original, newVal) {
    if (!Number.isFinite(original) || !Number.isFinite(newVal)) {
      return { ok: false, message: "Please enter valid numbers." };
    }
    if (original === 0) {
      return { ok: false, message: "Original value cannot be zero." };
    }
    const pct = ((newVal - original) / original) * 100;
    return { ok: true, value: pct };
  }

  function calcDecrease(original, newVal) {
    if (!Number.isFinite(original) || !Number.isFinite(newVal)) {
      return { ok: false, message: "Please enter valid numbers." };
    }
    if (original === 0) {
      return { ok: false, message: "Original value cannot be zero." };
    }
    const pct = ((original - newVal) / original) * 100;
    return { ok: true, value: pct };
  }

  function calcChange(original, newVal) {
    // Percent change is the same math as increase (can be negative)
    return calcIncrease(original, newVal);
  }

  function initPercentageCalculator() {
    const originalEl = document.getElementById("originalValue");
    const newEl = document.getElementById("newValue");
    const btn = document.getElementById("calcBtn");
    const resultEl = document.getElementById("result");

    // Not on a calculator page
    if (!originalEl || !newEl || !btn || !resultEl) return;

    const h1 = document.querySelector("h1");
    const title = (h1 ? h1.textContent : "").toLowerCase();

    const isDecrease = title.includes("decrease");
    const isChange = title.includes("change");
    // Default to increase if neither decrease nor change
    const isIncrease = title.includes("increase");

    btn.addEventListener("click", () => {
      const original = parseNum(originalEl);
      const newVal = parseNum(newEl);

      if (isDecrease) {
        const res = calcDecrease(original, newVal);
        resultEl.textContent = res.ok
          ? `Percentage Decrease: ${res.value.toFixed(2)}%`
          : res.message;
        return;
      }

      if (isChange) {
        const res = calcChange(original, newVal);
        if (!res.ok) {
          resultEl.textContent = res.message;
          return;
        }

        const direction = res.value > 0 ? "Increase" : (res.value < 0 ? "Decrease" : "Change");
        resultEl.textContent = `Percentage Change: ${res.value.toFixed(2)}% (${direction})`;
        return;
      }

      // Increase (default)
      const res = calcIncrease(original, newVal);
      resultEl.textContent = res.ok
        ? `Percentage Increase: ${res.value.toFixed(2)}%`
        : res.message;
    });
  }

  document.addEventListener("DOMContentLoaded", initPercentageCalculator);
})();
