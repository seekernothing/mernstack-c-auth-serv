import { calculateDiscount } from "./src/utils";

describe("app", () => {
    it("should return correct discount amount", () => {
        const discount = calculateDiscount(100, 10);
        expect(discount).toBe(10);
    });
});
