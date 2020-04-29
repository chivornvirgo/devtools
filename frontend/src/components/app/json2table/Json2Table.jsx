import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
class Json2Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <Container className="mt-5">
                <Row>
                    <Col md="12" className="pd-3">
                        <h1 style={{ fontFamily: 'roboto' }}>Json2Table</h1>

                        <form action="#" className="row">
                            <Col md="6">
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <div style={{minHeight:300}} className="shadow">

                                </div>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}

export default Json2Table;