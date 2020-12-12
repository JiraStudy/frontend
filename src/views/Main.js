import AddButton from '../components/AddButton';
import TasksList from '../components/TasksList';
import {useEffect, useState} from "react";
const mockedTasks = [
  {
    id: 'id',
    title: 'title',
    deadline: '2020-02-02',
    difficulty: '1',
    type: 'Exam',
    subtasksCount: 2,
    status: 'TODO',
  },
{
    id: 'id1',
    title: 'title',
    deadline: '2020-02-02',
    difficulty: '2',
    type: 'Exam',
    subtasksCount: 2,
    status: 'IN_PROGRESS',
},
{
    id: 'id11',
    title: 'title',
    deadline: '2020-02-02',
    difficulty: '2',
    type: 'Exam',
    subtasksCount: 2,
    status: 'DONE',
},
{
    id: 'id2',
    title: 'title',
    deadline: '2020-02-02',
    difficulty: '2',
    type: 'Exam',
    subtasksCount: 2,
    status: 'TODO',
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
          }}
        >
            <TasksList title="To do" tasks={getTasksByStatus('TODO')} />
            <TasksList title="In Progress" tasks={getTasksByStatus('IN_PROGRESS')} showLeftBorder showRightBorder />
            <TasksList title="Done" tasks={getTasksByStatus('DONE')} />
        </div>
      </div>
)};

export default Main;
