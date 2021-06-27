import React, {useEffect} from 'react'
import {beginFetchUsers} from "../../redux/actions";
import {Col, Row} from "react-bootstrap";
import LoadingMessage from "../common/LoadingMessage"
import { connect } from "react-redux";
import apiStatus from '../../utilities/apiStatus';
import UserTable from "./UserTable";
import {StyledH1} from "../common/SharedStyledCompoments";
import PropTypes from 'prop-types'
import NoUser from "./NoUser";
import { toast } from "react-toastify";

const SearchUserPage  = ({users, fetchUsersApiStatus, beginFetchUsers}) => {

    useEffect(() => {          
        if(users.length === 0){
            beginFetchUsers();
        }}, []);
    
    useEffect(()=>{
        if(fetchUsersApiStatus === apiStatus.FAILED){
            toast.error("Failed fetch user.")
        }
    }, [fetchUsersApiStatus])

    return (
        <>
            <Row><Col><StyledH1>View All Users</StyledH1></Col></Row>
            {fetchUsersApiStatus === apiStatus.LOADING && <LoadingMessage />}
            {fetchUsersApiStatus === apiStatus.SUCCEEDED && users.length > 0 && <UserTable users={users} />}
            {fetchUsersApiStatus === apiStatus.SUCCEEDED && users.length === 0 && <NoUser />}
        </>
    )
}

SearchUserPage.propTypes = {
    users: PropTypes.array.isRequired, 
    beginFetchUsers: PropTypes.func.isRequired,
    fetchUsersApiStatus: PropTypes.string.isRequired, 
}

const mapDispatchToProps = {
    beginFetchUsers
};

const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        fetchUsersApiStatus: state.user.fetchUsersApiStatus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserPage);