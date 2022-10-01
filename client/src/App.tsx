import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TasksContainer from './components/TasksContainer/TasksContainer';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TasksContainer />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
