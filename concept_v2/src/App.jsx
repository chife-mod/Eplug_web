import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import V5App from './V5App';
import HeaderButtons from './components/v5/HeaderButtons';

const TestHeaderButtons = () => (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center relative overflow-hidden">
        {/* Adds a background to see the blur clearly */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="relative z-10 p-10">
            <HeaderButtons />
        </div>
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<V5App />} />
                <Route path="/test-header-buttons" element={<TestHeaderButtons />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
