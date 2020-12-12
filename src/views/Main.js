import AddButton from '../components/AddButton';
import Board from "../components/Board";
import {useEffect, useState} from "react";
const mockedTasks = [
  {
    id: 1,
    title: 'title',
    deadline: '2020-02-02',
    difficulty: '1',
    type: 'Exam',
    subtasksCount: 2,
    status: 'TODO',
  },
{
    id: 2,
    title: 'title',
    deadline: '2020-02-02',
    difficulty: '2',
    type: 'Exam',
    subtasksCount: 2,
    status: 'IN_PROGRESS',
},
{
    id: 11,
    title: 'title',
    deadline: '2020-02-02',
    difficulty: '2',
    type: 'Exam',
    subtasksCount: 2,
    status: 'DONE',
},
{
    id: 3,
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
    const updateTasks = newTasks => {
        setTasks(newTasks)
        // todo: llamar al BE
    }
    useEffect(() => {
        fetch("http://3.21.207.104:8080/tasks")
            .then(res => res.json())
            .then(
                (result) => {
                    setTasks(result.data);
                }
            )
    }, []);

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
        <Board tasks={tasks} onElementDropped={updateTasks}/>
        </div>
      </div>
)};

export default Main;
