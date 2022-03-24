import Overview from './components/Weight Loss Surgery/Overview';
import Faqs from './components/Weight Loss Surgery/FAQ';
import Candidate from './components/Weight Loss Surgery/Are You A Candidate';
import Rouxen from './components/Weight Loss Surgery/Procedures/Roux-en.jsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Weight Loss Surgery/Layout';
import Seleeve from './components/Weight Loss Surgery/Procedures/Seleeve';
import MiniGastric from './components/Weight Loss Surgery/Procedures/MiniGastric';
import Banded from './components/Weight Loss Surgery/Procedures/Banded';
import Gastric from './components/Weight Loss Surgery/Procedures/Gastric';
import IntraGastric from './components/Weight Loss Surgery/Procedures/IntraGastric';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Overview />} />
                <Route
                    path="procedures/roux-en-y-gastric-bypass"
                    element={<Rouxen />}
                />
                <Route
                    path="procedures/sleeve-gastrectomy"
                    element={<Seleeve />}
                />
                <Route
                    path="procedures/mini-gastric-bypass"
                    element={<MiniGastric />}
                />
                <Route
                    path="procedures/banded-bariatric-procedures"
                    element={<Banded />}
                />
                <Route
                    path="procedures/gastric-banding"
                    element={<Gastric />}
                />
                <Route
                    path="procedures/intra-gastric-balloon"
                    element={<IntraGastric />}
                />
                <Route path="candidate" element={<Candidate />} />
                <Route path="faqs" element={<Faqs />} />
            </Route>
        </Routes>
    );
}

export default App;
