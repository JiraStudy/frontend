import AddButton from '../components/AddButton';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import Board from "../components/Board";
const mockedTasks = [
  {
    id: 'id',
    title: 'title',
    difficulty: '1',
    type: 'Exam',
    status: 'TODO',
  },
  {
    id: 'id1',
    title: 'title1',
    difficulty: '3',
    type: 'Exam',
    status: 'IN_PROGRESS',
  },
  {
    id: 'id2',
    title: 'title2',
    difficulty: '3',
    type: 'Exam',
    status: 'DONE',
  },
];

const TaskByID = ({ modalToggler }) => {
  const [parentTaskTitle, setParentTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const updateTasks = newTasks => {
    setTasks(newTasks)
    // todo: llamar al BE
  }
  useEffect(() => {
    setParentTaskTitle('Parent Task');
  }, []);

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
      <AddButton onClick={modalToggler} text="Create a Subtask" />
      <div>
        <span style={{
          'font-size': '25px',
          marginRight: '20px'
          }}>
          {parentTaskTitle}
        </span>
        <Link
          to='/tasks'
        >
          Back
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          border: '3px solid #44A9FB',
          height: '600px',
        }}
      >
        <Board tasks={tasks}  onElementDropped={updateTasks}/>
      </div>
    </div>
  );
};

export default TaskByID;
