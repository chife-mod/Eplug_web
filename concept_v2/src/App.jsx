import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import V5App from './V5App';
import HeaderButtons from './components/v5/HeaderButtons';
import WhatIsEplug from './components/v5/WhatIsEplug';
import AboutHero from './components/AboutHero';
import OurMission from './components/OurMission';
import AppLoyalty from './components/AppLoyalty';
import AppLoyaltySlide3 from './components/AppLoyaltySlide3';
import OurPrinciplesStaticCards from './components/OurPrinciplesStaticCards/OurPrinciplesCard';
import OurPrinciplesAnimatedSlider from './components/OurPrinciplesAnimatedSlider/OurPrinciplesAnimatedSlider';

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

const TestAboutHero = () => (
    <div className="w-full min-h-screen" style={{ background: '#0C0214' }}>
        <AboutHero />
    </div>
);

const TestOurMission = () => (
    <div className="w-full min-h-screen" style={{ background: '#0C0214' }}>
        <OurMission />
    </div>
);

const TestAppLoyalty = () => (
    <div className="w-full min-h-screen" style={{ background: '#ffffff' }}>
        <AppLoyalty />
    </div>
);

const TestSlide3 = () => (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        {/* AppLoyaltySlide3 needs a sized parent — it uses 100%×100% */}
        <div style={{ width: 1280, height: 550, borderRadius: 16, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
            <AppLoyaltySlide3 />
        </div>
    </div>
);

const TestOurPrinciples = () => (
    <div className="w-full min-h-screen" style={{ background: '#FFFFFF' }}>
        <OurPrinciplesStaticCards />
    </div>
);

const TestPrinciplesAnimated = () => (
    <div className="w-full" style={{ background: '#FFFFFF' }}>
        {/* Spacer so we can scroll into the section */}
        <div style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 20, color: '#999' }}>↓ Scroll down to see the animated slider ↓</p>
        </div>
        <OurPrinciplesAnimatedSlider />
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<V5App />} />
                <Route path="/test-header-buttons" element={<TestHeaderButtons />} />
                <Route path="/test-whatis" element={<TestWhatIsEplug />} />
                <Route path="/test-about-hero" element={<TestAboutHero />} />
                <Route path="/test-our-mission" element={<TestOurMission />} />
                <Route path="/test-app-loyalty" element={<TestAppLoyalty />} />
                <Route path="/test-slide3" element={<TestSlide3 />} />
                <Route path="/test-our-principles" element={<TestOurPrinciples />} />
                <Route path="/test-principles-animated" element={<TestPrinciplesAnimated />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
