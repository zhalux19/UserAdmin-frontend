import React, {useEffect} from 'react'
import { Row, Col} from 'react-bootstrap';
import {beginCreateUser, createUserPageCleanUp} from "../../redux/actions"
import CreateUserForm from "./CreateUserForm";
import apiStatus from '../../utilities/apiStatus';
import { toast } from "react-toastify";
import { connect } from "react-redux";
import {StyledH1} from "../common/SharedStyledCompoments"
import PropTypes from 'prop-types'

const CreateUserPage = ({beginCreateUser, createUserApiStatus, createUserPageCleanUp}) => {

    useEffect(() => {       
        return () => {
            createUserPageCleanUp();
        }
      }, []);

    useEffect(()=>{
        if(createUserApiStatus === apiStatus.SUCCEEDED){
            toast.success("User created.")
            return;
        }
        if(createUserApiStatus === apiStatus.FAILED){
            toast.error("Failed create user.")
        }
    }, [createUserApiStatus])

    return (
        <>
            <Row>
                <Col><StyledH1>Create user</StyledH1></Col>
            </Row>
            <CreateUserForm {...{beginCreateUser, createUserApiStatus}}/>
        </>

    )
}

CreateUserPage.propTypes = {
    beginCreateUser: PropTypes.func.isRequired,
    createUserApiStatus: PropTypes.string.isRequired
}

const mapDispatchToProps = {
    beginCreateUser,
    createUserPageCleanUp
};

const mapStateToProps = (state) => {
    return {
        createUserApiStatus: state.userCreationPage.createUserApiStatus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserPage);
