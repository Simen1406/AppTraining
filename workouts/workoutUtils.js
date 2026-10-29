import chestWorkout from "./workouts.js";
import { workoutHistory } from "../data/workoutHistory.js";

function stringToDate(string) {
    const fullDate = new Date(string)
    const date = fullDate.toISOString().split("T")[0]
    return date
}

function retrieveExerciseNames(workout) {
    const exerciseList = workout.exercises.map((exercise) => exercise.name);
    return exerciseList
}

function SortWorkoutDates(workoutHistory) {
    if (!Array.isArray(workoutHistory)) {
        return [];
    }

    const sortedWorkouts = [...workoutHistory].sort((a, b) => {
        console.log(a.date.localeCompare(b.date))
        return b.date.localeCompare(a.date)
    });
    return sortedWorkouts
}

console.log(SortWorkoutDates(workoutHistory))


export function findExercise(workout, exercise) {
    const namedExcercise = workout.exercises.find((excercise) => excercise.name === exercise)
    if (namedExcercise != undefined) {
        return namedExcercise
    } else {
        return undefined
    }
}


export function calculateExcerciseVolume(workout, exercise) {
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

export function calculateTotalWokoutVolume(workout) {
    let exerciseList = retrieveExerciseNames(workout)
    const exerciseListLength = exerciseList.length
    let workoutVolume = 0

    for (let i = 0; i < exerciseListLength; i++) {
        let exname = exerciseList[i]
        let currentExVolume = calculateExcerciseVolume(workout, exname).totalVolume

        workoutVolume += currentExVolume

    }
    return workoutVolume
    

}

/*

console.log(retrieveExerciseNames(chestWorkout))
console.log(findExercise(chestWorkout, "cableFlies"))
console.log(calculateExcerciseVolume(chestWorkout, "cableFlies"))
console.log(findHeaviestSet(chestWorkout, "cableFlies"))
console.log(calculateTotalWokoutVolume(chestWorkout))
*/