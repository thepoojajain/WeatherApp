import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import WeatherData from './WeatherData';

test('SNAPSHOT: renders WeatherData component correctly', () => {
  const tree = renderer.create(<WeatherData />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders WeatherData component container', () => {
  const { container } = render(<WeatherData />);
  expect(container.firstChild).toHaveClass('container-fluid');
});
