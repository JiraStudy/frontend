import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const TasksList = (props) => {
  const borderStyles = {
    'border-left': props.showLeftBorder ? '3px solid #44A9FB' : null,
    'border-right': props.showRightBorder ? '3px solid #44A9FB' : null,
  };
  return (
    <Droppable droppableId={props.id}>
      {(provided) => (
        <div
          style={{
            width: '33%',
            ...borderStyles,
          }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div
            style={{
              'border-bottom': '3px solid #44A9FB',
              width: '100%',
            }}
          >
            <span
              style={{
                'margin-left': '15px',
              }}
            >
              {props.title}
            </span>
          </div>

          <div>
            {props.tasks.map((task) => (
              <div
                key={task.id}
                style={{
                  margin: '10px',
                }}
              >
                <Task
                  task={task}
                  setSelectedTaskHandler={props.setSelectedTaskHandler}
                  showDeleteModalHandler={props.showDeleteModalHandler}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default TasksList;
