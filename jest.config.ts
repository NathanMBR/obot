/* eslint-disable */
export default {
	collectCoverage: true,
	coverageDirectory: "./test/coverage",
	coverageProvider: "babel",
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
		"@test/(.*)": "<rootDir>/test/$1"
	},
	preset: "ts-jest"
}