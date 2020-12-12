import './App.css';
import { useState, useEffect } from 'react';
import EditTaskModal from './components/EditTaskModal';
import Main from './views/Main';
import TaskByID from './views/TaskByID';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import 'react-datepicker/dist/react-datepicker.css';

import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
const mockedNotifications = [
  {
    title: 'Daiu',
    date: '2020-12-09T00:00'
  },
  {
    title: 'No se tiene que mostrar',
    date: '2020-12-15T00:00'
  }
]
const options = {
  body: "Keep up the good work",
  icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42_uObzBHdECqxyKcuYOP914EyEKN9ZZGJg&usqp=CAU",
  dir: "ltr"
};

const App = () => {
  const [showModal, setshowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
      notifications.filter(notification => new Date(notification.date) <= Date.now())
          .forEach(notification => new Notification(notification.title, options))
    },
    [notifications])
  useEffect(() => {
    setNotifications(mockedNotifications)
  }, [])
  const modalToggler = () => setshowModal(!showModal);
  Notification.requestPermission();
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
