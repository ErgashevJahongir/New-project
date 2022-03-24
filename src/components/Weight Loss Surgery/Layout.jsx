import { Outlet, useLocation } from 'react-router-dom';
import { Top } from './Top';
import LeftMenu from './LeftMenu';
import { Container, GlobalStyle } from './style';

function Layout() {
    let location = useLocation();

    return (
        <>
            <GlobalStyle />
            <main>
                <Top location={location} />
                <Container>
                    <div className="section">
                        <LeftMenu />
                        <Outlet />
                    </div>
                </Container>
            </main>
        </>
    );
}

export default Layout;
