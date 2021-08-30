import "./../styles/App.scss";
import React from 'react';
import { Hero, Navbar, Container } from "react-bulma-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from "./../assets/lp-badge-white.svg";

export interface NavRoute {
    /* The url path, i.e. in the url `http://localhost/about`, `/about` is the path. */
    path: string;
    /* The name of the route that's displayed in the navigation. */
    label: string;
};

interface NavProps {
    routes: NavRoute[]
};

export const Nav = ({ routes } : NavProps) => {
    const [isActive, setIsActive] = React.useState(false)
    const toggleActive = () => setIsActive((a) => !a);
    return (
        <Hero className="slogan-hero is-bold" color="danger">
            <Hero.Header>
                <Navbar className="lp-navbar" active={isActive}>
                    <Container>
                        <Navbar.Brand>
                            <Navbar.Item href="https://layout-parser.github.io/">
                                <img src={logo} alt="Logo" className="lp-badge" />
                            </Navbar.Item>
                            <Navbar.Burger onClick={toggleActive} />
                        </Navbar.Brand>
                        <Navbar.Menu>
                            <Navbar.Container align="right">
                                {
                                    routes.map((route, i) => (
                                        <Navbar.Item key={i} href={route.path}>
                                            {route.label}
                                        </Navbar.Item>
                                    ))
                                }
                                <Navbar.Item renderAs="div">
                                    <a className="bg-transparent button is-danger" target="_blank" href="https://github.com/Layout-Parser/layout-parser" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                                    </a>
                                </Navbar.Item>
                            </Navbar.Container>
                        </Navbar.Menu>
                    </Container>
                </Navbar>
            </Hero.Header>
        </Hero>
    )
};