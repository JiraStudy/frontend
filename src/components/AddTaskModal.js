import TaskForm from './TaskForm';

const AddTaskModal = ({ show, addTaskHandler, modalToggler, ...props }) => (
  <>
    {show ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <TaskForm title="Add Task" submitHandler={addTaskHandler} modalToggler={modalToggler} addMode={true} />
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
);

export default AddTaskModal;
