import { getRepository } from "typeorm";

import Classes from "../models/Classes";
import User from "../models/User";
import ClassSchedule from "../models/ClassSchedule";
import convertHoursToMinutes from "../utils/convertHoursToMinutes";

export default async function FilterClassService(query: any) {
    const { week_day, subject, time } = query;

    if(!week_day || !subject || !time)
    {
        throw new Error('Missing search filters');
    }

    const classes = getRepository(Classes)
	.createQueryBuilder('c')
    .where('c.subject = :subject', { subject })
    .leftJoinAndSelect('c.user', 'u')
    .leftJoin('class_schedule', 's', 'c.id = s.class_id')
	.andWhere('s.week_day = :week_day', { week_day })
	.andWhere('s.from <= :fromTime', { fromTime: convertHoursToMinutes(time) })
    .andWhere('s.to >= :toTime', { toTime: convertHoursToMinutes(time) })
	.getMany();

    /*const classes = await repo.find({
        where: {
            subject,
        },
        loadEagerRelations: true,
        join: {
            alias: 'classes',
            innerJoinAndSelect: {
                users: 'classes.user',
                class_schedule: 'class_schedule',
                schedule: 'class_schedule.classes'
            },
        }
    });*/

    return classes;
}
