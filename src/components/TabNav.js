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
                <Nav.Link as={NavLink} to="/" exact>
                    Home Page
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/character">
                    Characters
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/location">
                    Locations
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/episode">
                    Episodes
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

