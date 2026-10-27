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
  if (namedExercise !== undefined) {
  console.log(namedExercise)


  const NewupdatedSet = namedExercise.sets.map((set, index) => {
    if (index === setIndex) {
      return {
        updateSet
      };
    }
    return set
  })
  return {
    ...workout, 
    sets: NewupdatedSet 
  }
  } else {
    return workout;
  }
}

/*
const updatedWorkout = addNewSet(chestWorkout, "cableFlies", {
  reps: 8,
  weight: 17,
});
*/
console.log(updateSet(chestWorkout, "cableFlies", 2 , { reps: 12, weight: 10 }))
