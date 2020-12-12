import AddButton from '../components/AddButton';
import TasksList from '../components/TasksList';
const tasks = [
  {
    id: 'id',
    title: 'title',
    deadline: '2020-02-02',
    difficulty: 'Easy',
    type: 'Exam',
    subtasksCount: 2,
  },
];
const Main = ({modalToggler}) => (
  <div
    style={{
      display: 'flex',
      'flex-direction': 'column',
      width: '100%',
      padding: '20px',
    }}
  >
    <AddButton
      onClick={modalToggler}
      text="Create a Task"
    />
    <span
      style={{
        'font-size': '25px',
      }}
    >
      My Tasks
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

export default Main;
