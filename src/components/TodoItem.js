import { TrashCanIcon, CheckIcon, UncheckedIcon } from "../icons";

const StatusIcon = ({ completed }) => {
    return completed ? (
        <CheckIcon className="status-icon completed" />
    ) : (
        <UncheckedIcon className="status-icon" />
    );
};

const ToDoItem = ({ item, handleStatus, handleRemove }) => {
    const { title, completed, id } = item;
    return (
        <div className="todo">
            <button
                value={ completed }
                className="todo-item"
                style={{
                    textDecoration: completed ? `line-through` : `none`
                }}
                onClick={handleStatus}
            >
                <StatusIcon completed={completed} />
                {title}
            </button>
            <button data-testid={id} className="btn-delete" onClick={handleRemove}>
                <TrashCanIcon className="delete-icon" />
            </button>
        </div>
    );
};

export default ToDoItem