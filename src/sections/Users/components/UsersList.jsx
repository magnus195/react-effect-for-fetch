import UsersListItem from "./UsersListItem.jsx";
import PropTypes from "prop-types";

function UsersList(props) {
    const { users } = props;

    let userElements = users.map(user => {
        return (
            <UsersListItem key={user.id} user={user} />
        );
    });
    return (
        <ul className="users-list">
            {userElements}
        </ul>
    );
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersList;