import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

// Images
import imgLogo from '../../assets/images/logo.svg';
import imgLanding from '../../assets/images/landing.svg';

// Icons
import iconStudy from '../../assets/images/icons/study.svg';
import iconTeach from '../../assets/images/icons/teach.svg';
import iconHeart from '../../assets/images/icons/heart.svg';

import { LandingPage, LandingHeader, ButtonContainer } from './styles';

export default function Landing() {
    const [connections, setConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            setConnections(response.data.total);
        });
    }, []);

    return (
        <LandingPage className="page-landing">
            <div id="page-landing-content" className="container">
                <LandingHeader className="logo-container">
                    <img src={imgLogo} alt="Proffy!"/>
                    <h2>Teach, or be taught.</h2>
                </LandingHeader>

                <img src={imgLanding} alt="Proffy!" className="hero-image"/>

                <ButtonContainer className="button-container">
                    <Link to="/study" className="study">
                        <img src={iconStudy} alt="Study"/>
                        Study
                    </Link>
                    <Link to="/teach" className="teach">
                        <img src={iconTeach} alt="Teach"/>
                        Teach
                    </Link>
                </ButtonContainer>

                <span className="total-connections">
                    {connections} bonds have already been made!
                    <img src={iconHeart} alt="heart" className="heart"/>
                </span>
            </div>
        </LandingPage>
    );
}
