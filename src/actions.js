import { CHANGE_SEARCH_FIELD , REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED} from './constants'

export const setSearchField = (Text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload : Text
})

export const requestRobots = (dispatch) => {
    dispatch({ type:})
}