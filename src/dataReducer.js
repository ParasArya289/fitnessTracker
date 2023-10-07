const initState ={
    exercises:[],
    foods:[],
    goals:[],
    loading:false,
    error:null,
}
const dataReducer = (state = initState, action) => {
    switch (action.type) {
      case 'FETCH_EXERCISES_SUCCESS':
        return {
          ...state,
          exercises: action.payload,
          loading: false,
          error: null,
        }
  
      case 'FETCH_EXERCISES_FAILURE':
        return {
          ...state,
          loading: false,
          error: 'Error while fetching exercises',
        }
      case 'FETCH_FOODS_SUCCESS':
        return {
          ...state,
          foods: action.payload,
          loading: false,
          error: null,
        }
  
      case 'FETCH_FOODS_FAILURE':
        return {
          ...state,
          loading: false,
          error: 'Error while fetching foods',
        }
      case 'FETCH_GOALS_SUCCESS':
        return {
          ...state,
          goals: action.payload,
          loading: false,
          error: null,
        }
  
      case 'FETCH_GOALS_FAILURE':
        return {
          ...state,
          loading: false,
          error: 'Error while fetching goals',
        }
      case 'FETCH_DATA_LOADING':
        return {
          ...state,
          loading: true,
        }
      default:
        return state
    }
  }
  
  export default dataReducer