import React, {useEffect} from 'react'
import { useForm} from "react-hook-form";
import {Col, Form, Button,  Row} from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import ValidationError from "../common/ValidationError"
import apiStatus from '../../utilities/apiStatus';
import PropTypes from 'prop-types'

const CreateUserForm = ({beginCreateUser, createUserApiStatus}) => {

    const defaultFormData = {
        status: "true"
    }

    const schema = yup.object().shape({
        firstName: yup.string().required("Please enter first name"),
        lastName: yup.string().required("Please enter first name"),
        email: yup.string().email("Please enter a valid email").required("Please enter an email address"),
        isMale: yup.boolean().typeError('Please select gender'),
        status: yup.boolean().typeError("Please select status"),
    });

    const { register, handleSubmit, errors, reset} = useForm({
        defaultValues: defaultFormData,
        resolver: yupResolver(schema)
    });

    const createUser = data => {
        beginCreateUser(data.firstName, data.lastName, data.email, data.isMale, data.status,)
    }

    useEffect(() => {
        if(createUserApiStatus === apiStatus.SUCCEEDED){
            reset(defaultFormData);
        }
    }, [createUserApiStatus])


    return (
        <Form onSubmit={handleSubmit(createUser)}>
           <Form.Group as={Row}>
                <Form.Label column xs="12" md="3"xl="2">First Name</Form.Label>
                <Col xs="12" md="9" xl="10">
                    <Form.Control
                        name="firstName"
                        ref={register}
                    />
                    {errors.firstName && <ValidationError message = {errors.firstName.message}/>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column xs="12" md="3" xl="2">Last Name</Form.Label>
                <Col xs="12" md="9" xl="10">
                    <Form.Control
                        name="lastName"
                        ref={register}
                    />
                    {errors.lastName && <ValidationError message = {errors.lastName.message}/>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column xs="12" md="3" xl="2">Email Address</Form.Label>
                <Col xs="12" md="9" xl="10">
                    <Form.Control
                        name="email"
                        ref={register}
                    />
                    {errors.email && <ValidationError message = {errors.email.message}/>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column xs="12" md="3" xl="2">Gender</Form.Label>
                <Col xs="12" md="9" xl="10">
                    <Form.Check
                        name="isMale"
                        type="radio"
                        value={true}
                        label="Male"
                        id="male"
                        ref={register}
                        inline
                    />
                    <Form.Check
                        name="isMale"
                        type="radio"
                        value={false}
                        label="Female"
                        id="female"
                        ref={register}
                        inline
                    />
                    {errors.isMale && <ValidationError message = {errors.isMale.message}/>}
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column xs="12" md="3" xl="2">Status</Form.Label>
                <Col xs="12" md="9" xl="10">
                    <Form.Check
                        inline
                        label="Active"
                        name="status"
                        type="radio"
                        value={true}
                        id="activeStatus"
                        ref={register}
                    />
                    <Form.Check
                        inline
                        name="status"
                        type="radio"
                        value={false}
                        label="Inactive"
                        id="inactiveStatus"
                        ref={register}
                    />
                    {errors.status && <ValidationError message = {errors.status.message}/>}
                </Col>
            </Form.Group>
            <Row>
                <Col>
                    <Button type="submit" disabled={createUserApiStatus === apiStatus.LOADING}>{createUserApiStatus === apiStatus.LOADING ? "Creating user": "Create user"}</Button>
                </Col>
            </Row>
        </Form>
    )
}

CreateUserForm.propTypes = {
    beginCreateUser: PropTypes.func.isRequired,
    createUserApiStatus: PropTypes.string.isRequired
}

export default CreateUserForm
