import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import SelectCity from './SelectCity';

test('SNAPSHOT: renders SelectCity component correctly', () => {
  const props = {
    city: 'Sydney',
    setCity: () => {},
  };
  const tree = renderer.create(<SelectCity {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders SelectCity component select element', () => {
  const props = {
    city: 'Sydney',
    setCity: () => {},
  };
  const { container } = render(<SelectCity {...props} />);
  expect(container.firstChild).toHaveClass('form-select');
  expect(container.firstChild).toHaveClass('form-select-lg');
  expect(container.firstChild).toHaveClass('mb-3');
});

test('calls setCity prop on select change', () => {
  const props = {
    city: 'Sydney',
    setCity: jest.fn(() => {}),
  };
  const { container } = render(<SelectCity {...props} />);
  fireEvent.change(container.firstChild, { target: { value: 'Melbourne' } });
  expect(props.setCity).toHaveBeenCalledWith('Melbourne');
});
