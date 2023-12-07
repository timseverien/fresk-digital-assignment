import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Flow } from '.';

describe('Flow', () => {
	test('renders text content', () => {
		const children = 'Foobar';
		const { getByText } = render(<Flow>{children}</Flow>);

		expect(getByText(children)).toBeInTheDocument();
	});

	test('renders DOM children', () => {
		const text = 'Foo';
		const children = (
			<>
				<div>{text}</div>
				<div>Bar</div>
			</>
		);
		const { getByText } = render(<Flow>{children}</Flow>);

		expect(getByText(text)).toBeInTheDocument();
	});
});
