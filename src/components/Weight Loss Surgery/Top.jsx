import * as React from 'react';
import { Container, TopBlog, TopContent, TopTitle } from './style';
import { Breadcrumb } from './Breadcrumb';

export const Top = ({ location }) => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <TopContent>
            <Container>
                <div className="center">
                    <TopBlog>
                        <TopTitle>Weight Loss Surgery</TopTitle>
                        <div
                            role="presentation"
                            className="center"
                            onClick={handleClick}
                        >
                            <Breadcrumb location={location} />
                        </div>
                    </TopBlog>
                </div>
            </Container>
        </TopContent>
    );
};
