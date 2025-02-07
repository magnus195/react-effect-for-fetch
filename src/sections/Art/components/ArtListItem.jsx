import PropTypes from "prop-types";
import PublicationHistoryList from "./PublicationHistoryList.jsx";

function ArtListItem(props) {
    const { art } = props;
    return (
        <li>
            <div className="frame">
                <img
                    alt={art.title}
                    src={art.imageURL}
                />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList history={art.publicationHistory}/>
        </li>
    );
}

ArtListItem.propTypes = {
    art: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        publicationHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}

export default ArtListItem;