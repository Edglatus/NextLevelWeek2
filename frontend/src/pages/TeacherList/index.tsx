import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';

// Generic Components
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import InputComponent from '../../components/InputComponent';
import SelectComponent from '../../components/SelectComponent';

// Styled Components
import { ListPage, ListForm } from './styles';

interface FormValues {
    subject: string;
    week_day: number;
    date: string;
}

export default function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const { register, handleSubmit } = useForm<FormValues>();

    const handleTeacherSearch = handleSubmit(async (data: FormValues) => {
        const {subject, week_day, date} = data;

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day: Number(week_day),
                time: date,
            }
        })

        setTeachers(response.data);
    });

    return (
        <ListPage id="page-teacher-list" className="container">
            <PageHeader title="These Proffies are available.">
                <ListForm id="teacher-search" onSubmit={handleTeacherSearch}>
                    <SelectComponent
                        ref={register}

                        selectId="subject"
                        title="Subject"
                        options={[
                            {value: 'logic', label: 'Logic'},
                            {value: 'math', label: 'Math'},
                            {value: 'algorithms', label: 'Algorithms'},
                            {value: 'dataStructures', label: 'Data Structures'},
                        ]}
                    />
                    <SelectComponent
                        ref={register}

                        selectId="week_day"
                        title="Weekday"
                        options={[
                            {value: '0', label: 'Sunday'}, {value: '1', label: 'Monday'},
                            {value: '2', label: 'Tuesday'}, {value: '3', label: 'Wednesday'},
                            {value: '4', label: 'Thursday'}, {value: '5', label: 'Friday'},
                            {value: '6', label: 'Saturday'}
                        ]}
                    />
                    <InputComponent
                        ref={register}

                        type="time" inputId='date' title="Date" />

                    <button type="submit">
                        Search
                    </button>
                </ListForm>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    );
                })}
            </main>
        </ListPage>
    );
}
