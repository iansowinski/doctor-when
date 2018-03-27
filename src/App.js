import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import Navigation from './components/navigation.jsx';
import Projects from './components/projects.jsx';
import CurrentTask from './components/current.jsx';
const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
      <Layout>
        <Navigation />
        <Content>
          <Row>
            <Col span={24}>
                <div>
                  <Route exact path="/" component={CurrentTask} />
                  <Route path="/test" component={Projects} />
                </div>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      </Router>
    );
  }
}

export default App;
