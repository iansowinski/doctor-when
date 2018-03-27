import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import Navigation from './components/navigation.jsx';
import Timer from './components/timer.jsx';
import Test from './components/test.jsx';
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
                  <Route exact path="/" component={Timer} />
                  <Route path="/test" component={Test} />
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
