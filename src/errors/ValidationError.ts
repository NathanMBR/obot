export class ValidationError extends Error {
	constructor(error: string | undefined) {
		super(error);
	}
}