import React from 'react';
import {Spinner} from "react-bootstrap";
import { Col,Row } from 'react-bootstrap';


const LoadingMessage = () => {
    return (
        <Row>
            <Col>
                <Spinner animation="border" variant="primary" size="sm" /> <span>Loading...</span>
            </Col>
        </Row>
    )
}

export default LoadingMessage