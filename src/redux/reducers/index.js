import { ADD_TODO, VisibilityFilters } from "../actions"

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}


export const todoApp = (state = initialState, action) => {
    // TODO: create action for delete
    switch (action.type) {
        case ADD_TODO :
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        default:
            return state
    }
}