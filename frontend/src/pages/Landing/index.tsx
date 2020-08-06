import React from 'react';
import { Link } from 'react-router-dom';

// Images
import imgLogo from '../../assets/images/logo.svg';
import imgLanding from '../../assets/images/landing.svg';

// Icons
import iconStudy from '../../assets/images/icons/study.svg';
import iconTeach from '../../assets/images/icons/teach.svg';
import iconHeart from '../../assets/images/icons/heart.svg';

import { LandingPage, LandingHeader, ButtonContainer } from './styles';

export default function Landing() {
    return (
        <LandingPage className="page-landing">
            <div id="page-landing-content" className="container">
                <LandingHeader className="logo-container">
                    <img src={imgLogo} alt="Proffy!"/>
                    <h2>This is a goddamn description</h2>
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
                    200 people have already been connected!
                    <img src={iconHeart} alt="heart" className="heart"/>
                </span>
            </div>
        </LandingPage>
    );
}
