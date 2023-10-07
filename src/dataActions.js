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
