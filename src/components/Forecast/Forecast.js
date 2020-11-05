import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './Forecast.scss';

const Forecast = ({ forecast }) => (
  <div className="forecast">
    {console.log(forecast)}
    {forecast.map((item, idx) => (
      <Card
        temp={item.temp}
        code={item.weather.code}
        date={item.valid_date}
        description={item.weather.description}
        key={"card:" + idx}
      />
    ))}
  </div>
)

function mapStateToProps(state) {
  return {
    forecast: state.forecast.forecast
  }
}

export default connect(mapStateToProps)(Forecast);
