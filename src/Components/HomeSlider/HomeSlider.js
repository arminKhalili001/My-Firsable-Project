import React, { useEffect, useState } from "react";

import "./HomeSlider.css"

const HomeSlider = () => {


    const [id, setId] = useState("1", "")



    const setPreviousImage = () => {
        if (Number(id) < 2) {

            setId(6);
        } else {

            setId(Number(id) - 1);
        }

    }

    const setNextImage = () => {

        if (Number(id) > 5) {
            setId(1)

        } else {

            setId(Number(id) + 1);
        }
    }

    console.log("Iddddd", id);
    return ( 
        <div className="HomeSlider">
            <button onClick={setPreviousImage} className="Previous-btn">  </button> <img src={`/products/0${id}.jpg`} /><button onClick={setNextImage} className="Next-btn">  </button >
        </div>
    )
}

export default HomeSlider;