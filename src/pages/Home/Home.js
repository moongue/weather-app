import React, { useEffect } from 'react';
import Title from '../../components/Title/Title';
import { connect } from 'react-redux';
import './Home.scss';
import { getUserInfo } from '../../store/actions/userActions';


const Home = (props) => {
  useEffect(() => {
    props.getUserInfo();
  }, []);

  return (
    <Title />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => dispatch(getUserInfo())
  }
}

export default connect(null, mapDispatchToProps)(Home);
