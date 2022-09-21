import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';

test('SNAPSHOT: renders App component correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders App component container', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('container');
});
