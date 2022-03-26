import * as React from 'react';
import { Container, TopBlog, TopContent, TopTitle } from './style';
import { Breadcrumb } from './Breadcrumb';

export const Top = ({ location, setExpanded }) => {
    return (
        <TopContent>
            <Container>
                <div className="center">
                    <TopBlog>
                        <TopTitle>Weight Loss Surgery</TopTitle>
                        <div role="presentation">
                            <Breadcrumb
                                setExpanded={setExpanded}
                                location={location}
                            />
                        </div>
                    </TopBlog>
                </div>
            </Container>
        </TopContent>
    );
};
