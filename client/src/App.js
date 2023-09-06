import './App.css';
import NavBar from './components/Navigation'
import { Routes, Route } from 'react-router-dom';
import TaskBoard from './components/Tasks';

function App() {
  return (
    <div className="App flex">
      <NavBar></NavBar>
      <div className="viewer min-h-screen border w-full text-white border-blue-400 bg-purple-600">
        <Routes>
          <Route path="/taskboard" element={<TaskBoard></TaskBoard>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
