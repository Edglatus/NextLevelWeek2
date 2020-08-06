import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import Classes from './Classes';

@Entity('class_schedule')
class ClassSchedule {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('integer', { name: 'week_day' })
    week_day: number;

    @Column('integer')
    to: number;

    @Column('integer')
    from: number;

    @ManyToOne(() => Classes)
    @JoinColumn({ name: 'class_id' })
    classes: Classes;
}

export default ClassSchedule;
