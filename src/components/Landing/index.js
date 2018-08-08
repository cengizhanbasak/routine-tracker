import React from 'react';
import './Landing.css';

const Landing = () =>
(
    <div>
        <div className="jumbo">
            <div className="column">
                <h1 className="jumbo-title">Dont Break the Chain</h1>
                <p className="jumbo-subText">
                Keep your habits in track and increase your productivity.
                </p>
            </div>
            <div className="column">
                <img className="jumbo-image" src="http://www.dragosroua.com/wp-content/uploads/2015/01/chain-312403_1280-e1422477190582.png"/>
            </div>
        </div>
        <div className="jumbo">
            <div className="column">
                <img className="jumbo-image" src="http://www.dragosroua.com/wp-content/uploads/2015/01/chain-312403_1280-e1422477190582.png"/>
            </div>
            <div className="column">
                <h1 className="jumbo-title">Dont Break the Chain</h1>
                <p className="jumbo-subText">
                Keep your habits in track and increase your productivity.
                </p>
            </div>
        </div>
    </div>
)

export default Landing;
