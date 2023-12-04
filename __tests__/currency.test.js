import CurrencyExchange from "../src/currency.js";

describe('CurrencyExchange', () => {
    test('should pull exchange rates', async () => {
        const result = await CurrencyExchange.getExchange('EUR', 'GBP', 15);

        expect(result.conversionRate).toEqual(.8684);
        expect(result.convertedAmount).toEqual(13.026);
    });
    test('should return an error', async () => {
        const invalidResult = await CurrencyExchange.getExchange('EURO', 'GDP', 15);
        expect(invalidResult.conversionRate).toEqual(undefined);
        expect(invalidResult.conversionAmount).toEqual(undefined);
    })
});

// test(' should correcttly determine input in not valid', () => {
//     const bill = new CurrencyService(SHIT)
// })


