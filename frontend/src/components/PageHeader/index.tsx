import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg';

import iconReturn from '../../assets/images/icons/back.svg';

import { Header } from './styles';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <Header className="page-header">
            <header className="header-top-bar">
                <Link to="/">
                    <img src={iconReturn} alt="Go Back"/>
                </Link>

                <img src={imgLogo} alt="Proffy!"/>
            </header>

            <section className="header-content">
                <strong>{props.title}</strong>
                {props.subtitle && <p>{props.subtitle}</p>}

                {props.children}
            </section>
        </Header>
    );
}

export default PageHeader;
