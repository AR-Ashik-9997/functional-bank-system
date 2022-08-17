document
  .getElementById("submit-withdraw")
  .addEventListener("click", function () {
    const errorMassege = document.getElementById("withdraw-massege");
    const currentWithdraw = getInputFieldValueById("user-withdraw");
    const previousWithdraw = getElementTextById("total-withdraw");
    const newBalance = getElementTextById("total-balance");
    try {
      if (isNaN(currentWithdraw) === true)
        throw "This field is required and enter your Amount";

      if (currentWithdraw <= 0) throw "plese provide a Amount greterthan Zero";
      if (currentWithdraw > newBalance)
        throw "your account does not have enough money, please make a deposit.";
    } catch (error) {
      errorMassege.innerText = error;
    } finally {
      if (
        isNaN(currentWithdraw) === false &&
        currentWithdraw > 0 &&
        currentWithdraw < newBalance
      ) {
        const newWithdraw = currentWithdraw + previousWithdraw;
        setElementTextById("total-withdraw", newWithdraw);
        const totalBalance = newBalance - currentWithdraw;
        setElementTextById(
          "total-balance",
          parseFloat(totalBalance.toFixed(2))
        );
        errorMassege.innerText = "";
      }
    }
  });
