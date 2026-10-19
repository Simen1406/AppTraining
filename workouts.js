const chestWorkout = {
    id: 1,
    date: "16.10.2026",
    exercises: [
        {
            name: "InclineDumbellPress",
            sets: [
                { reps: 8, weight: 16 },
                { reps: 8, weight: 20 },
                { reps: 7, weight: 27 }
            ]
        },
        {
            name: "cableFlies",
            sets: [
                { reps: 8, weight: 11 },
                { reps: 8, weight: 15 },
                { reps: 6, weight: 15 }
            ]
        },
        {
            name: "dips",
            sets: [
                { reps: 8, weight: 0 },
                { reps: 7, weight: 0 },
                { reps: 5, weight: 0 }
            ]
        },
        {
            name: "TricepsExtension",
            sets: [
                { reps: 8, weight: 12 },
                { reps: 8, weight: 15 },
                { reps: 6, weight: 17 }
            ]
        },
        {
            name: "tricepsPushdown",
            sets: [
                { reps: 8, weight: 30 },
                { reps: 5, weight: 30 },
                {reps: 10, weight: 25}
            ]
        }
    ]
};

function retrieveExcerciseNames() {
    let excerciseList = chestWorkout.excercises.map((excercise) => {
        return excercise.name    
    })
    return excerciseList

}

function findExercise(workout, name) {
    namedExcercise = workout.exercises.find((excercise) => excercise.name === name)
    if (namedExcercise != undefined) {
        return namedExcercise
    } else {
        return "Wrong workout or name"
    }
}

function calculateExcerciseVolume(excercise) {
    const namedExcercise = chestWorkout.exercises.find((excerciseName) => excerciseName.name === excercise);
    const excerciseSets = namedExcercise.sets;
    const lenSets = excerciseSets.length;
    let excerciseVolume = 0 

    for (let i = 0; i < lenSets; i++) {
        let rep = excerciseSets[i].reps;
        let weights = excerciseSets[i].weight

        let volume = rep * weights
        excerciseVolume += volume
    }

    return "Total volume for excercise :" + excerciseVolume    
}

function findHeaviestSet(excercise) {
    
}

console.log(retrieveExcerciseNames())

console.log(findExercise(chestWorkout, "cableFlies"))

console.log(calculateExcerciseVolume("cableFlies"))