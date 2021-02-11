import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ReactComponent as Headphone } from './svg/Headphone.svg';



class Section1 extends Component {
    render() {
        return (
            <div className="section1">
                    <Row className="d-md-block row1">
                        <Col className="float-left left-col d-flex align-items-center" xs={12} md={9}>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p className=" red-p">məhdud sayda</p>
                                    <h1>QULAQLIQ JBL E35 QARA</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget diam nam proin elit a</p>
                                </Col>
                                <Col className="" xs={6} md={6}>
                                    <Headphone />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="float-right order-0 right-col bottom" xs={6} md={3}>
                            <h1>
                                50+ <br></br> Brend
                            </h1>
                            <p>indi al <i class="arrow right icon"></i></p>

                        </Col>
                        <Col className="float-right order-last right-col top" xs={6} md={3}>
                            <h1>
                                1000+  <br></br> Məhsul
                            </h1>
                            <p>indi al <i class="arrow right icon"></i></p>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default Section1;
