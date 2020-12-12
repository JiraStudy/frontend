import "./App.css";
import { useState } from 'react';
import AddTaskModal from './components/AddTaskModal';
import Main from "./views/Main";
import TaskByID from "./views/TaskByID";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [showModal, setshowModal] = useState(false);

  const modalToggler = () => setshowModal(!showModal);

  return (
      <Router>
          <div className="app-container">
              <AddTaskModal show={showModal} modalToggler={modalToggler}></AddTaskModal>
              <div className="gradient text-white min-h-screen flex items-center">
                  <Switch>
                      <Route path="/tasks/:taskID">
                          <TaskByID />
                      </Route>
                      <Route path="/tasks">
                          <Main />
                      </Route>
                  </Switch>
              </div>
            </div>
      </Router>
  );
}

export default App;

