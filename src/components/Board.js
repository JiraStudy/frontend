import TasksList from './TasksList';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = ({ showEditModalHandler, showAddModalHandler, showDeleteModalHandler, ...props }) => {
  const getTasksByStatus = (statusType) => props.tasks.filter((task) => task.status === statusType);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const sourceId = result.source.droppableId
        const destId = result.destination.droppableId
        const elementId = result.source.index
        if (sourceId === destId) {
            return;
        }
        const taskIdx = props.tasks.findIndex(task => task.id === elementId)
        if (taskIdx === -1) {
            return
        }
        const newTasks = [...props.tasks]
        newTasks[taskIdx].status = destId
        props.onElementDropped(newTasks, taskIdx)
        return newTasks
    }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TasksList
        title="To do"
        tasks={getTasksByStatus('TODO')}
        id="TODO"
        showEditModalHandler={showEditModalHandler}
        showAddModalHandler={showAddModalHandler}
        showDeleteModalHandler={showDeleteModalHandler}
      />
      <TasksList
        title="In Progress"
        tasks={getTasksByStatus('IN_PROGRESS')}
        showLeftBorder
        showRightBorder
        id="IN_PROGRESS"
        showEditModalHandler={showEditModalHandler}
        showAddModalHandler={showAddModalHandler}
        showDeleteModalHandler={showDeleteModalHandler}
      />
      <TasksList
        title="Done"
        tasks={getTasksByStatus('DONE')}
        id="DONE"
        showEditModalHandler={showEditModalHandler}
        showAddModalHandler={showAddModalHandler}
        showDeleteModalHandler={showDeleteModalHandler}
      />
    </DragDropContext>
  );
};

export default Board;
