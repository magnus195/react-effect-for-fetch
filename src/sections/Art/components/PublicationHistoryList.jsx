import PropTypes from "prop-types";

function PublicationHistoryList(props) {
    const { history } = props;

    let publicationElements = history.map((publication, i) => {
        return (
                <li key={i}>{publication}</li>
        );
    });

    return (
        <ul>
            {publicationElements}
        </ul>
    );
}

PublicationHistoryList.propTypes = {
    history: PropTypes.array.isRequired
}

export default PublicationHistoryList;
