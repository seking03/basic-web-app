import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "seking"
        ));
    });

    test('should answer name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "seking"
        ))
    })

    test('should answer largest 55', () => {
        const query = "Which of the following numbers is the largest: 5, 10, 55?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "55"
        ))
    })

    test('should answer multiplied 10', () => {
        const query = "What is 2 multiplied by 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "10"
        ))
    })

    test('should answer 7', () => {
        const query = "Which of the following numbers are primes: 8, 10, 12, 14, 7?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "7"
        ))
    })

});