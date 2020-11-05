import React from 'react';
import { connect } from 'react-redux';
import './Title.scss';

export const Title = ({ city }) => (
  <h1 className="title">{city}</h1>
);

function mapStateToProps(state) {
  return {
    city: state.user.city
  }
}

export default connect(mapStateToProps)(Title);
