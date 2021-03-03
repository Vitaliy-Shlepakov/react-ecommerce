import React from 'react';
import { withRouter } from 'react-router-dom';
import MainImage from '../../assets/main-section.jpg';
import './index.sass';

const MainSection = ({history}) => {
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="ms-m-image">
                    <img src={MainImage} alt=""/>
                </div>
                <div className="ms-m-description">
                    <h2>Designed from fashion. Crafted for sport.</h2>
                    <p>We make products that effortlessly transition from day to night.
                    From the baord room to the fitness studio, and everywhere in between, each Nomads piece is thougtfully created to be the perfect balance of form and function.</p>
                    <button className="is-black button" id="shop-now" onClick={() => history.push('/product/1')}>
                        Studio Bag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MainSection);