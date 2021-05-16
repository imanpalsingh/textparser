import React from 'react';
import { Container } from 'reactstrap';
import Menu from '../Menu/Menu.component';

const Layout = (props) => {
    return (
        <div className="layout-container">
            <Menu />
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

export default Layout;
