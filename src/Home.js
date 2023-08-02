import logo from './images/logo.svg';
import plus from './images/plus.svg';

import { Header } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { add } from './InputSlice';

const headerStyle = {
  backgroundColor: '#F7F9FD',
  height: '124px',
  minWidth: '1025px',
  maxWidth: '100%',
  position: 'relative',
  boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.20)',
  borderBottom: '1px solid #424242'
};

const imageStyle = {
  height: '54.634px',
  width: '54.634px',
  position: 'absolute',
  top: '8.88px',
  left: '70.27px'
};

const textStyle = {
  color: '#424242',
  fontWeight: 600,
  lineHeight: '50px',
  fontSize: '16px',
  position: 'absolute',
  top: '70px',
  left: '101px',
  padding: 0,
  margin: 0,
  letterSpacing: '0.8px'
};

const plusStyle = {
  height: '60px',
  width: '60px',
  position: 'absolute',
  bottom: '8px',
  right: '129px',
  top: '95px',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)'
};

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header style={headerStyle}>
        <img src={logo} style={imageStyle}></img>
        <p style={textStyle}>MY PROJECTS</p>
        <img src={plus} style={plusStyle} onClick={() => dispatch(add())} />
      </Header>
    </div>
  );
};

export default Home;
