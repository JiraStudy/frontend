import './App.css';
import { useState } from 'react';
import AddTaskModal from './components/AddTaskModal';
import EditTaskModal from './components/EditTaskModal';
import Main from './views/Main';
import TaskByID from './views/TaskByID';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import 'react-datepicker/dist/react-datepicker.css';

import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [showModal, setshowModal] = useState(false);

  const modalToggler = () => setshowModal(!showModal);

  return (
    <Router>
      <div className="app-container">
        <div>
          <Header></Header>
        </div>
        <EditTaskModal show={showModal} modalToggler={modalToggler} />
        <div className="gradient text-white min-h-screen flex items-center">
          <Switch>
            <Route path="/tasks/:taskID">
              <TaskByID modalToggler={modalToggler} />
            </Route>
            <Route path="/tasks">
              <Main modalToggler={modalToggler} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
