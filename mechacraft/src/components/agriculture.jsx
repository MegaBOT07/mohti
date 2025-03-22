import React from 'react';
import './agriculture.css';

const Agriculture = () => {
    return (
        <div className="agriculture-container">
            <h1 className="agriculture-title">Agriculture Technology</h1>
            <img src="./assets/5.jpeg" alt="Agriculture Technology" className="agriculture-image" />
            <p className="agriculture-text">
                Agriculture technology, also known as AgTech, encompasses the use of technology in agriculture to improve yield, efficiency, and profitability. This includes the use of advanced machinery, data analytics, and biotechnology to enhance farming practices.
            </p>
            <h2 className="agriculture-subtitle">Combination of Robots and Agriculture</h2>
            <img src="./assets/5.jpeg" alt="Robots in Agriculture" className="agriculture-image" />
            <p className="agriculture-text">
                The integration of robots in agriculture is revolutionizing the industry. Robots are being used for various tasks such as planting, harvesting, and monitoring crops. These robots can work tirelessly and with precision, reducing the need for manual labor and increasing productivity. The use of drones for aerial surveillance and automated tractors are just a few examples of how robotics is transforming agriculture.
            </p>
        </div>
    );
};

export default Agriculture;
