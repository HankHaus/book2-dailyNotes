const feelings = [
    {
        id: 1,
        subject: "book4",
        date: "1/21/22",
        feeling: "I'm back in book two, what does that say?",
        timeSpent: 380
    },
    {
        id: 2,
        subject: "book2",
        date: "1/21/22",
        feeling: "great it's fun to get a more solid understanding",
        timeSpent: 120
    }
]

const todaysNote = {
    id: 3,
    subject: "book2",
    date: "1/21/22",
    feeling: "better than yesterday",
    timeSpent: 100
}

feelings.push(todaysNote)
const searchTerm = "great it's fun to get a more solid understanding"



    /*
    console.log(`Note ${feeling.id}
    ${feeling.date}
    I learned ${feeling.subject}
    i spent ${feeling.timeSpent} minutes working on it
    I felt ${feeling.feeling}
    ----------------------`)
    }
    */
    //const searchTerm = "great it's fun to get a more solid understanding"
   
   
    for (const feeling of feelings) {
        if (feeling.feeling === "great it's fun to get a more solid understanding") {
            console.log(`${feeling.feeling}`)
        }
    }
