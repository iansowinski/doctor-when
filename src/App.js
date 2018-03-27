import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import Navigation from './components/navigation.jsx';
import Projects from './components/projects.jsx';
import CurrentTask from './components/current.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Row>
            <Col span={24}>
              <Route exact path="/" component={Projects} />
              <Route path="/current" component={CurrentTask} />
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
