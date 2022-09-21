import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import renderer from 'react-test-renderer';

import CityWeatherForecast from './CityWeatherForecast';
import mockForecast from '../../data/cityWeatherForecast.mock.data';

test('SNAPSHOT: renders CityWeatherForecast component correctly', () => {
  const tree = renderer
    .create(<CityWeatherForecast dailyWeatherData={mockForecast} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders `7 Days Forecast` text', () => {
  render(<CityWeatherForecast dailyWeatherData={mockForecast} />);
  expect(screen.getByText('7 Days Forecast')).toBeInTheDocument();
});
