import {
    Link
} from "react-router-dom";
import {Draggable} from 'react-beautiful-dnd';

const difficulties = {
    '1': 'Easy',
    '2': 'Medium',
    '3': 'Hard',
}

const Task = props => {
    return (
        <Draggable draggableId={`${props.task.id}`} index={props.task.id}>
            {(provided, snapshot) => (
                <div ref = {provided.innerRef}
                     isDragging = {snapshot.isDragging}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                >
                    <div style={{
                        border: '3px solid rgb(68, 169, 251)',
                        padding: '5px'
                    }}>

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
                    </div>
                </div>
            )}
        </Draggable>

    )
}

export default Task