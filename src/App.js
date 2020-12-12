import "./App.css";
import AddButton from './components/AddButton';
import TasksList from "./components/TasksList";
import { useState } from 'react';
import AddTaskModal from './components/AddTaskModal';
import Header from './components/Header'

import './App.css';
import "react-datepicker/dist/react-datepicker.css";


  const tasks = [{
      id: 'id',
      title: 'title',
      deadline: '2020-02-02',
      difficulty: 'Easy',
      type: 'Exam',
      subtasksCount: 2,
  }]

const App = () => {
  const [showModal, setshowModal] = useState(false);

  const modalToggler = () => setshowModal(!showModal);

  return (
    <div className="app-container">
      <div>
        <Header></Header>
      </div>
      <AddTaskModal show={showModal} modalToggler={modalToggler}></AddTaskModal>
      <div className="gradient text-white min-h-screen flex items-center">
        <div style={{
            display: 'flex',
            'flex-direction': 'column',
            width: '100%'
        }}>
            <AddButton
                onClick={() => {window.alert('hola')}}
            />
            <div style={{
                display: 'flex',
                border: '3px solid #44A9FB',
                height: '600px',
                width: '1500px'
            }}>
                <TasksList
                    title='To do'
                    tasks={tasks}
                />
                <TasksList
                    title='In Progress'
                    tasks={tasks}
                    showLeftBorder
                    showRightBorder
                />
                <TasksList
                    title='Done'
                    tasks={tasks}
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

