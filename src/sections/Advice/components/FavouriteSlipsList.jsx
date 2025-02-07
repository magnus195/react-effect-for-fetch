import PropTypes from "prop-types";

function FavouriteSlipsList(props) {
    const {adviceSlips} = props;

    const adviceElements = adviceSlips.map((advice, index) => {
        return <li key={index}>{advice}</li>;
    });
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            {adviceElements.length === 0 && <p>No favourite advice slips yet</p>}
            <ul>
                {adviceElements}
            </ul>
        </section>
    );
}

FavouriteSlipsList.propTypes = {
    adviceSlips: PropTypes.array.isRequired
}

export default FavouriteSlipsList;