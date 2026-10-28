import chestWorkout from "./workouts.js";

import { findExercise } from "./workoutUtils.js";

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

function removeSet(workout, exercise, setIndex) {
  const namedExercise = findExercise(workout, exercise)
  if (namedExercise === undefined) {
    return workout
  }

  const removeCorrectSet = namedExercise.sets.map((set, index) => {
    if (index === setIndex) {
      return set.splice 
    }
  }) 

}

console.log(removeSet(chestWorkout, "cableFlies", 1))
