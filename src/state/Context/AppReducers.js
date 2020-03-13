import { GET_PEOPLE, GET_NEXT, SET_LOADING, CHAR_LOADING, FILTER } from '../TYPES'

export default (state, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      }
    case GET_NEXT:
      return {
        ...state,
        character: action.payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      }
    case CHAR_LOADING:
      return {
        ...state,
        charLoading: false,
      }

    case FILTER:
      return {
        ...state,
        filterString: action.payload,
      }
    default:
      return state
  }
}
