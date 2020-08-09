import React from 'react';

import iconWPP from '../../assets/images/icons/whatsapp.svg';

import { ListItem } from './styles';
import api from '../../services/api';

export interface Teacher {
    id: number;
    subject: string;
    cost: number;
    user: {
        id: number;
        name: string;
        avatar: string;
        bio: string;
        whatsapp: string;
    }
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function handleCreateConnection() {
        api.post('connections', {
            user_id: teacher.user.id
        });
    }

    return (
        <ListItem>
            <header>
                <img src={teacher.user.avatar} alt="{Teacher.img}"/>
                <div>
                    <strong>{teacher.user.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.user.bio}
            </p>

            <footer>
                <p>
                    Price/Hour
                    <strong>$ {teacher.cost}</strong>
                </p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCreateConnection}
                    href={`https://wa.me/${teacher.user.whatsapp}`}
                >
                    <img src={iconWPP} alt="Whatsapp"/>
                    Get in touch
                </a>
            </footer>
        </ListItem>
    );
}

export default TeacherItem;
