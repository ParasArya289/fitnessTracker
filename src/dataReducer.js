const initState = {
  exercises: [],
  foods: [],
  goals: [],
  loading: false,
  exerciseLoading: false,
  foodLoading: false,
  goalLoading: false,
  error: null,
};
const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISES_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_EXERCISES_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching exercises",
      };
    case "FETCH_FOODS_SUCCESS":
      return {
        ...state,
        foods: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_FOODS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching foods",
      };
    case "FETCH_GOALS_SUCCESS":
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_GOALS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching goals",
      };
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_EXERCISE_LOADING":
      return {
        ...state,
        exerciseLoading: true,
      };
    case "ADD_FOOD_LOADING":
      return {
        ...state,
        foodLoading: true,
      };
    case "ADD_GOAL_LOADING":
      return {
        ...state,
        goalLoading: true,
      };
    case "ADD_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
        exerciseLoading: false,
        error: null,
      };
    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        foods: action.payload,
        foodLoading: false,
        error: null,
      };
    case "ADD_GOAL_SUCCESS":
      return {
        ...state,
        goals: action.payload,
        goalLoading: false,
        error: null,
      };
    case "ADD_DATA_FAILURE":
      return {
        ...state,
        error: "Something went wrong try again",
        exerciseLoading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
