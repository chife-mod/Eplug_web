import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import V5App from './V5App';
import HeaderButtons from './components/v5/HeaderButtons';
import WhatIsEplug from './components/v5/WhatIsEplug';

const TestHeaderButtons = () => (
    <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: '#DEDCF9' }}>
        <div className="flex flex-col items-center">
            <HeaderButtons />
            <p style={{ marginTop: '40px', fontSize: '13px', color: 'rgba(60,40,120,0.4)', letterSpacing: '0.02em' }}>
                Hover over the buttons to test the hover effect
            </p>
        </div>
    </div>
);

const TestWhatIsEplug = () => (
    <div className="w-full min-h-screen bg-[#0A0A0A]">
        <WhatIsEplug />
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<V5App />} />
                <Route path="/test-header-buttons" element={<TestHeaderButtons />} />
                <Route path="/test-whatis" element={<TestWhatIsEplug />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
