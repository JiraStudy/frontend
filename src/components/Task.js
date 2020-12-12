import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

const difficulties = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
};

const Task = (props) => {
  return (
    <Draggable draggableId={`${props.task.id}`} index={props.task.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            style={{
              border: '3px solid rgb(68, 169, 251)',
              padding: '5px',
            }}
          >
            <div
              style={{
                display: 'flex',
                'justify-content': 'space-between',
              }}
            >
              {props.task.subTasksCount && (
                <Link
                  to={`/tasks/${props.task.id}`}
                  style={{
                    'font-size': '18px',
                  }}
                >
                  {props.task.title}
                </Link>
              )}
              {!props.task.subTasksCount && <span>{props.task.title}</span>}
              <span>{props.task.type}</span>
            </div>

            <div
              style={{
                display: 'flex',
                'flex-direction': 'column',
              }}
            >
              <span>{difficulties[props.task.difficulty]}</span>
              {props.task.deadline && <span>{props.task.deadline}</span>}
              {props.task.subTasksCount && (
                <span>Number of subtasks: {props.task.subTasksCount}</span>
              )}
              <div className="flex justify-end">
                <button
                  className="rounder border-2 bg-red-300 border-red-300 mr-1.5"
                  onClick={() => props.showDeleteModalHandler(props.task)}
                >
                  delete
                </button>
                <button
                  className="rounder border-2 bg-blue-300 border-blue-300 "
                  onClick={() => props.showEditModalHandler(props.task)}
                >
                  edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
