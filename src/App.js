import logo from "./logo.svg";
import "./App.css";
import AddButton from './components/AddButton';

function App() {
  return (
    <div className="gradient text-white min-h-screen flex items-center">
        <div>
            <AddButton
                onClick={() => {window.alert('hola')}}
            />
        </div>
    </div>
  );
}

export default App;
