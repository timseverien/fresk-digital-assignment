/** @type {import('ts-jest').JestConfigWithTsJest} */
const nextJest = require('next/jest');
const createJestConfig = nextJest({
	dir: './',
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
const customJestConfig = {
	collectCoverage: true,
	testEnvironment: 'jsdom',
};
module.exports = createJestConfig(customJestConfig);
