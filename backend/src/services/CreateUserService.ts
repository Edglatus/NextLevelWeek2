import { getRepository, getConnection } from "typeorm";

// Models
import User from "../models/User";
import Classes from "../models/Classes";
import ClassSchedule from "../models/ClassSchedule";

// Utils
import convertHoursToMinutes from "../utils/convertHoursToMinutes";

//Interfaces
interface ScheduleItem
{
    week_day: number;
    from: string;
    to: string;
}

interface Request
{
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number
    schedule: ScheduleItem[];
}


export default async function CreateUserService(request: Request)
{
    const {
        name, avatar, whatsapp, bio,
        subject, cost,
        schedule
    } = request;

    // Get Repositories
    const userRepo = getRepository(User);
    const classRepo = getRepository(Classes);
    const scheduleRepo = getRepository(ClassSchedule);

    return await getConnection().transaction( async (transactionalEntityManager) => {
        // Create User
        const createdUser = await transactionalEntityManager.save(User, {
            name, avatar, whatsapp, bio
        });

        // Create Class
        const createdClass = await transactionalEntityManager.save(Classes, {
            subject, cost, user: createdUser
        });


        // Create Schedule
        const createdSchedule = schedule.map((item: ScheduleItem) => {
            return {
                week_day: item.week_day,
                from: convertHoursToMinutes(item.from),
                to: convertHoursToMinutes(item.to),
                classes: createdClass,
            }
        });

        await transactionalEntityManager.save(ClassSchedule, createdSchedule);

        return ({createdUser, createdClass, createdSchedule})
    });
}
