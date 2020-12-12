import Task from './Task'

const TasksList = props => {
    const borderStyles = {
        'border-left': props.showLeftBorder ? '3px solid #44A9FB' : null,
        'border-right': props.showRightBorder ? '3px solid #44A9FB' : null,
    }
    return (
        <div style={{
            width: '33%',
            ...borderStyles
        }}>
            <div style={{
                'border-bottom': '3px solid #44A9FB',
                width: '100%'
            }}>
                <span style={{
                    'margin-left': '15px'
                }}>
                    {props.title}
                </span>
            </div>

            <div>
                {props.tasks.map( task => (
                    <div key={task.id} style={{
                        padding: '5px',
                        margin: '10px',
                        border: '3px solid #44A9FB'
                    }}>
                        <Task
                            task={task}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TasksList