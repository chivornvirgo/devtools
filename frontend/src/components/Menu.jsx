import React, { Component } from 'react';
import { Card, CardTitle, CardText, Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/app.css'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    goTo = (path)=>{
        console.log(this.props.history.push(path))
    }
    render() { 
        return ( 
            <Container style={{ marginTop: 50 }}>
            <Row>
              <Col md="4">
                <Card className="_app-box" body inverse app="json2table" onClick={(e) => { this.goTo("/json2table") }}>
                  <CardTitle><h3>Json2Table</h3></CardTitle>
                  <CardText>Json formater</CardText>
                </Card>
              </Col>
            </Row>
          </Container>
         );
    }
}
 
export default Main;