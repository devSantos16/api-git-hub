import React from "react";
import GithubImageButton from "../img/github-logo-button.png";
import LocationImage from "../img/location-image.png";
import ShowData from "../js/data";

const generatePopup = async () => {
    const object = await ShowData();
    const popup = document.getElementsByClassName("popup")[0];
    const image = document.getElementsByClassName("image-github")[0];
    const name = document.getElementsByClassName("name-github")[0];
    const location = document.getElementsByClassName("location-github")[0];
    const buttonPopupGithub = document.getElementsByClassName("button-popup-github")[0];
    const container = document.getElementsByClassName("container")[0];


    name.innerHTML = object.name;
    image.src = object.image_github;
    location.innerHTML = object.location;

    buttonPopupGithub.addEventListener('click', () => {
        window.location.href = object.url;
    })

    container.classList.toggle("visibilitySection");
    popup.classList.toggle("visibilityPopup");

}


const closePopup = () => {
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
                    <img width="25" height="25" src={LocationImage} alt="Image Location" />
                    <p className="location-github"></p>
                </div>
            </div>
            <div className="button-popup">
                <a className="button-popup-github btn btn-light">
                    <img src={GithubImageButton} width="25" />  Sign In with Github
                </a>
                <button onClick={closePopup} className="button-popup btn btn-default">Close</button>
            </div>
        </div>
    );
}

export {
    Popup,
    generatePopup
} 