import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('varchar')
    name: string;

    @Column('varchar', { name: 'avatar_url'} )
    avatar: string;

    @Column('varchar')
    whatsapp: string;

    @Column('varchar')
    bio: string;
}

export default User;
