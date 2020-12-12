import AddButton from '../components/AddButton';
import TasksList from '../components/TasksList';
import {useEffect, useState} from "react";
const mockedTasks = [
  {
    id: 'id',
    title: 'title',
    deadline: '2020-02-02',
    difficulty: 'Easy',
    type: 'Exam',
    subtasksCount: 2,
    status: '1',
  },
];

const Main = ({modalToggler}) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(mockedTasks);
    }, []);

    const getTasksByStatus = statusType => tasks.filter(task => task.status === statusType)
    return (
      <div
        style={{
          display: 'flex',
          'flex-direction': 'column',
          width: '100%',
          padding: '20px',
        }}
      >
        <AddButton
          onClick={modalToggler}
          text="Create a Task"
        />
        <span
          style={{
            'font-size': '25px',
          }}
        >
          My Tasks
        </span>
        <div
          style={{
            display: 'flex',
            border: '3px solid #44A9FB',
            height: '600px',
            width: '1500px',
          }}
        >
          <TasksList title="To do" tasks={getTasksByStatus('1')} />
          <TasksList title="In Progress" tasks={getTasksByStatus('2')} showLeftBorder showRightBorder />
          <TasksList title="Done" tasks={getTasksByStatus('3')} />
        </div>
      </div>
)};

export default Main;
