import TasksList from "./TasksList";
import { DragDropContext } from 'react-beautiful-dnd';

const Board = props => {
    const getTasksByStatus = statusType => props.tasks.filter(task => task.status === statusType)

    const onDragEnd = (result) => {
        debugger
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
        props.onElementDropped(newTasks)
        return newTasks
    }
    return (
        <DragDropContext
            onDragEnd = {onDragEnd}
        >
            <TasksList title="To do" tasks={getTasksByStatus('TODO')} id='TODO'/>
            <TasksList title="In Progress" tasks={getTasksByStatus('IN_PROGRESS')} showLeftBorder showRightBorder id='IN_PROGRESS'/>
            <TasksList title="Done" tasks={getTasksByStatus('DONE')} id='DONE'/>
        </DragDropContext>
    )
}

export default Board