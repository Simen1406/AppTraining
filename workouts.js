const chestWorkout = {
    id: 1,
    date: "16.10.2026",
    excercises: [
        {
            name: "InclineDumbellPress",
            sets: [
                {
                    reps: 8, weight: 16,
                    reps: 8, weight: 20,
                    reps: 7, weight: 27
                }
            ]
        },
        {
            name: "cableFlies",
            sets: [
                {
                    reps: 8, weight: 11,
                    reps: 8, weight: 15,
                    reps: 6, weight: 15
                }
            ]
        },
        {
            name: "dips",
            sets: [
                {
                    reps: 8, weight: 0,
                    reps: 7, weight: 0,
                    reps: 5, weight: 0
                }
            ]
        },
        {
            name: "TricepsExtension",
            sets: [
                {
                    reps: 8, weight: 12,
                    reps: 8, weight: 15,
                    reps: 6, weight: 17
                }
            ]
        },
        {
            name: "tricepsPushdown",
            sets: [
                {
                    reps: 8, weight: 30,
                    reps: 5, weight: 30
                }
            ]
        }
    ]
}

function findExcercise(workout, name) {
    excercisesList = workout.excercises

    for (excercise in workout.excercises)
        console.log(excercise)
    if (workout.excercises.name == true)
        return workout.excercises.name
}

console.log(findExcercise(chestWorkout, "cableFlies"))