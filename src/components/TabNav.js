import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
        <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/">Home Page</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/character">
                    <NavLink to="/character">Characters</NavLink>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/location">
                    <NavLink to="/location">Locations</NavLink>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/episode">
                    <NavLink to="/episode">Episodes</NavLink>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

