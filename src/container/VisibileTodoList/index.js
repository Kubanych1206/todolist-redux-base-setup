import { connect } from "react-redux"
import { TodoList } from "../../components/TodoList"

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL": 
            return todos
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, "SHOW_ALL")
})


export default connect(
    mapStateToProps,
)(TodoList)
