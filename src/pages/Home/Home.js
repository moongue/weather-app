import React, { useEffect } from 'react';
import Title from '../../components/Title/Title';
import { connect } from 'react-redux';
import { getUserInfo } from '../../store/actions/userActions';
import Wrapper from '../../layouts/Wrapper/Wrapper';
import Forecast from '../../components/Forecast/Forecast';
import './Home.scss';

const Home = (props) => {
  useEffect(() => {
    props.getUserInfo();
  }, []);

  return (
    <Wrapper>
      <Title />
      <Forecast />
    </Wrapper>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => dispatch(getUserInfo())
  }
}

export default connect(null, mapDispatchToProps)(Home);
