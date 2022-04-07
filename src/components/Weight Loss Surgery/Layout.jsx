import { Outlet, useLocation } from 'react-router-dom';
import { Top } from './Top';
import LeftMenu from './LeftMenu';
import { Container, GlobalStyle } from './style';
import { useState } from 'react';

function Layout() {
    let location = useLocation();
    const [expanded, setExpanded] = useState(() => {
        const saved = localStorage.getItem('name');
        const initialValue = JSON.parse(saved);
        return initialValue || 'panel1';
    });

    return (
        <>
            <GlobalStyle />
            <main>
                <Top location={location} setExpanded={setExpanded} />
                <Container>
                    <div className="section">
                        <LeftMenu
                            expanded={expanded}
                            setExpanded={setExpanded}
                            location={location}
                        />
                        <Outlet />
                    </div>
                </Container>
            </main>
        </>
    );
}

export default Layout;
