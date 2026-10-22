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


function retrieveExerciseNames(workout) {
    const exerciseList = workout.exercises.map((exercise) => exercise.name);
    return exerciseList

}

function findExercise(workout, exercise) {
    const namedExcercise = workout.exercises.find((excercise) => excercise.name === exercise)
    if (namedExcercise != undefined) {
        return namedExcercise
    } else {
        return undefined
    }
}


function calculateExcerciseVolume(workout, exercise) {
    const foundExercise = findExercise(workout, exercise)
    const excerciseSets = foundExercise.sets;
    let volumeObj = {
        volumePerSet: [],
        heaviestSet: {},
        totalVolume: 0
        }

    const lenSets = excerciseSets.length;
    let heaviestSet = 0

    for (let i = 0; i < lenSets; i++) {
        let rep = excerciseSets[i].reps;
        let weights = excerciseSets[i].weight

        let volume = rep * weights

        if (heaviestSet < volume) {
            heaviestSet = volume
            volumeObj.heaviestSet = {"set": i+1, "volume": volume}
        }
       

        /* add sets and total volume to the object*/ 
        volumeObj.volumePerSet.push({"set": i+1, "volume": volume})
        volumeObj.totalVolume += volume
    }

    
    return volumeObj
}

function findHeaviestSet(workout, exercise) {
    const allExercises = retrieveExerciseNames(workout);

    if (allExercises.includes(exercise)) { 
       const exerciseVolume = calculateExcerciseVolume(workout, exercise)
       return exerciseVolume.heaviestSet

    } else {
        return "That exercise is not added to this workout"
    }
    
}

function calculateTotalWokoutVolume(workout) {
    let exerciseList = retrieveExerciseNames(workout)
    const exerciseListLength = exerciseList.length
    let workoutVolume = 0

    for (let i = 0; i < exerciseListLength; i++) {
        let exname = exerciseList[i]
        let currentExVolume = calculateExcerciseVolume(workout, exname).totalVolume

        workoutVolume += currentExVolume

    }
    return "Total workout volume: " +  workoutVolume
    

}

    /*
console.log(retrieveExerciseNames("chestWorkout"))

console.log(findExercise(chestWorkout, "cableFlies"))
console.log(calculateExcerciseVolume(chestWorkout, "cableFlies"))
*/
console.log(retrieveExerciseNames(chestWorkout))
console.log(findExercise(chestWorkout, "cableFlies"))
console.log(calculateExcerciseVolume(chestWorkout, "cableFlies"))
console.log(findHeaviestSet(chestWorkout, "cableFlies"))
console.log(calculateTotalWokoutVolume(chestWorkout))