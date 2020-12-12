import AddButton from '../components/AddButton';
import TasksList from '../components/TasksList';
import { useState, useEffect } from 'react';
const mockedTasks = [
  {
    id: 'id',
    title: 'title',
    difficulty: '1', // todo: mapear difficulties y status y despues hacer d&d
    type: 'Exam',
    status: '1',
  },
  {
    id: 'id1',
    title: 'title1',
    difficulty: 'Easy',
    type: 'Exam',
    status: '2',
  },
  {
    id: 'id2',
    title: 'title2',
    difficulty: 'Easy',
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
      <span
        style={{
          'font-size': '25px',
        }}
      >
        {parentTaskTitle}
      </span>
      <div
        style={{
          display: 'flex',
          border: '3px solid #44A9FB',
          height: '600px',
          width: '1500px',
        }}
      >
        <TasksList title="To do" tasks={tasks} />
        <TasksList title="In Progress" tasks={tasks} showLeftBorder showRightBorder />
        <TasksList title="Done" tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskByID;
