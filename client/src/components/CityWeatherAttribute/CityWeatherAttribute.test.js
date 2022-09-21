import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import renderer from 'react-test-renderer';

import CityWeatherAttribute from './CityWeatherAttribute';

test('SNAPSHOT: renders CityWeatherAttribute component correctly', () => {
  const props = {
    attribute: 'Wind',
    attributeDescription: 'Wind speed right now',
    attributeValue: 10,
    attributeUnit: 'km/h',
    iconSource: 'https://cdn-icons-png.flaticon.com/512/3026/3026309.png',
  };
  const tree = renderer.create(<CityWeatherAttribute {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders element with a city-weather-attribute css class on it', () => {
  const props = {
    attribute: 'Rain Chance',
    attributeDescription: "Chances that it'll rain today",
    attributeValue: 20,
    attributeUnit: '%',
    iconSource: 'https://cdn-icons-png.flaticon.com/512/4150/4150904.png',
  };
  const { container } = render(<CityWeatherAttribute {...props} />);
  expect(
    container.getElementsByClassName('city-weather-attribute').length
  ).toBe(1);
  expect(screen.getByText(props.attribute)).toBeInTheDocument();
  expect(screen.getByText(props.attributeDescription)).toBeInTheDocument();
  expect(
    screen.getByText(props.attributeValue + props.attributeUnit)
  ).toBeInTheDocument();
});
