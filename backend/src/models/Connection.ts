import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Column
} from 'typeorm';

import User from './User';

@Entity('connections')
class Connection {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('datetime', { default: new Date().toISOString() })
    created_at: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}

export default Connection;
