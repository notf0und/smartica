import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const Contact: React.FC = () => (
    <Carousel
        style={{height: '360px'}}
        arrows
        adaptiveHeight
        fade
        infinite
        easing='ease-out'
        autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div>
        <h3 style={contentStyle}>5</h3>
        </div>
        <div>
        <h3 style={contentStyle}>6</h3>
        </div>
        <div>
        <h3 style={contentStyle}>7</h3>
        </div>
        <div>
        <h3 style={contentStyle}>8</h3>
        </div>
    </Carousel>
);

export default Contact;