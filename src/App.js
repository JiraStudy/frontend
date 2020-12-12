import "./App.css";
import AddButton from './components/AddButton';
import TasksList from "./components/TasksList";

function App() {
  const tasks = [{
      id: 'id',
      title: 'title',
      deadline: '2020-02-02',
      difficulty: 'Easy',
      type: 'Exam',
      subtasksCount: 2,
  }]
  return (
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
  );
}

export default App;
