import chestWorkout from "./workouts.js";
import { workoutHistory } from "../data/workoutHistory.js";

import { calculateTotalWokoutVolume, findExercise } from "./workoutUtils.js";

/* File for editing workouts*/

function addNewSet(workout, exercise, newSet) {
  const namedExercise = findExercise(workout, exercise);
  if (namedExercise !== undefined) {
    const updatedExercises = workout.exercises.map((exerciseX) => {
      if (exerciseX.name === exercise) {
        return {
          ...exerciseX,
          sets: [...exerciseX.sets, newSet],
        };
      }
      return exerciseX;
    });
    return {
      ...workout,
      exercises: updatedExercises,
    };
  } else {
    console.log("exercise does not exist");
    return workout;
  }
}




function updateSet(workout, exerciseName, setIndex, updatedSet) {
  const namedExercise = findExercise(workout, exerciseName)
  if (namedExercise === undefined) {
    return workout}


  const NewupdatedSet = namedExercise.sets.map((set, index) => {
    if (index === setIndex) {
      return updatedSet
    };
    return set
  })

  const updatedExercise = {
    ...namedExercise,
    sets: NewupdatedSet
  }

  const updatedExercises = workout.exercises.map((exercise) => {
    if (exercise.name === exerciseName) {
      return updatedExercise;
    }
    return exercise
  })

  return {
    ...workout, 
    exercises: updatedExercises 
  }
}
/*
const workoutWithNewSet = updateSet(chestWorkout, "cableFlies", 2, { reps: 12, weight: 10 })
console.log(workoutWithNewSet.exercises[1].sets)
console.log(chestWorkout.exercises[1].sets)
*/

function removeSet(workout, exerciseName, setIndex) {
  const namedExercise = findExercise(workout, exerciseName)
  if (namedExercise === undefined) {
    return workout
  }

  if (
    !Number.isInteger(setIndex) || 
    setIndex > namedExercise.sets.length ||
    setIndex < 0
  ) {
    return workout;
  }

  const removeCorrectSet = namedExercise.sets.filter(
    (_, index) =>  index !== setIndex); 
      

    const updatedExercise = {
      ...namedExercise,
      sets: removeCorrectSet
    }

    const updatedExercises = workout.exercises.map((exercise) => {
      if (exercise.name === exerciseName) {
        return updatedExercise;
      }
      return exercise
    })
    return {
      ...workout,
      exercises: updatedExercises
    }

}

/*
const workoutWithRemovedSet = removeSet(chestWorkout, "cableFlies", 1)

console.log(workoutWithRemovedSet.exercises[1].sets)
console.log(chestWorkout.exercises[1].sets)
*/

function findWorkoutById(workoutHistory, workoutId) {

  if (workoutHistory === undefined) {
    return "WorkoutHistory does not exist"
  }

  if (
    !Number.isInteger(workoutId) ||
    workoutId < 0 ||
    workoutId > workoutHistory.length
  ) {
    return "WorkoutId does not exist"
  }

  return workoutHistory.filter((workout) => workout.id === workoutId) 
} 

/*
console.log(findWorkoutById(workoutHistory, 2))
console.log(findWorkoutById(workoutHistory, 4))
*/

function getWorkoutByType(workoutHistory, workoutType) {
  if (workoutHistory === undefined) {
    return "WorkoutHistory does not exist"
  }

  if (
    !String(workoutType)
  ) {
    return "Workoutype does not exist"
  }

  return workoutHistory.filter((workout) => workout.type.toLowerCase() === workoutType.toLowerCase())
}
/*
console.log(getWorkoutByType(workoutHistory, "chest"))
console.log(getWorkoutByType(workoutHistory, "fullBody"))
*/


function findWorkoutWithExercise(workoutHistory, exerciseName) {
  if (!Array.isArray(workoutHistory)) {
    return [];
  }
  
  return workoutHistory.filter((workout)=> {
    return workout.exercises.some(
      (exercise) => exercise.name === exerciseName )
  })


}
/*
console.log(findWorkoutWithExercise(workoutHistory, "cableFlies"))
*/

function calculateTotalWorkoutHistory(workoutHistory) {
  if (!Array.isArray(workoutHistory)) return 0;

  const totalVolume = workoutHistory.reduce((total, workout) => {
    const workoutVolume = calculateTotalWokoutVolume(workout)
    return total + workoutVolume;
  }, 0);

  return totalVolume;
  }
/*
console.log(calculateTotalWorkoutHistory(workoutHistory))
*/

function sortWorkoutsByDate(workoutHistory) {
  console.log(workoutHistory)
}
console.log(sortWorkoutsByDate(workoutHistory))