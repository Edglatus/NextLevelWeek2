import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';

// Generic Components
import PageHeader from '../../components/PageHeader';
import InputComponent from '../../components/InputComponent';
import TextComponent from '../../components/TextComponent';
import SelectComponent from '../../components/SelectComponent';

// Styled Components
import { FormPage, FormMain, ScheduleItem } from './styles';

import iconWarning from '../../assets/images/icons/warning.svg'
import api from '../../services/api';

//  Interfaces
interface Schedule
{
    week_day: number;
    from: string;
    to: string;
}
interface FormValues
{
    name: string;
	avatar: string;
	whatsapp: string;
	bio: string;
	subject: string;
    cost: number;
    schedule: Schedule[];
}

export default function TeacherForm() {
    const history = useHistory();

    // State Management
    const [schedule, setSchedule] = useState<Schedule[]>([
        { week_day: 0, from: '', to: '' },
    ]);

    function addScheduleItem() {
        const newScheduleItem = { week_day: 0, from: '', to: '' };

        setSchedule([...schedule, newScheduleItem]);
    }

    // React Hook Form Management
    const { control, register, handleSubmit } = useForm<FormValues>();

    useFieldArray({ control, name: "schedule" })

    const handleCreateClass =
    handleSubmit((data: FormValues) => {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = data;

        console.log(data);

        api.post('classes', {
            name, avatar, whatsapp, bio, subject, cost: Number(cost), schedule
        }).then(() => {
            history.push('/');
        }).catch((err) => {
            alert(err);
        });

        console.log(data);
    });

    // TSX
    return (
        <FormPage className="container" id="page-teacher-form">
            <PageHeader
                title="Welcome. Glad to have you aboard."
                subtitle="Sign yourself in, and we can get started."
            />
            <FormMain>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Personal Information</legend>

                        <InputComponent inputId="name" title="Full Name" ref={register} />
                        <InputComponent inputId="avatar" title="Avatar" ref={register} />
                        <InputComponent inputId="whatsapp" title="Whatsapp" ref={register} />
                        <TextComponent textId="bio" title="Bio" ref={register} />
                    </fieldset>

                    <fieldset>
                        <legend>Class Information</legend>

                        <SelectComponent
                            selectId="subject"
                            title="Subject"
                            options={[
                                {value: 'logic', label: 'Logic'},
                                {value: 'math', label: 'Math'},
                                {value: 'algorithms', label: 'Algorithms'},
                                {value: 'dataStructures', label: 'Data Structures'},
                            ]}
                            ref={register}
                        />
                        <InputComponent
                            inputId="cost"
                            title="Hourly Class Pricing"
                            ref={register}
                        />
                    </fieldset>

                    <fieldset className="schedule">
                        <legend>
                            <div className="legend-content">
                                Availability Schedule
                                <button type="button" onClick={addScheduleItem}>
                                    + New Timestamp
                                </button>
                            </div>
                        </legend>

                        {schedule.map((item, index) => {
                            return (
                                <ScheduleItem key={item.week_day + index}
                                    className="schedule-item">
                                    <SelectComponent
                                        selectId={`schedule[${index}].week_day`}
                                        title="Weekday"
                                        options={[
                                            {value: '0', label: 'Sunday'}, {value: '1', label: 'Monday'},
                                            {value: '2', label: 'Tuesday'}, {value: '3', label: 'Wednesday'},
                                            {value: '4', label: 'Thursday'}, {value: '5', label: 'Friday'},
                                            {value: '6', label: 'Saturday'}
                                        ]}
                                        ref={register}
                                    />
                                    <InputComponent
                                        inputId={`schedule[${index}].from`}
                                        title="From"
                                        type="time"
                                        ref={register}
                                    />
                                    <InputComponent
                                        inputId={`schedule[${index}].to`}
                                        title="To"
                                        type="time"
                                        ref={register}
                                    />
                                </ScheduleItem>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={iconWarning} alt="Warning"/>
                            Hey, you! <br />
                            Make sure you've typed in all the fields!
                        </p>
                        <button type="submit">Sign Up</button>
                    </footer>
                </form>
            </FormMain>
        </FormPage>
    );
}
