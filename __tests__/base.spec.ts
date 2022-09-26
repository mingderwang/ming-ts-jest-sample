import { evaluate, BinaryOperation, BinaryOperators } from "../src";

describe("Simple expression tests", () => {
 test("Check literal value", () => {
        expect(evaluate({ type: "literal", value: 5 })).toBeCloseTo(5);
 });
 test("Check addition", () => {  
    const expr = bin("+", 5, 10);
    expect(evaluate(expr)).toBeCloseTo(15);
           });
    test("Check subtraction", () => {
        const expr = bin("-", 5, 10);
        expect(evaluate(expr)).toBeCloseTo(-5);
    });
    test("Check multiplication", () => {
        const expr = bin("*", 5, 10);
        expect(evaluate(expr)).toBeCloseTo(50);
    });
    test("Check division", () => {
        const expr = bin("/", 10, 5);
        expect(evaluate(expr)).toBeCloseTo(2);
    });
});

function bin(op: BinaryOperators, x: number, y: number): BinaryOperation {
    return {
        type: "binary",
        operator: op,
        left: { type: "literal", value: x },
        right: { type: "literal", value: y },
    };
}
