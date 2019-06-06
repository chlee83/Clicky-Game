import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {

    return (
        <div className="jumbotron jumbotron-fluid bg-image text-light">
            <div className="col-12 text-center">
            <div className="display-3 bolder">Welcome to the Clicky Game!</div><br></br>
            <h4>
                This is a memory game. You have to click on one image at a time.
                Each time you click on a new image, you will gain one point. 
                If you click on an image you already clicked on, you will lose. 
                The goal is to click on all 16 images only once!
            </h4>
            <h4>Good Luck!</h4>
            </div>
        </div>
    )
}

export default Jumbotron;