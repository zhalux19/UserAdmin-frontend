import React from 'react'
import PropTypes from 'prop-types'
import {Table} from "react-bootstrap"

const UserTable = ({users}) => {

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {
                    users.map( x => 
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.email}</td>
                                <td>{x.gender}</td>
                                <td>{x.status ? "Active": "Inactive"}</td>
                            </tr>
                        )
                }
            </tbody>
        </Table>
    )

}

UserTable.propTypes = {
    users:PropTypes.array.isRequired
}

export default UserTable
