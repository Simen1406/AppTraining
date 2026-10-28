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

const workoutWithRemovedSet = removeSet(chestWorkout, "cableFlies", 1)

console.log(workoutWithRemovedSet.exercises[1].sets)
console.log(chestWorkout.exercises[1].sets)
