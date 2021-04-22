import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Garrett Love',
      headerLinks: [
        { title: 'Home', path: '/portfolio' },
        { title: 'About', path: '/portfolio/about' },
        { title: 'Contact', path: '/portfolio/projects' }
      ],
      home: {
        title: 'Owen Ford',
        subTitle: 'Computer Engineer/Software Developer',
        text: 'Check out my profile links below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'My Projects'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Owen Ford</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/portfolio">Home</Link>
                <Link className="nav-link" to="/portfolio/about">About</Link>
                <Link className="nav-link" to="/portfolio/projects">Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/portfolio/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/portfolio/projects" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;