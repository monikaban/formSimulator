import React from 'react'
import { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';

import QComp from './QComp'
import SComp from './SComp'
import FormHeader from './FormHeader'
import SFormHeader from './SFormHeader'
import ExportComp from './ExportComp'

export default class TabContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
	  
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              
              Form Configurator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
            
              Simulator
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}>
            
            Export
          </NavLink>
        </NavItem>

       </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
            <Col sm="1"></Col>
            <Col sm="11">
                <FormHeader />
            </Col>
          </Row>
            <Row>
            <Col sm="1"></Col>
              <Col sm="11">
              <Card body>
              <CardTitle>Form Details</CardTitle>
                <QComp />
                </Card>
              </Col>
            </Row>          
           </TabPane>
          <TabPane tabId="2">
            <Row>
            <Col sm="1"></Col>
            <Col sm="11">
            <Card body>
             <CardTitle><SFormHeader/></CardTitle>
              <SComp />
              </Card>
            </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
          <Row>
            <Col sm="9">
              <Card body>              
              	<ExportComp/>
              </Card>
            </Col>
          </Row>
        </TabPane>
        </TabContent>
      </div>
    );
  }
}