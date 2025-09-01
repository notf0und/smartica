import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const Home: React.FC = () => (
    <Carousel
        style={{height: '360px'}}
        arrows
        adaptiveHeight
        fade
        infinite
        easing='ease-out'
        autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div>
        <h3 style={contentStyle}>1</h3>
        </div>
        <div>
        <h3 style={contentStyle}>2</h3>
        </div>
        <div>
        <h3 style={contentStyle}>3</h3>
        </div>
        <div>
        <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);

export default Home;