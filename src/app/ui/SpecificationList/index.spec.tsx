import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SpecificationList, SpecificationListItem } from '.';

describe('SpecificationList', () => {
	test('renders specification list', () => {
		const specificationList: SpecificationListItem<string>[] = [
			{
				name: 'Name 1',
				value: 'Value 1',
			},
			{
				name: 'Name 2',
				value: 'Value 2',
			},
		];
		const { getByText } = render(<SpecificationList specifications={specificationList} />);

		expect(getByText(specificationList[0].name)).toBeInTheDocument();
		expect(getByText(specificationList[0].value)).toBeInTheDocument();
	});
});
