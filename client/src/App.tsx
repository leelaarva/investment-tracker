import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // ✅ Added Navigate
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './auth';
import Home from './Home';
import Portfolio from './Portfolio';
import Insights from './Insights';
import AuthPage from './AuthPage';

function App() {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((token) => {
                    localStorage.setItem('token', token);
                });
            } else {
                localStorage.removeItem('token');
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/auth" />} /> {/* redirect to auth */}
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
