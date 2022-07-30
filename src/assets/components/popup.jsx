import React from "react";
import GithubImageButton from "../img/github-logo-button.png";
import LocationImage from "../img/location-image.png";

function ClosePopup() {
    const popup = document.getElementsByClassName("popup")[0];
    const container = document.getElementsByClassName("container")[0];
    popup.classList.toggle("visibilityPopup");
    container.classList.toggle("visibilitySection");
}

const Popup = (props) => {
    return (
        <div className="popup">
            <div className="section-popup">
                <img className="image-github" alt="Github profile image" />
                <h1 className="name-github"></h1>
                <div className="location-popup">   
                    <img width= "25" height= "25" src={LocationImage} alt="Image Location"/>
                    <p className="location-github"></p>
                </div>
            </div>
            <div className="button-popup">
                <a className="button-popup-github btn btn-light">
                    <img src={GithubImageButton} width="25" />  Sign In with Github
                </a>
                <button onClick={ClosePopup} className="button-popup btn btn-default">Close</button>
            </div>
        </div>

    );
}
export default Popup;