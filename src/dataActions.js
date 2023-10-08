export const fetchExercises = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-backend.parasarya2.repl.co/fitness/exercises"
    );
    const { exercises } = await response.json();
    dispatch({ type: "FETCH_EXERCISES_SUCCESS", payload: exercises });
  } catch (error) {
    console.error("Error while fetching exercises:", error);
    dispatch({ type: "FETCH_EXERCISES_FAILURE" });
  }
};
export const fetchFoods = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-backend.parasarya2.repl.co/fitness/foods"
    );
    const { foods } = await response.json();
    dispatch({ type: "FETCH_FOODS_SUCCESS", payload: foods });
  } catch (error) {
    console.error("Error while fetching foods:", error);
    dispatch({ type: "FETCH_FOODS_FAILURE" });
  }
};
export const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://fitness-tracker-backend.parasarya2.repl.co/fitness/goals"
    );
    const { goals } = await response.json();
    dispatch({ type: "FETCH_GOALS_SUCCESS", payload: goals });
  } catch (error) {
    console.error("Error while fetching goals:", error);
    dispatch({ type: "FETCH_GOALS_FAILURE" });
  }
};

export const addEntry = (entry) => async (dispatch) => {
  console.log(
    `https://fitness-tracker-backend.parasarya2.repl.co/fitness/${entry.type}`
  );
  try {
    if (entry.type === "exercises") {
      dispatch({ type: "ADD_EXERCISE_LOADING" });
    } else if (entry.type === "foods") {
      dispatch({ type: "ADD_FOOD_LOADING" });
    } else if (entry.type === "goals") {
      dispatch({ type: "ADD_GOAL_LOADING" });
    }
    const response = await fetch(
      `https://fitness-tracker-backend.parasarya2.repl.co/fitness/${entry.type}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry.data),
      }
    );

    const data = await response.json();
    if (entry.type === "exercises") {
      dispatch({ type: "ADD_EXERCISE_SUCCESS", payload: data.exercise });
    } else if (entry.type === "foods") {
      dispatch({ type: "ADD_FOOD_SUCCESS", payload: data.food });
    } else if (entry.type === "goals") {
      console.log(data.goal);
      dispatch({ type: "ADD_GOAL_SUCCESS", payload: data.goal });
    }
  } catch (error) {
    console.log("Failed to add:", error);
    dispatch({ type: "ADD_DATA_FAILURE" });
  }
};

export const removeEntry = (entry) => async (dispatch) => {
  console.log(
    `https://fitness-tracker-backend.parasarya2.repl.co/fitness/${entry.type}/${entry._id}`
  );
  try {
    if (entry.type === "exercises") {
      dispatch({ type: "DELETE_EXERCISE_LOADING" });
    } else if (entry.type === "foods") {
      dispatch({ type: "DELETE_FOOD_LOADING" });
    } else if (entry.type === "goals") {
      dispatch({ type: "DELETE_GOAL_LOADING" });
    }
    const response = await fetch(
      `https://fitness-tracker-backend.parasarya2.repl.co/fitness/${entry.type}/${entry._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    if (entry.type === "exercises") {
      dispatch({ type: "DELETE_EXERCISE_SUCCESS", payload: data.exercise });
    } else if (entry.type === "foods") {
      dispatch({ type: "DELETE_FOOD_SUCCESS", payload: data.food });
    } else if (entry.type === "goals") {
      console.log(data.goal);
      dispatch({ type: "DELETE_GOAL_SUCCESS", payload: data.goal });
    }
  } catch (error) {
    console.log("Failed to delete:", error);
    dispatch({ type: "ADD_DATA_FAILURE" });
  }
};
