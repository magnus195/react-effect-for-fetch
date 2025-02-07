import ArtListItem from "./ArtListItem.jsx";
import PropTypes from "prop-types";

function ArtList(props) {
    const { art } = props;

    let artItems = art.map((art, i) => {
        return (<ArtListItem key={i} art={art} />)
    });

    return (
        <ul className="art-list">
            {artItems}
        </ul>
    );
}

ArtList.propTypes = {
    art: PropTypes.array.isRequired
}

export default ArtList;