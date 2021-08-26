import { connect } from "react-redux";
import {addTodo} from '../../redux/actions'
import {store} from '../../redux/store';

let AddTodo = ({dispatch}) => {
    console.log(dispatch);
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    dispatch(addTodo(input.value))
                    input.value = '';
                    store.subscribe(() => console.log(store.getState()))
                }}    
            >
                <input ref={node => (input = node)}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}


export default connect()(AddTodo)