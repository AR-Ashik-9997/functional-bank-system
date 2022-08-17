document
  .getElementById("submit-deposit")
  .addEventListener("click", function () {
    const errorMassege = document.getElementById("deposit-massege");
    const currentDeposit = getInputFieldValueById("user-deposit");
    try {
      if (isNaN(currentDeposit) === true) throw "This field is required and enter your Amount";
      if (currentDeposit % 1 !== 0) throw "Please provide a Absolute Amount";
      if (currentDeposit <= 0) throw "plese provide a Amount greterthan Zero";
    } catch (error) {
      errorMassege.innerText = error;
    } finally {
      if (
        isNaN(currentDeposit) === false &&
        currentDeposit > 0 &&
        currentDeposit % 1 == 0
      ) {
        const previousDeposit = getElementTextById("total-deposit");
        const newDeposit = currentDeposit + previousDeposit;
        setElementTextById("total-deposit", newDeposit);
        const previousBalance = getElementTextById("total-balance");
        const newBalance = currentDeposit + previousBalance;
        setElementTextById("total-balance", newBalance);
        errorMassege.innerText = "";
      }
    }
  });
