import React from 'react';
import { connect } from 'react-redux';
import './Title.scss';

const Title = ({ city }) => (
  <h1 className="title">{city}</h1>
);

function mapStateToProps(state) {
  return {
    city: state.forecast.city
  }
}

export default connect(mapStateToProps)(Title);
