import React, { useEffect } from 'react';
import Title from '../../components/Title/Title';
import { connect } from 'react-redux';
import { getUserInfo } from '../../store/actions/userActions';
import Wrapper from '../../layouts/Wrapper/Wrapper';
import './Home.scss';


const Home = (props) => {
  useEffect(() => {
    props.getUserInfo();
    console.log(props.forecast);
  }, []);

  return (
    <Wrapper>
      <Title />
    </Wrapper>
  );
}

function mapStateToProps(state) {
  return {
    forecast: state.forecast.forecast
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => dispatch(getUserInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
