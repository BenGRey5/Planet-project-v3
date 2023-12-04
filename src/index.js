import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from '../src/currency.js';

window.addEventListener('load', function () {
  document.getElementById('CurrencyFinder').addEventListener('submit', handleCurrencyFinder);
});
async function handleCurrencyFinder(event) {
  event.preventDefault();


  const cash1 = document.querySelector("#currency1").value;
  const cash2 = document.querySelector("#currency2").value;
  const amount = parseInt(document.querySelector("#amount1").value);

  try {
    const result = await CurrencyExchange.getExchange(cash1, cash2, amount);
    document.querySelector("#showRate").innerText = ("The exchange rate for your chosen currencies is " + result.conversionRate);
    document.querySelector("#showAmount").innerText = ("The exchange amount for your chosen currencies and input amount is " + result.convertedAmount);
  } catch (error) {
    document.querySelector("#showRate").innerText = error.message;
    document.querySelector("#showAmount").innerText = null;
  }
}
