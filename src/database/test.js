const Database = require('./db')
const createProffy = require('./createProffy')
//const db = require('./db')

Database.then(async (db) => {
    //inserir od dados
    proffyValue = {
        name: 'Lucas Moura',
        avatar: 'https://avatars2.githubusercontent.com/u/68624631?s=460&u=370010a4ffc97b93337724489bbf53166e865498&v=4',
        whatsapp: '1194870728',
        bio: 'Técnico em Automação Industrial , comedor de casada, as vezes tem verginha alheia do irmão, a procura de sla',
    }

    classValue = {
        subject: '1',
        cost: '666',
        //
    }
    classScheduleValues = [
    {
        weekday: 3,
        time_from: 720,
        time_to: 1080
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1080
    }
]   
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // Consultar od dados inseridos

    //todos os proffys
        
    const selectedProffys = await db.all("SELECT * FROM proffys")
        /*console.log(selectedProffys)*/

        const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;  
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"
    `)
    console.log(selectClassesSchedules)
})
 