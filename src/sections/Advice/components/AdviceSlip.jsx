import PropTypes from "prop-types";

function AdviceSlip(props) {
    const { advice, getAdvice, saveAdvice } = props;
    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button onClick={getAdvice}>Get More Advice</button>
            <button onClick={() => saveAdvice(advice)}>Save to Favorites</button>
        </section>
    );
}

AdviceSlip.propTypes = {
    advice: PropTypes.string.isRequired,
    getAdvice: PropTypes.func.isRequired,
    saveAdvice: PropTypes.func.isRequired
}

export default AdviceSlip;