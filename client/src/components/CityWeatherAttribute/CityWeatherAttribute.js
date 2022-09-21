import './CityWeatherAttribute.css';

export default function CityWeatherAttribute({
  attribute,
  attributeDescription,
  attributeValue,
  attributeUnit,
  iconSource,
}) {
  return (
    <div className="col-xs-12 col-md-6 mb-3">
      <div className="card city-weather-attribute d-flex flex-row justify-content-between p-4">
        <div className="d-flex flex-column justify-content-between">
          <h6 className="card-title text-uppercase fw-bold">{attribute}</h6>
          <p>{attributeDescription}</p>
          {attributeValue != null ? (
            <h6 className="card-text">
              {attributeValue}
              {attributeUnit}
            </h6>
          ) : (
            <h6 className="card-text">N.A.</h6>
          )}
        </div>
        <img className="attribute-icon" src={iconSource} alt={attribute} />
      </div>
    </div>
  );
}
