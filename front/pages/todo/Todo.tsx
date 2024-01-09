
import './Todo.css';


const Todo = () => {


    return (
        <div className="todo">
            <h2>TODOリスト</h2>
            <ul>
                <li>Todo1<button>done</button></li>
                <li>Todo2<button>done</button></li>
                <li>Todo3<button>done</button></li>
            </ul>
        </div>

    )
}

export default Todo;