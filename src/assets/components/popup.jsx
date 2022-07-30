import React from "react";

function closePopup() {
    const popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("visibilityPopup");
}

const Popup = (props) => {
    return (
        <div className="popup">
            <img className="image-github" alt="Github profile image" />
            <div className="section-popup">
                <h1 className="name-github"></h1>
                <p className="username-github"></p>
            </div>
            <div className="github-button-container">
            </div>
            <button onClick={closePopup} className="button-popup btn btn-primary">Fechar</button>
        </div>

    );
}
export default Popup;