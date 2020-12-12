import AddButton from '../components/AddButton';
import TasksList from '../components/TasksList';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
const mockedTasks = [
  {
    id: 'id',
    title: 'title',
    difficulty: '1',
    type: 'Exam',
    status: '1',
  },
  {
    id: 'id1',
    title: 'title1',
    difficulty: '3',
    type: 'Exam',
    status: '2',
  },
  {
    id: 'id2',
    title: 'title2',
    difficulty: '3',
    type: 'Exam',
    status: '3',
  },
];

const TaskByID = ({ modalToggler }) => {
  const [parentTaskTitle, setParentTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

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
      <Link
        to='/tasks'
        style={{
          'font-size': '25px',
        }}
      >
        {parentTaskTitle}
      </Link>
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
  );
};

export default TaskByID;
