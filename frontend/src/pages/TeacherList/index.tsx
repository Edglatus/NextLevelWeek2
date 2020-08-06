import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { ListPage, ListForm } from './styles';

export default function TeacherList() {
    return (
        <ListPage id="page-teacher-list" className="container">
            <PageHeader title="These Proffies are available.">
                <ListForm id="teacher-search">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Weekday</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="date">Date</label>
                        <input type="text" id="date"/>
                    </div>
                </ListForm>
            </PageHeader>

            <main>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </main>
        </ListPage>
    );
}
