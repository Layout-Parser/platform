import "./../styles/App.scss";
import React from 'react';
import { Hero, Navbar, Container } from "react-bulma-components";
import logo from "./../assets/lp-badge-white.svg";

export const Nav = () => {
    return (
        <Hero className="slogan-hero is-bold" color="danger">
            <Hero.Header>
                <Navbar className="lp-navbar">
                    <Container>
                        <Navbar.Brand>
                            <Navbar.Item href="https://layout-parser.github.io/">
                                <img src={logo} alt="Logo" className="lp-badge" />
                            </Navbar.Item>
                            <Navbar.Burger />
                        </Navbar.Brand>
                        <Navbar.Menu>
                            <Navbar.Container align="right">
                                <Navbar.Item href="#">
                                    At the end
                                </Navbar.Item>
                            </Navbar.Container>
                        </Navbar.Menu>
                    </Container>
                </Navbar>
            </Hero.Header>
        </Hero>
    )
};