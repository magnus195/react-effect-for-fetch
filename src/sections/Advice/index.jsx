import React from "react";
import AdviceSlip from "./components/AdviceSlip.jsx";
import FavouriteSlipsList from "./components/FavouriteSlipsList.jsx";

function getAdvice() {
    // I hate caching :(
    return fetch("https://api.adviceslip.com/advice", {cache: "no-store"})
        .then((response) => response.json())
        .then((data) => data.slip.advice)
        .catch((error) => {
            console.error("Error fetching the advice: ", error);
            return "";
        });
}

function AdviceSection() {
    const [advice, setAdvice] = React.useState("");
    const [favouriteAdviceSlips, setFavouriteAdviceSlips] = React.useState([]);

    function saveAdvice(text) {
        setFavouriteAdviceSlips([...favouriteAdviceSlips, text]);
    }

    React.useEffect(() => {
        getAdvice().then((advice) => setAdvice(advice));
    }, []);
  return (
    <section>
      <h2>Advice Section</h2>
        <AdviceSlip advice={advice} saveAdvice={saveAdvice} getAdvice={() => getAdvice().then(setAdvice)}/>
        <FavouriteSlipsList adviceSlips={favouriteAdviceSlips}/>
    </section>
  )
}

export default AdviceSection
