export default class CurrencyExchange {
    static async getExchange(cash1, cash2, amount) {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY/pair/${cash1}/${cash2}/${amount}`);
        const data = await response.json();

        const conversionRate = data.conversion_rate;
        const convertedAmount = amount * conversionRate;

        if (conversionRate === undefined || convertedAmount === undefined) {
            console.error('Error in exchange rate data. Conversion rate or converted amount is undefined.');
            throw new Error("Error: I'm sorry there was an error with the currency you input, please make sure the spelling is correct and that the currency is valid");
        } else {
            return {
                conversionRate,
                convertedAmount
            };
        }
    }
}
