import ArtList from "./components/ArtList.jsx";
import {useEffect, useState} from "react";

const ART_API_BASE_URL = "https://boolean-uk-api-server.fly.dev";

function ArtsSection() {
    const [art, setArt] = useState([]);

    useEffect(() => {
        fetch(`${ART_API_BASE_URL}/art`)
            .then(response => response.json())
            .then(data => {
                return data.map((art) => {
                        art.imageURL = `${ART_API_BASE_URL}${art.imageURL}`;
                        return art;
                    }
                );
            }).then(data => setArt(data));
    }, []);

  return (
    <section>
      <h2>Arts Section</h2>
        <div className="scroll-container">
            <ArtList art={art}/>
        </div>
    </section>
  )
}

export default ArtsSection
