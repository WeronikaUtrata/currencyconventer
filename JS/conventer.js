let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    let EUR = 4.7459;
    let USD = 5.6769;
    let GBP = 4.3125;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = </strong>${result.toFixed(2)} ${currency}</strong>`;

});