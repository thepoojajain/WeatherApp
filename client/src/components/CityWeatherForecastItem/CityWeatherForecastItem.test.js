import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import renderer from 'react-test-renderer';

import CityWeatherForecastItem from './CityWeatherForecastItem';
import mockForecast from '../../data/cityWeatherForecast.mock.data';

test('SNAPSHOT: renders CityWeatherForecastItem component correctly', () => {
  const tree = renderer
    .create(<CityWeatherForecastItem {...mockForecast[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders relevent weather forecast data', () => {
  const mockForecastItem = mockForecast[1];
  const { temp_min, temp_max } = mockForecastItem;
  render(<CityWeatherForecastItem {...mockForecastItem} />);
  expect(screen.getByText(temp_max.toFixed())).toBeInTheDocument();
  expect(screen.getByText(temp_min.toFixed())).toBeInTheDocument();
});
