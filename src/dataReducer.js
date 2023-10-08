const initState = {
  exercises: [],
  foods: [],
  goals: [],
  loading: false,
  exerciseLoading: {
    adding: false,
    deleting: false,
  },
  foodLoading: {
    adding: false,
    deleting: false,
  },
  goalLoading: {
    adding: false,
    deleting: false,
  },
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
        exerciseLoading: {
          adding: true,
          deleting: false,
        },
      };
    case "ADD_FOOD_LOADING":
      return {
        ...state,
        foodLoading: {
          adding: true,
          deleting: false,
        },
      };
    case "ADD_GOAL_LOADING":
      return {
        ...state,
        goalLoading: {
          adding: true,
          deleting: false,
        },
      };
    case "DELETE_EXERCISE_LOADING":
      return {
        ...state,
        exerciseLoading: {
          adding: false,
          deleting: true,
        },
      };
    case "DELETE_FOOD_LOADING":
      return {
        ...state,
        foodLoading: {
          adding: false,
          deleting: true,
        },
      };
    case "DELETE_GOAL_LOADING":
      return {
        ...state,
        goalLoading: {
          adding: false,
          deleting: true,
        },
      };
    case "ADD_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
        exerciseLoading: {
            adding: false,
            deleting: false,
          },
        error: null,
      };
    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        foods: action.payload,
        foodLoading: {
            adding: false,
            deleting: false,
          },
        error: null,
      };
    case "ADD_GOAL_SUCCESS":
      return {
        ...state,
        goals: action.payload,
        goalLoading: {
            adding: false,
            deleting: false,
          },
        error: null,
      };
    case "ADD_DATA_FAILURE":
      return {
        ...state,
        error: "Something went wrong try again",
        exerciseLoading: {
            adding: false,
            deleting: false,
          },
      };
    case "DELETE_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
        exercisesLoading: {
            adding: false,
            deleting: false,
          },
        error: null,
      };
    case "DELETE_FOOD_SUCCESS":
      return {
        ...state,
        foods: action.payload,
        foodLoading: {
            adding: false,
            deleting: false,
          },
        error: null,
      };
    case "DELETE_GOAL_SUCCESS":
      return {
        ...state,
        goals: action.payload,
        goalLoading: {
            adding: false,
            deleting: false,
          },
        error: null,
      };
    case "DELETE_DATA_FAILURE":
      return {
        ...state,
        error: "Something went wrong try again",
      };
    default:
      return state;
  }
};

export default dataReducer;
