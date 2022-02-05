import { clearValidator } from "@/commands";

describe("Clear command validation tests", () => {
	it("Should throw an error when not passing a number", () => {
		expect(() => { clearValidator(NaN); }).toThrowError("Invalid number argument.");
	});

	it("Should throw an error when passing a number less than or equal zero", () => {
		expect(() => { clearValidator(0); }).toThrowError("The quantity must be greater than zero.");
	});

	it("Should throw an error when passing a number greater than 20", () => {
		expect(() => { clearValidator(21); }).toThrowError("The quantity must be less than or equal to 20.");
	});

	it("Should be successfully validated", () => {
		expect(() => { clearValidator(5); }).not.toThrowError();
	});
});