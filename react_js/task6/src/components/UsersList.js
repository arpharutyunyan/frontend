import React from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';

function UsersList(props) {

    return (
        <table className="usersList">
            <thead>
            <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
                props.usersList.map(item => (
                    <tr key={_.uniqueId()} data-id={_.uniqueId()}>
                        <td>{item.id}</td>
                        <td><img src={item.avatar} alt='avatar'/></td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}

export default UsersList;

UsersList.propTypes = {
    usersList: PropTypes.array.isRequired,
};

UsersList.defaultProps = {
    usersList: [],
};