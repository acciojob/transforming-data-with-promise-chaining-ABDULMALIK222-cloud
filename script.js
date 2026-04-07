const btn = document.getElementById("btn");

btn.onclick = function () {
  const inputVal = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.textContent = "";

  // Convert input to number
  let num = Number(inputVal);

  // Validation (optional but good practice)
  if (inputVal === "" || isNaN(num)) {
    alert("Please enter a valid number");
    return;
  }

  // Initial Promise (2 sec)
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })

    // Multiply by 2 (2 sec)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res * 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000); // 3s total
      });
    })

    // Subtract 3 (1 sec)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res - 3;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000); // 4s total
      });
    })

    // Divide by 2 (1 sec)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res / 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000); // 5s total
      });
    })

    // Add 10 (1 sec)
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res + 10;
          outputDiv.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000); // 6s total
      });
    });
};