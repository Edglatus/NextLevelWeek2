import React from 'react';

import iconWPP from '../../assets/images/icons/whatsapp.svg';

import { ListItem } from './styles';

export default function TeacherItem()
{
    return (
        <ListItem>
            <header>
                <img src="https://static1.funidelia.com/38779-f6_big2/protese-de-espuma-homem-macaco.jpg" alt="{Teacher.img}"/>
                <div>
                    <strong>Teacher.name</strong>
                    <span>Teacher.subject</span>
                </div>
            </header>

            <p>
                Teacher.description
                <br/>
                Teacher.description
            </p>

            <footer>
                <p>
                    Price/Hour
                    <strong>Teacher.pricing</strong>
                </p>
                <button type="button">
                    <img src={iconWPP} alt="Whatsapp"/>
                    Get in touch
                </button>
            </footer>
        </ListItem>
    );
}
