import PropTypes from "prop-types";

function UsersListItem(props) {
    const { user } = props;
    const fullName = `${user.firstName} ${user.lastName}`;
    return (
        <li style={{ background: user.favouriteColour }}>
            <img
                src={user.profileImage}
                alt={fullName}
            />
            <h3>{fullName}</h3>
            <p>Email: {user.email}</p>
        </li>
    );
}

UsersListItem.propTypes = {
    user: PropTypes.shape({
        favouriteColour: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        profileImage: PropTypes.string.isRequired
    }).isRequired
}

export default UsersListItem;