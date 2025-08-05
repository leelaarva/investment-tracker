import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Insights from './Insights';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/insights" element={<Insights />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
