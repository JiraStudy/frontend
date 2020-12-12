import "./App.css";
import AddButton from './components/AddButton';
import TasksList from "./components/TasksList";
import { useState } from 'react';
import AddTaskModal from './components/AddTaskModal';

import './App.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {
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
      <AddTaskModal show={showModal} modalToggler={modalToggler}></AddTaskModal>
      <div className="gradient text-white min-h-screen flex items-center">
        <div>
            <AddButton
                onClick={() => {window.alert('hola')}}
            />
            <div style={{
                display: 'flex'
            }}>
                <TasksList
                    title='To do'
                    tasks={tasks}
                />
                <TasksList
                    title='In Progress'
                    tasks={tasks}
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
};

export default App;
