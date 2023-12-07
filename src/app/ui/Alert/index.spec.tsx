import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Circle } from 'lucide-react';
import { Alert, AlertError, AlertWarning } from '.';

describe('Alert', () => {
	test('renders text content', () => {
		const children = 'Foobar';
		const { getByText } = render(<Alert icon={<Circle />}>{children}</Alert>);

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
		const { getByText } = render(<Alert icon={<Circle />}>{children}</Alert>);

		expect(getByText(text)).toBeInTheDocument();
	});

	test('renders icon', () => {
		const icon = <Circle data-testid="icon" />;
		const { getByTestId } = render(<Alert icon={icon}>Foobar</Alert>);

		expect(getByTestId('icon')).toBeInTheDocument();
	});
});

describe('AlertWarning', () => {
	test('renders text content', () => {
		const children = 'Foobar';
		const { getByText } = render(<AlertWarning>{children}</AlertWarning>);

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
		const { getByText } = render(<AlertWarning>{children}</AlertWarning>);

		expect(getByText(text)).toBeInTheDocument();
	});
});

describe('AlertError', () => {
	test('renders text content', () => {
		const children = 'Foobar';
		const { getByText } = render(<AlertError>{children}</AlertError>);

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
		const { getByText } = render(<AlertError>{children}</AlertError>);

		expect(getByText(text)).toBeInTheDocument();
	});
});
