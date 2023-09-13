import './App.css';
import NavBar from './components/Navigation'
import { Routes, Route } from 'react-router-dom';
import TaskBoard from './components/Tasks';

function App() {
  return (
    <div className="App flex">
      <NavBar></NavBar>
      <div className="viewer min-h-screen w-full text-white  bg-[rgb(244,248,251)]">
        <Routes>
          <Route path="/taskboard" element={<TaskBoard></TaskBoard>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
