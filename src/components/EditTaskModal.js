import TaskForm from './TaskForm';

const mock = {
  title: 'Edit Task',
  difficulty: 1,
  deadline: '2020-12-22T03:00:00.000Z',
  type: 'TEST',
};

const EditTaskModal = ({ show, editTaskHandler, modalToggler, ...props }) => (
  <>
    {show ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <TaskForm
              task={mock}
              submitHandler={editTaskHandler}
              modalToggler={modalToggler}
              title="Edit Task"
            />
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
);

export default EditTaskModal;
