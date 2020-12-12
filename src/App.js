import { useState } from 'react';
import AddButton from './components/AddButton';
import AddTaskModal from './components/AddTaskModal';

import './App.css';
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [showModal, setshowModal] = useState(false);

  const modalToggler = () => setshowModal(!showModal);

  return (
    <div className="app-container">
      <AddTaskModal show={showModal} modalToggler={modalToggler}></AddTaskModal>
      <div className="gradient text-white min-h-screen flex items-center">
        <div>
          <AddButton onClick={modalToggler} />
        </div>
      </div>
    </div>
  );
};

export default App;
