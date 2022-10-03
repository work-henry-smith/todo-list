const TodoListItem = (todo) => {
    return (
        <div>
            <h3>{todo.text}</h3>
            <button>Mark as Completed</button>
            <button>Remove</button>
        </div>
    )
}

export default TodoListItem;