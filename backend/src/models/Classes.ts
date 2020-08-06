import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import User from './User';

@Entity('classes')
class Classes {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('varchar')
    subject: string;

    @Column('real')
    cost: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}

export default Classes;
