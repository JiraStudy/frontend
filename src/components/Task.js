import {
    Link
} from "react-router-dom";

const difficulties = {
    '1': 'Easy',
    '2': 'Medium',
    '3': 'Hard',
}

const Task = props => {
    return (
        <>
            <div style={{
                display: 'flex',
                'justify-content': 'space-between'
            }}>
                {props.task.subtasksCount &&
                    <Link to={`/tasks/${props.task.id}`} style={{
                        'font-size': '18px'
                    }}>
                        {props.task.title}
                    </Link>
                }
                {!props.task.subtasksCount &&
                    <span>
                        {props.task.title}
                    </span>
                }
                <span>
                    {props.task.type}
                </span>
            </div>

            <div style={{
                display: 'flex',
                'flex-direction': 'column'
            }}>
                <span>{difficulties[props.task.difficulty]}</span>
                {props.task.deadline && <span>{props.task.deadline}</span>}
                {props.task.subtasksCount && <span>Number of subtasks: {props.task.subtasksCount}</span>}
            </div>
        </>
    )
}

export default Task